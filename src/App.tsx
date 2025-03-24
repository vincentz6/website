import "@mantine/core/styles.css";

import {
  AppShell,
  MantineProvider,
  Burger,
  Group,
  useMantineColorScheme,
  ActionIcon,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Router } from "./Router";
import { theme } from "./theme";
import cx from "clsx";

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const dark = colorScheme === "dark";

  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <AppShell
        layout="alt"
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
        withBorder={false}
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar
          p="md"
          style={(theme) => ({
            boxShadow: theme.shadows.xl,
          })}
        >
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </Group>
        </AppShell.Navbar>
        <AppShell.Main>
          <Router />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
