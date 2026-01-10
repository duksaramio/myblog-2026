import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.join(__dirname, "posts");
const moviesDir = path.join(__dirname, "movies");
const tagsDir = path.join(__dirname, "tags");
const rootDir = __dirname;

// Ensure tags directory exists and is clean
if (fs.existsSync(tagsDir)) {
  fs.rmSync(tagsDir, { recursive: true, force: true });
}
fs.mkdirSync(tagsDir);

const tagMap = {};
const allPosts = [];
const allMovies = [];

/**
 * Robustly extract metadata from HTML content
 */
function extractMetadata(content, filename, type) {
  // Title: captures everything after <title> until the first | or </title>
  const titleMatch = content.match(/<title>([^|]+)/);

  // Date: look for the post-meta div and capture the text content
  const dateMatch = content.match(/<div class="post-meta"[^>]*>\s*([^<\n]+)/);

  // Tags: extract from the post-tags section
  const tagMatches = content.match(/href="\/tags\/([^"]+)"/g);

  let title = titleMatch ? titleMatch[1].trim() : "Untitled";
  // Clean up "Movie Review: " from movie titles for lists
  if (type === 'movies') title = title.replace(/^Movie Review:\s*/, "");

  return {
    title,
    date: dateMatch ? dateMatch[1].trim() : "Unknown Date",
    tags: tagMatches
      ? [...new Set(tagMatches.map((m) => m.split("/")[2].replace('"', "")))]
      : [],
    url: `/${type}/${filename}`,
  };
}

// 1. Scan Posts
if (fs.existsSync(postsDir)) {
  fs.readdirSync(postsDir).forEach((file) => {
    if (file.endsWith(".html")) {
      const metadata = extractMetadata(fs.readFileSync(path.join(postsDir, file), "utf8"), file, "posts");
      allPosts.push(metadata);
      metadata.tags.forEach(tag => (tagMap[tag] = tagMap[tag] || []).push(metadata));
    }
  });
}

// 2. Scan Movies
if (fs.existsSync(moviesDir)) {
  fs.readdirSync(moviesDir).forEach((file) => {
    if (file.endsWith(".html") && file !== "movies.html") {
      const metadata = extractMetadata(fs.readFileSync(path.join(moviesDir, file), "utf8"), file, "movies");
      allMovies.push(metadata);
      metadata.tags.forEach(tag => (tagMap[tag] = tagMap[tag] || []).push(metadata));
    }
  });
}

// Sort helpers
const byDate = (a, b) => new Date(b.date) - new Date(a.date);
allPosts.sort(byDate);
allMovies.sort(byDate);

// Helper: Generate post list HTML snippet
function generatePostListHtml(items) {
  return items
    .map(
      (item) => `
                    <a href="${item.url}" class="post-item">
                        <span class="post-date">${item.date}</span>
                        <span class="post-title">${item.title}</span>
                    </a>`
    )
    .join("\n");
}

// 3. Update Main Pages
function updateMainPages() {
  const configs = [
    { file: "index.html", items: allPosts, limit: 5 },
    { file: "posts.html", items: allPosts, limit: null },
    { file: "movies.html", items: allMovies, limit: null }
  ];

  configs.forEach(config => {
    const filePath = path.join(rootDir, config.file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, "utf8");
    const itemsToShow = config.limit ? config.items.slice(0, config.limit) : config.items;
    const newListHtml = `<!-- POSTS_LIST_START -->
${generatePostListHtml(itemsToShow)}
                    <!-- POSTS_LIST_END -->`;

    const regex = /<!-- POSTS_LIST_START -->[\s\S]*<!-- POSTS_LIST_END -->/;
    if (regex.test(content)) {
      content = content.replace(regex, newListHtml);
      fs.writeFileSync(filePath, content);
      console.log(`✓ Updated ${config.file}`);
    }
  });
}

updateMainPages();

// 4. Generate Tag Pages
Object.entries(tagMap).forEach(([tag, items]) => {
  const tagSubDir = path.join(tagsDir, tag);
  if (!fs.existsSync(tagSubDir)) fs.mkdirSync(tagSubDir, { recursive: true });

  const itemsHtml = generatePostListHtml(items.sort(byDate));

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Posts Tagged: ${tag} | Duke Lee</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <div class="container">
        <header>
            <a href="/" class="logo">Duke Lee</a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/posts.html">Posts</a></li>
                    <li><a href="/movies.html">Movies</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <h1>Content Tagged: ${tag}</h1>
            <div class="posts-list">
                ${itemsHtml}
            </div>
            
            <div style="margin-top: 4rem;">
                <a href="/posts.html" style="font-size: 0.9rem;">← Back to All Posts</a>
            </div>
        </main>

        <footer>
            <p>100% vibe coded using Antigravity</p>
        </footer>
    </div>
</body>
</html>`;

  fs.writeFileSync(path.join(tagSubDir, "index.html"), htmlContent);
});

console.log("\nSummary: Automation complete. Tag pages generated for:", Object.keys(tagMap).sort().join(", "));
