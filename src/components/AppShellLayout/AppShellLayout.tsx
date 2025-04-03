import { AppShell, Group, Text } from "@mantine/core";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import { useDisclosure } from "@mantine/hooks";
import classes from "./AppShellLayout.module.css";
import { Burger } from "../Burger/Burger";
import { GithubIcon } from "../GithubIcon/GithubIcon";

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
        <Group className={classes.header_group}>
          <Burger opened={opened} onClick={toggle} />
          <GithubIcon />
          <ColorSchemeToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar className={classes.navbar}>
        <Text c="primary">navbar content</Text>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
