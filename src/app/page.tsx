import { Benefits } from "./sections/Benefits";
import { FAQ } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Sponsors } from "./sections/Sponsors";
import { Testimonials } from "./sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Hero />
      <Benefits />
      <Sponsors />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
