import { Burger as MantineBurger } from "@mantine/core";

interface BurgerProps {
  opened: boolean;
  onClick: () => void;
}

export function Burger({ opened, onClick }: BurgerProps) {
  return (
    <MantineBurger
      opened={opened}
      onClick={onClick}
      size="md"
      hiddenFrom="sm"
      color="gradient1"
      aria-label="Toggle navigation"
    />
  );
}
