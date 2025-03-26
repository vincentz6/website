import { AppShell, Group } from "@mantine/core";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import { useDisclosure } from "@mantine/hooks";
import classes from "./AppShellLayout.module.css";
import { Burger } from "../Burger/Burger";

export function AppShellLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened }, //!opened can be dynamic later
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
        <Group>
          <Burger opened={opened} onClick={toggle} />
        </Group>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
