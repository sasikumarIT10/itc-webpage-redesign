/**
 * Export the full static website into output/website/ for GitHub.
 */

const { execSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "out");
const websiteDir = path.join(root, "output", "website");

function rimraf(target) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

function copyDir(source, destination) {
  fs.mkdirSync(destination, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const from = path.join(source, entry.name);
    const to = path.join(destination, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

console.log("Building static website export...");
execSync("npm run build", {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, STATIC_EXPORT: "true" },
});

if (!fs.existsSync(outDir)) {
  throw new Error("Static export failed: out/ folder was not created.");
}

console.log("Copying export to output/website/...");
rimraf(websiteDir);
copyDir(outDir, websiteDir);

const pages = [
  "index.html",
  "about/index.html",
  "about/history/index.html",
  "about/leadership/index.html",
  "about/awards/index.html",
  "businesses/index.html",
  "businesses/fmcg/index.html",
  "businesses/agri/index.html",
  "businesses/paper/index.html",
  "businesses/packaging/index.html",
  "businesses/it/index.html",
  "brands/index.html",
  "sustainability/index.html",
  "sustainability/reports/index.html",
  "investors/index.html",
  "media/index.html",
  "careers/index.html",
  "contact/index.html",
  "sitemap/index.html",
  "legal/terms/index.html",
  "legal/privacy/index.html",
  "legal/policies/index.html",
];

const readme = `# Full website static export

This folder contains a **complete static HTML export** of the ITC redesign prototype (31 pages).

## How to view locally

Open \`index.html\` in a browser, or serve the folder:

\`\`\`bash
npx serve output/website
\`\`\`

Then open the URL shown (usually http://localhost:3000).

## Pages included

${pages.map((page) => `- \`${page}\``).join("\n")}

## Regenerate

\`\`\`bash
npm run export:website
\`\`\`

Generated from the Next.js app in the repository root.
`;

fs.writeFileSync(path.join(websiteDir, "README.md"), readme, "utf8");
rimraf(outDir);

const fileCount = walkCount(websiteDir);
console.log(`Done. ${fileCount} files written to output/website/`);

function walkCount(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    count += entry.isDirectory() ? walkCount(full) : 1;
  }
  return count;
}
