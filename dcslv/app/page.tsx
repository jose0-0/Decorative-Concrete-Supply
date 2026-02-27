import { Hero, SearchBar, Ticker, Products } from "@/components";

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <Ticker />
      <SearchBar />
      <Products />
    </div>
  );
}
