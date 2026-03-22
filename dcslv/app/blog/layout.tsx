// SEO metadata for the blog index
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concrete Resources & Guides | Decorative Concrete Supply Las Vegas",
  description:
    "Expert guides, how-tos, and industry insights from Decorative Concrete Supply in Las Vegas. 30+ years of decorative concrete knowledge for contractors and homeowners.",
  openGraph: {
    title: "Concrete Resources & Guides | DCS Las Vegas",
    description:
      "Expert guides, how-tos, and industry insights from Decorative Concrete Supply in Las Vegas.",
    url: "https://dcslv.net/blog",
    siteName: "Decorative Concrete Supply",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
