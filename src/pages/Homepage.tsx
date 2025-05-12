import { Text } from "@mantine/core";
import { Welcome } from "../components/Welcome/Welcome";
import { About } from "../components/About/About";
import { Projects } from "../components/Projects/Projects";
import { Skills } from "../components/Skills/Skills";
import { Experience } from "../components/Experience/Experience";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat?";

export function Homepage() {
  return (
    <>
      <Welcome />
      <About />
      <Projects />
      <Skills />
      <Experience />
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Text size="lg" key={index} my="md" maw={600} mx="auto">
            {lorem}
          </Text>
        ))}
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Text size="lg" key={index} my="md" maw={600} mx="auto" id="projects">
            {lorem}
          </Text>
        ))}
    </>
  );
}
