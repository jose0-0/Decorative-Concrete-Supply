/**
 * Reads content/blog/index.json, finds any articles whose
 * publishDate matches today and whose status is "scheduled",
 * flips them to "published", and writes the updated index back.
 *
 * Only index.json is modified — MDX files are not touched.
 * The GitHub Actions workflow then commits index.json if it changed,
 * which triggers a DigitalOcean App Platform rebuild and deploys
 * the newly published articles.
 */

const fs = require("fs");
const path = require("path");

const INDEX_PATH = path.join(process.cwd(), "content/blog/index.json");

function getTodayString() {
  const today = new Date();
  const year = today.getUTCFullYear();
  const month = String(today.getUTCMonth() + 1).padStart(2, "0");
  const day = String(today.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function main() {
  if (!fs.existsSync(INDEX_PATH)) {
    console.log("No index.json found — nothing to do.");
    process.exit(0);
  }

  const raw = fs.readFileSync(INDEX_PATH, "utf-8");
  const index = JSON.parse(raw);
  const today = getTodayString();

  console.log(`Today is ${today}`);
  console.log(`Scanning ${index.length} articles in index.json...`);

  let publishedCount = 0;

  const updated = index.map((entry) => {
    if (entry.status === "scheduled" && entry.publishDate === today) {
      console.log(
        `  Publishing: ${entry.slug} (scheduled for ${entry.publishDate})`,
      );
      publishedCount++;
      return { ...entry, status: "published" };
    }
    return entry;
  });

  if (publishedCount === 0) {
    console.log("No articles due for publishing today.");
    process.exit(0);
  }

  fs.writeFileSync(INDEX_PATH, JSON.stringify(updated, null, 2) + "\n");
  console.log(
    `Done. Published ${publishedCount} article${publishedCount > 1 ? "s" : ""}.`,
  );
}

main();
