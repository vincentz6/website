import { Button, useMantineColorScheme, ActionIcon } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function Homepage() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <>
      <Button> button</Button>
      <Button onClick={() => setColorScheme("light")}>Light</Button>
      <Button onClick={() => setColorScheme("dark")}>Dark</Button>
      <Button onClick={() => setColorScheme("auto")}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
      <ActionIcon
        onClick={toggleColorScheme}
        size="lg"
        variant="outline"
        aria-label="Toggle color scheme"
      >
        {dark ? <IconSun size={20} /> : <IconMoon size={20} />}
      </ActionIcon>
    </>
  );
}
