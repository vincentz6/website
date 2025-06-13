import { Welcome } from "../components/Welcome/Welcome";
import { About } from "../components/About/About";
import { Projects } from "../components/Projects/Projects";
import { Skills } from "../components/Skills/Skills";
import { Experience } from "../components/Experience/Experience";
import { Contact } from "../components/Contact/Contact";

export function Homepage() {
  return (
    <>
      <Welcome />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
