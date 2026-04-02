/** @type {import('next').NextConfig} */

const nextConfig = {
  // ─── SECURITY HEADERS ───────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevents browsers from MIME-sniffing a response away from the declared content-type.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevents your site from being embedded in an <iframe> (clickjacking protection).
          { key: "X-Frame-Options", value: "DENY" },
          // Controls how much referrer info is passed when navigating away from your site.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Tells legacy browsers to block pages if a reflected XSS attack is detected.
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Restricts which browser features/APIs can be used on your site.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // ─── REDIRECTS ──────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // ─── TOP-LEVEL CATEGORY PAGES ──────────────────────────────────────────
      {
        source: "/epoxy-products-in-las-vegas-nevada",
        destination: "/epoxy-products",
        permanent: true,
      },
      {
        source: "/epoxy-products-in-las-vegas-nevada/",
        destination: "/epoxy-products",
        permanent: true,
      },
      {
        source: "/sealer-in-las-vegas-nevada",
        destination: "/sealer",
        permanent: true,
      },
      {
        source: "/sealer-in-las-vegas-nevada/",
        destination: "/sealer",
        permanent: true,
      },
      {
        source: "/overlay-in-las-vegas-nevada",
        destination: "/overlay",
        permanent: true,
      },
      {
        source: "/overlay-in-las-vegas-nevada/",
        destination: "/overlay",
        permanent: true,
      },
      {
        source: "/pool-deck-in-las-vegas-nevada",
        destination: "/pool-deck",
        permanent: true,
      },
      {
        source: "/pool-deck-in-las-vegas-nevada/",
        destination: "/pool-deck",
        permanent: true,
      },
      {
        source: "/stains-in-las-vegas-nevada",
        destination: "/stains",
        permanent: true,
      },
      {
        source: "/stains-in-las-vegas-nevada/",
        destination: "/stains",
        permanent: true,
      },
      {
        source: "/construction-equipment-rentals-in-las-vegas-nevada",
        destination: "/machine-rentals",
        permanent: true,
      },
      {
        source: "/construction-equipment-rentals-in-las-vegas-nevada/",
        destination: "/machine-rentals",
        permanent: true,
      },
      {
        source: "/construction-supplies-in-las-vegas-nevada",
        destination: "/concrete-forming-and-supplies",
        permanent: true,
      },
      {
        source: "/construction-supplies-in-las-vegas-nevada/",
        destination: "/concrete-forming-and-supplies",
        permanent: true,
      },
      {
        source: "/contact-us-2",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/contact-us-2/",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/water-proofing-systems/",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/deck-drain",
        destination: "/deck-drain-and-forms",
        permanent: true,
      },
      {
        source: "/deck-drain/",
        destination: "/deck-drain-and-forms",
        permanent: true,
      },
      {
        source: "/hoses-and-sprayers/",
        destination: "/hoses-and-sprayers",
        permanent: true,
      },
      {
        source: "/stamps-and-color-hardener",
        destination: "/color-hardener",
        permanent: true,
      },
      {
        source: "/stamps-and-color-hardener/",
        destination: "/color-hardener",
        permanent: true,
      },
      {
        source: "/concrete-retarder/",
        destination: "/concrete-retarder",
        permanent: true,
      },
      {
        source: "/stamps-2",
        destination: "/stamps",
        permanent: true,
      },
      {
        source: "/stamps-2/",
        destination: "/stamps",
        permanent: true,
      },
      {
        source: "/concrete-and-products/",
        destination: "/concrete-and-products",
        permanent: true,
      },

      // ─── SEALER PRODUCT PAGES ──────────────────────────────────────────────
      { source: "/246-polyurethane", destination: "/sealer", permanent: true },
      { source: "/246-polyurethane/", destination: "/sealer", permanent: true },
      {
        source: "/big-boss-formerly-solvent-30",
        destination: "/sealer",
        permanent: true,
      },
      {
        source: "/big-boss-formerly-solvent-30/",
        destination: "/sealer",
        permanent: true,
      },
      { source: "/everclear", destination: "/sealer", permanent: true },
      { source: "/everclear/", destination: "/sealer", permanent: true },
      { source: "/baracade-wb-244", destination: "/sealer", permanent: true },
      { source: "/baracade-wb-244/", destination: "/sealer", permanent: true },
      { source: "/arizona-sealer", destination: "/sealer", permanent: true },
      { source: "/arizona-sealer/", destination: "/sealer", permanent: true },
      { source: "/diamond-clear-vox", destination: "/sealer", permanent: true },
      {
        source: "/diamond-clear-vox/",
        destination: "/sealer",
        permanent: true,
      },
      {
        source: "/bdc-70-30-urethane",
        destination: "/sealer",
        permanent: true,
      },
      {
        source: "/bdc-70-30-urethane/",
        destination: "/sealer",
        permanent: true,
      },
      {
        source: "/4001-waterbased-urethane",
        destination: "/sealer",
        permanent: true,
      },
      {
        source: "/4001-waterbased-urethane/",
        destination: "/sealer",
        permanent: true,
      },
      { source: "/545-polyaspartic", destination: "/sealer", permanent: true },
      { source: "/545-polyaspartic/", destination: "/sealer", permanent: true },
      {
        source: "/rf300-polyaspartic",
        destination: "/sealer",
        permanent: true,
      },
      {
        source: "/rf300-polyaspartic/",
        destination: "/sealer",
        permanent: true,
      },
      { source: "/life-deck-gpd", destination: "/sealer", permanent: true },
      { source: "/life-deck-gpd/", destination: "/sealer", permanent: true },
      {
        source: "/lythic-cleaner-protector-densifier",
        destination: "/sealer",
        permanent: true,
      },
      {
        source: "/lythic-cleaner-protector-densifier/",
        destination: "/sealer",
        permanent: true,
      },
      { source: "/lythic-protector", destination: "/sealer", permanent: true },
      { source: "/lythic-protector/", destination: "/sealer", permanent: true },
      { source: "/lythic-cleaner", destination: "/sealer", permanent: true },
      { source: "/lythic-cleaner/", destination: "/sealer", permanent: true },

      // ─── EPOXY PRODUCT PAGES ───────────────────────────────────────────────
      {
        source: "/water-based-epoxy",
        destination: "/epoxy-products",
        permanent: true,
      },
      {
        source: "/water-based-epoxy/",
        destination: "/epoxy-products",
        permanent: true,
      },
      {
        source: "/epoxy-chips-flakes",
        destination: "/epoxy-products",
        permanent: true,
      },
      {
        source: "/epoxy-chips-flakes/",
        destination: "/epoxy-products",
        permanent: true,
      },
      {
        source: "/100-solids-rhino-gp",
        destination: "/epoxy-products",
        permanent: true,
      },
      {
        source: "/100-solids-rhino-gp/",
        destination: "/epoxy-products",
        permanent: true,
      },
      { source: "/metalics", destination: "/epoxy-products", permanent: true },
      { source: "/metalics/", destination: "/epoxy-products", permanent: true },
      {
        source: "/vapor-seal-epoxy",
        destination: "/epoxy-products",
        permanent: true,
      },
      {
        source: "/vapor-seal-epoxy/",
        destination: "/epoxy-products",
        permanent: true,
      },
      {
        source: "/3100-100-solids-epoxy",
        destination: "/epoxy-products",
        permanent: true,
      },
      {
        source: "/3100-100-solids-epoxy/",
        destination: "/epoxy-products",
        permanent: true,
      },

      // ─── STAIN PRODUCT PAGES ───────────────────────────────────────────────
      {
        source: "/life-deck-water-based-stain",
        destination: "/stains",
        permanent: true,
      },
      {
        source: "/life-deck-water-based-stain/",
        destination: "/stains",
        permanent: true,
      },
      {
        source: "/americrete-water-based-stains",
        destination: "/stains",
        permanent: true,
      },
      {
        source: "/americrete-water-based-stains/",
        destination: "/stains",
        permanent: true,
      },

      // ─── OVERLAY PRODUCT PAGES ─────────────────────────────────────────────
      {
        source: "/quickpatch-mapecem",
        destination: "/overlay",
        permanent: true,
      },
      {
        source: "/quickpatch-mapecem/",
        destination: "/overlay",
        permanent: true,
      },
      {
        source: "/ultra-plan-m20-plus",
        destination: "/overlay",
        permanent: true,
      },
      {
        source: "/ultra-plan-m20-plus/",
        destination: "/overlay",
        permanent: true,
      },
      { source: "/planitop-x", destination: "/overlay", permanent: true },
      { source: "/planitop-x/", destination: "/overlay", permanent: true },
      {
        source: "/skimcoat-planiprep-sc",
        destination: "/overlay",
        permanent: true,
      },
      {
        source: "/skimcoat-planiprep-sc/",
        destination: "/overlay",
        permanent: true,
      },
      {
        source: "/concrete-solutions-resurfacer",
        destination: "/overlay",
        permanent: true,
      },
      {
        source: "/concrete-solutions-resurfacer/",
        destination: "/overlay",
        permanent: true,
      },
      { source: "/planilevel-420", destination: "/overlay", permanent: true },
      { source: "/planilevel-420/", destination: "/overlay", permanent: true },
      {
        source: "/life-deck-ld-1-ld-2-ld-3-ld-5",
        destination: "/overlay",
        permanent: true,
      },
      {
        source: "/life-deck-ld-1-ld-2-ld-3-ld-5/",
        destination: "/overlay",
        permanent: true,
      },
      { source: "/deeplevel", destination: "/overlay", permanent: true },
      { source: "/deeplevel/", destination: "/overlay", permanent: true },
      { source: "/white-stamp-mix", destination: "/overlay", permanent: true },
      { source: "/white-stamp-mix/", destination: "/overlay", permanent: true },
      { source: "/planigrout-712", destination: "/overlay", permanent: true },
      { source: "/planigrout-712/", destination: "/overlay", permanent: true },
      { source: "/topcem-premix", destination: "/overlay", permanent: true },
      { source: "/topcem-premix/", destination: "/overlay", permanent: true },
      { source: "/ns-grout", destination: "/overlay", permanent: true },
      { source: "/ns-grout/", destination: "/overlay", permanent: true },
      { source: "/ultratop-sp", destination: "/overlay", permanent: true },
      { source: "/ultratop-sp/", destination: "/overlay", permanent: true },
      { source: "/eucofloor-sl160", destination: "/overlay", permanent: true },
      { source: "/eucofloor-sl160/", destination: "/overlay", permanent: true },
      { source: "/eucorepair-v100", destination: "/overlay", permanent: true },
      { source: "/eucorepair-v100/", destination: "/overlay", permanent: true },
      { source: "/level-top-polish", destination: "/overlay", permanent: true },
      {
        source: "/level-top-polish/",
        destination: "/overlay",
        permanent: true,
      },
      { source: "/level-top-pc-agg", destination: "/overlay", permanent: true },
      {
        source: "/level-top-pc-agg/",
        destination: "/overlay",
        permanent: true,
      },
      { source: "/eucoweld-2-0", destination: "/overlay", permanent: true },
      { source: "/eucoweld-2-0/", destination: "/overlay", permanent: true },
      { source: "/sika-flex-1csl", destination: "/overlay", permanent: true },
      { source: "/sika-flex-1csl/", destination: "/overlay", permanent: true },
      { source: "/sika-flex-1a", destination: "/overlay", permanent: true },
      { source: "/sika-flex-1a/", destination: "/overlay", permanent: true },

      // ─── WATERPROOFING PRODUCT PAGES ───────────────────────────────────────
      {
        source: "/fm-waterproof-system",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/fm-waterproof-system/",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/al-waterproof-system",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/al-waterproof-system/",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/ld-2000-urethane-waterproof-system",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/ld-2000-urethane-waterproof-system/",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/mc-waterproof-system",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/mc-waterproof-system/",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/ld-81",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/ld-81/",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/1589-2",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/1589-2/",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/ld-220",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/ld-220/",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/tamoseal",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/tamoseal/",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/akkro-7t",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      {
        source: "/akkro-7t/",
        destination: "/water-proofing-systems",
        permanent: true,
      },
      // ─── TOOLS PAGES ───────────────────────────────────────────────────────
      {
        source: "/makita-tools-and-accessories",
        destination: "/makita-tools",
        permanent: true,
      },
      {
        source: "/makita-tools-and-accessories/",
        destination: "/makita-tools",
        permanent: true,
      },
      {
        source: "/construction-tools-in-las-vegas-nevada",
        destination: "/tools",
        permanent: true,
      },
      {
        source: "/construction-tools-in-las-vegas-nevada/",
        destination: "/tools",
        permanent: true,
      },
      // ─── BLOG PAGES ───────────────────────────────────────────────────────
      {
        source: "/blog/concrete-material-costs-2025",
        destination: "/blog/concrete-material-costs-2026",
        permanent: true,
      },
      {
        source: "/blog/concrete-material-costs-2025/",
        destination: "/blog/concrete-material-costs-2026",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
