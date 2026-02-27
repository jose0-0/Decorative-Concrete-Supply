import { Hero, SearchBar, Ticker, Products, Whydcs } from "@/components";

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <Ticker />
      <SearchBar />
      <Products />
      <Whydcs />
    </div>
  );
}
