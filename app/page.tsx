import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
