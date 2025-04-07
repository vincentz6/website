import { UnstyledButton } from "@mantine/core";
import { ReactNode } from "react";
import { useNavigation } from "../Navigation/Navigation";
import classes from "./NavigationButton.module.css";

type NavigationButtonProps = {
  children: ReactNode;
  targetId: string;
};

export function NavigationButton({
  children,
  targetId,
}: NavigationButtonProps) {
  const onNavigate = useNavigation();

  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <UnstyledButton onClick={handleClick} className={classes.navbutton}>
      <span className={classes.textWrapper}>
        <span className={classes.text}>{children}</span>
        <span className={classes.text}>{children}</span>
      </span>
    </UnstyledButton>
  );
}
