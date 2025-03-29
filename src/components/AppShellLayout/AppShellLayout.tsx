import { AppShell, Group, Text } from "@mantine/core";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./AppShellLayout.module.css";
import { Burger } from "../Burger/Burger";

export function AppShellLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const isBreakpoint = useMediaQuery("(max-width: 1200px)");

  return (
    <AppShell
      layout={isBreakpoint ? "default" : "alt"}
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "lg",
        collapsed: { mobile: !opened },
      }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header>
        <Group className={classes.header_group}>
          <Burger opened={opened} onClick={toggle} />
          <ColorSchemeToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar className={classes.navbar}>
        <Text c="text">navbar content</Text>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
