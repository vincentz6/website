import { Button, useMantineColorScheme } from "@mantine/core";

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
    </>
  );
}
