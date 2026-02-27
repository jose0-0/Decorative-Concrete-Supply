import { Hero, SearchBar, Ticker } from "@/components";

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <Ticker />
      <SearchBar />
    </div>
  );
}
