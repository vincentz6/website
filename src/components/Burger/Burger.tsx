import { useDisclosure } from "@mantine/hooks";
import { Burger as MantineBurger } from "@mantine/core";

export function Burger() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineBurger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
  );
}
