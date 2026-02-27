import {
  Hero,
  SearchBar,
  Ticker,
  Products,
  Whydcs,
  Services,
  Vendors,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <Ticker />
      <SearchBar />
      <Products />
      <Whydcs />
      <Services />
      <Vendors />
      <Testimonials />
    </div>
  );
}
