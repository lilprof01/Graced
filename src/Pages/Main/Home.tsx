import { About, Hero, Experience, Projects, Stack, Reviews, Contact } from "@/Components/Main";
import { Footer, Header, ThemeToggle } from "@/Components/UI";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-900 dark:text-white bg-white dark:bg-black scroll-smooth">
      <ThemeToggle />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
