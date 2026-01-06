import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.join(__dirname, "posts");
const tagsDir = path.join(__dirname, "tags");

// Ensure tags directory exists and is clean
if (fs.existsSync(tagsDir)) {
  fs.rmSync(tagsDir, { recursive: true, force: true });
}
fs.mkdirSync(tagsDir);

const tagMap = {};

function extractMetadata(content) {
  const titleMatch = content.match(/<title>([^|]+)/);
  const dateMatch = content.match(/<div class=\"post-meta\"[^>]*>\s*([^\n<]+)/);
  const tagMatches = content.match(/href=\"\/tags\/([^\"]+)\"/g);

  return {
    title: titleMatch ? titleMatch[1].trim() : "Untitled",
    date: dateMatch ? dateMatch[1].trim() : "Unknown Date",
    tags: tagMatches
      ? tagMatches.map((m) => m.split("/")[2].replace('"', ""))
      : [],
  };
}

// Scan posts
fs.readdirSync(postsDir).forEach((file) => {
  if (file.endsWith(".html")) {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { title, date, tags } = extractMetadata(content);

    tags.forEach((tag) => {
      if (!tagMap[tag]) {
        tagMap[tag] = [];
      }
      tagMap[tag].push({ title, date, url: `/posts/${file}` });
    });
  }
});

// Generate tag pages
Object.entries(tagMap).forEach(([tag, posts]) => {
  const tagSubDir = path.join(tagsDir, tag);
  if (!fs.existsSync(tagSubDir)) {
    fs.mkdirSync(tagSubDir, { recursive: true });
  }

  const postsHtml = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(
      (post) => `
                <a href="${post.url}" class="post-item">
                    <span class="post-date">${post.date}</span>
                    <span class="post-title">${post.title}</span>
                </a>`
    )
    .join("\n");

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
            <h1>Posts Tagged: ${tag}</h1>
            <div class="posts-list">
                ${postsHtml}
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

console.log(
  "Tag pages generated successfully for:",
  Object.keys(tagMap).join(", ")
);
