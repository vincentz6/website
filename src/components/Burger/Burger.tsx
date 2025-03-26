import { Burger as MantineBurger } from "@mantine/core";
import classes from "./Burger.module.css";

interface BurgerProps {
  opened: boolean;
  onClick: () => void;
}

export function Burger({ opened, onClick }: BurgerProps) {
  return (
    <MantineBurger
      opened={opened}
      onClick={onClick}
      size="sm"
      hiddenFrom="sm"
      className={classes.burger}
      aria-label="Toggle navigation"
    />
  );
}
