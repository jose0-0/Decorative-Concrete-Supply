const fs = require("fs");
const path = require("path");

const index = JSON.parse(
  fs.readFileSync(path.join(__dirname, "content/blog/index.json"), "utf-8"),
);

const publishedSlugs = index
  .filter((entry) => entry.status === "published")
  .map((entry) => `/blog/${entry.slug}`);

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dcslv.net",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["*"],
  additionalPaths: async (config) => {
    const staticPages = [
      "/",
      "/blog",
      "/about-dcs",
      "/contact-us",
      "/epoxy-products",
      "/overlay",
      "/sealer",
      "/pool-deck",
      "/stains",
      "/stamps",
      "/color-hardener",
      "/concrete-and-products",
      "/concrete-forming-and-supplies",
      "/concrete-retarder",
      "/deck-drain-and-forms",
      "/dewalt-power-tools",
      "/hand-tools",
      "/hoses-and-sprayers",
      "/machine-rentals",
      "/makita-tools",
      "/tools",
      "/water-proofing-systems",
    ];

    const allPaths = [...staticPages, ...publishedSlugs];

    return allPaths.map((loc) => ({
      loc,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
};
