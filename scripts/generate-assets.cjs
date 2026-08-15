const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');

async function generateAssets() {
  const sourceImagePath = '/home/d3lee/.gemini/antigravity/brain/42336ac7-9f28-4a7f-9fde-f1baacbc2219/.user_uploaded/media_1786805075337.jpg';
  const publicDir = path.resolve(__dirname, '../public');
  const srcAssetsDir = path.resolve(__dirname, '../src/assets');

  if (!fs.existsSync(srcAssetsDir)) {
    fs.mkdirSync(srcAssetsDir, { recursive: true });
  }

  // Copy source avatar to assets and public
  fs.copyFileSync(sourceImagePath, path.join(srcAssetsDir, 'avatar.jpg'));
  fs.copyFileSync(sourceImagePath, path.join(publicDir, 'avatar.jpg'));
  console.log('Copied avatar to src/assets/avatar.jpg and public/avatar.jpg');

  // Load embedded fonts
  const playfairB64 = fs.readFileSync(path.join(__dirname, 'fonts/playfair.b64'), 'utf-8');
  const robotoB64 = fs.readFileSync(path.join(__dirname, 'fonts/roboto.b64'), 'utf-8');

  // 1. High-resolution Avatar PNG
  const avatarBuffer = await sharp(sourceImagePath)
    .resize(800, 800, { fit: 'cover' })
    .png({ quality: 100 })
    .toBuffer();
  
  fs.writeFileSync(path.join(publicDir, 'avatar.png'), avatarBuffer);
  console.log('Generated public/avatar.png');

  // 2. Avatar for Social Card with clean frame
  const avatarSize = 360;
  const avatarRadius = 24;
  const maskSvg = Buffer.from(`
    <svg width="${avatarSize}" height="${avatarSize}">
      <rect width="${avatarSize}" height="${avatarSize}" rx="${avatarRadius}" ry="${avatarRadius}" fill="#fff"/>
    </svg>
  `);

  const avatarCropped = await sharp(sourceImagePath)
    .resize(avatarSize, avatarSize, { fit: 'cover' })
    .composite([{
      input: maskSvg,
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  const avatarBase64 = avatarCropped.toString('base64');

  // 3. Generate Social Media Card (1200x630)
  const ogSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        @font-face {
          font-family: 'Playfair Display';
          font-weight: 700;
          src: url('data:font/truetype;charset=utf-8;base64,${playfairB64}') format('truetype');
        }
        @font-face {
          font-family: 'Roboto Mono';
          font-weight: 400;
          src: url('data:font/truetype;charset=utf-8;base64,${robotoB64}') format('truetype');
        }
        @font-face {
          font-family: 'Roboto Mono';
          font-weight: 700;
          src: url('data:font/truetype;charset=utf-8;base64,${robotoB64}') format('truetype');
        }
        .bg { fill: #f5f4ef; }
        .inner-box { fill: #fbfbf9; stroke: rgba(0, 0, 0, 0.08); stroke-width: 1.5; }
        .tag-box { fill: rgba(0, 0, 0, 0.04); stroke: rgba(0, 0, 0, 0.12); stroke-width: 1; }
        .tag-text { font-family: 'Roboto Mono', monospace; font-size: 13px; font-weight: 700; fill: #111111; letter-spacing: 1.5px; }
        .title { font-family: 'Playfair Display', serif; font-size: 64px; font-weight: 700; fill: #111111; }
        .subtitle { font-family: 'Roboto Mono', monospace; font-size: 20px; fill: rgba(0, 0, 0, 0.72); line-height: 1.5; }
        .subtext { font-family: 'Roboto Mono', monospace; font-size: 16px; fill: rgba(0, 0, 0, 0.5); }
        .url-text { font-family: 'Roboto Mono', monospace; font-size: 20px; font-weight: 700; fill: #111111; }
        .divider { stroke: rgba(0, 0, 0, 0.08); stroke-width: 1; }
        .avatar-frame { fill: #ffffff; stroke: rgba(0, 0, 0, 0.1); stroke-width: 1.5; }
      </style>
      <filter id="card-shadow" x="-5%" y="-5%" width="110%" height="115%">
        <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="rgba(0,0,0,0.04)" />
      </filter>
      <filter id="avatar-shadow" x="-8%" y="-8%" width="116%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="rgba(0,0,0,0.06)" />
      </filter>
    </defs>

    <!-- Canvas Background -->
    <rect width="1200" height="630" class="bg" />

    <!-- Main Container Card -->
    <rect x="44" y="44" width="1112" height="542" rx="20" class="inner-box" filter="url(#card-shadow)" />

    <!-- Left Column: Content -->
    <!-- Tag / Pill -->
    <g transform="translate(94, 96)">
      <rect width="140" height="34" rx="4" class="tag-box" />
      <text x="70" y="22" text-anchor="middle" class="tag-text">SARAM.IO</text>
    </g>

    <!-- Title -->
    <text x="94" y="210" class="title">Duk Lee</text>

    <!-- Description / Bio -->
    <text x="94" y="275" class="subtitle">I like books, movies and tinkering</text>
    <text x="94" y="308" class="subtitle">with computers.</text>
    <text x="94" y="356" class="subtext">Life Sciences &#8226; AI Systems &#8226; Writing</text>

    <!-- Divider -->
    <line x1="94" y1="410" x2="640" y2="410" class="divider" />

    <!-- Footer URL -->
    <g transform="translate(94, 465)">
      <circle cx="8" cy="-5" r="4" fill="#111111" />
      <text x="24" y="0" class="url-text">saram.io</text>
    </g>

    <!-- Right Column: Avatar Portrait -->
    <g transform="translate(700, 96)">
      <rect width="380" height="438" rx="20" class="avatar-frame" filter="url(#avatar-shadow)" />
      <!-- Embedded Cropped Avatar Image -->
      <image href="data:image/png;base64,${avatarBase64}" x="10" y="39" width="360" height="360" />
    </g>
  </svg>
  `;

  const ogBuffer = await sharp(Buffer.from(ogSvg))
    .png({ quality: 95 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'og-image.png'), ogBuffer);
  fs.writeFileSync(path.join(publicDir, 'social-card.png'), ogBuffer);
  fs.writeFileSync(path.join(publicDir, 'saram_consulting_og_image.png'), ogBuffer);
  console.log('Generated public/og-image.png, public/social-card.png, public/saram_consulting_og_image.png');

  // 4. Generate Favicons
  // We prepare a clean square avatar icon with slight rounding or circle for favicons
  const favSrc = await sharp(sourceImagePath)
    .resize(512, 512, { fit: 'cover' })
    .png()
    .toBuffer();

  // Favicon 512x512
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), favSrc);

  // Favicon 32x32 & 16x16
  const fav32 = await sharp(favSrc).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), fav32);

  const fav16 = await sharp(favSrc).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), fav16);

  // Apple Touch Icon 180x180
  const appleTouch = await sharp(favSrc).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouch);

  // Favicon.ico with multi-size using python
  execSync(`python3 -c "
from PIL import Image
src = Image.open('${path.join(publicDir, 'favicon.png')}')
src.save('${path.join(publicDir, 'favicon.ico')}', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
"`);
  console.log('Generated public/favicon.ico (16, 32, 48, 64)');

  // Favicon SVG
  const favSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#ffffff" rx="100"/>
  <image href="data:image/png;base64,${favSrc.toString('base64')}" width="512" height="512" />
</svg>
`;
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), favSvg);
  console.log('Generated public/favicon.svg');
}

generateAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
