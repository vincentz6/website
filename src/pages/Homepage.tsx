import { Text, Button } from "@mantine/core";
import { Avatar } from "../components/Avatar/Avatar";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat?";

export function Homepage() {
  return (
    <>
      <Avatar />
      <Button>HELLO</Button>
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
          <Text size="lg" key={index} my="md" maw={600} mx="auto" id="about">
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
