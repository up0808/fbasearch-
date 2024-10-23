import Benefits from "./sections/Benefits";
import { Hero } from "./sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Hero />
      <Benefits />
    </div>
  );
}
