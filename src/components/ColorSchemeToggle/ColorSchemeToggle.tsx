import { IconSun, IconMoon } from "@tabler/icons-react";
import { useMantineColorScheme, ActionIcon, Tooltip } from "@mantine/core";
import classes from "./ColorSchemeToggle.module.css";

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const colorSchemeLabel = {
    dark: "Light Mode",
    light: "Dark Mode",
    auto: "Toggle color scheme",
  };

  return (
    <>
      <ActionIcon
        className={classes.toggle}
        onClick={toggleColorScheme}
        size="lg"
        radius="md"
        variant="gradient"
        aria-label="Toggle color scheme"
        gradient={
          dark
            ? { from: "redpink.5", to: "orange.4" }
            : { from: "lightblue.2", to: "lavender.3" }
        }
      >
        <Tooltip label={colorSchemeLabel[colorScheme]} withArrow>
          {dark ? <IconSun /> : <IconMoon />}
        </Tooltip>
      </ActionIcon>
    </>
  );
}
