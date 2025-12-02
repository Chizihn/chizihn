import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <WorkExperience />
        <Education />
        {/* <SocialMedia /> */}
        <Contact />
      </div>
    </main>
  );
}
