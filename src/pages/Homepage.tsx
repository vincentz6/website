import { Button, useMantineColorScheme, Text } from "@mantine/core";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat?";

export function Homepage() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <>
      <Button> button</Button>
      <Button onClick={() => setColorScheme("light")}>Light</Button>
      <Button onClick={() => setColorScheme("dark")}>Dark</Button>
      <Button onClick={() => setColorScheme("auto")}>Auto</Button>
      <Button
        onClick={clearColorScheme}
        variant="gradient"
        gradient={{ from: "gradient1", to: "gradient2", deg: 90 }}
      >
        Clear
      </Button>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Text size="lg" key={index} my="md" maw={600} mx="auto" id="home">
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
