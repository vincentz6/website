import { AppShell, Group, Burger } from "@mantine/core";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import { useDisclosure } from "@mantine/hooks";

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
        <Group h="100%" px="xs">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <ColorSchemeToggle />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar
        p="md"
        style={(theme) => ({
          boxShadow: theme.shadows.xl,
        })}
      >
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
