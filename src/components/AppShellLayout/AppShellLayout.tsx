import { AppShell, Group, ScrollArea } from "@mantine/core";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import { useDisclosure } from "@mantine/hooks";
import classes from "./AppShellLayout.module.css";
import { Burger } from "../Burger/Burger";
import { GithubIcon } from "../GithubIcon/GithubIcon";
import { Navigation } from "../Navigation/Navigation";

export function AppShellLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header>
        <Group
          className={classes.header_group}
          justify="space-between"
          wrap="nowrap"
        >
          <Group>
            <Burger opened={opened} onClick={toggle} />
          </Group>

          <Navigation visibleFrom="sm" />

          <Group gap="xs">
            <GithubIcon />
            <ColorSchemeToggle />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar className={classes.navbar} component={ScrollArea}>
        <Navigation vertical onNavigate={toggle} />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
