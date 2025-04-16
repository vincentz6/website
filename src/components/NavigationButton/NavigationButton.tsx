import { UnstyledButton } from "@mantine/core";
import { ReactNode } from "react";
import { useNavigation } from "../Navigation/NavigationContext";
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
    onNavigate?.(targetId);
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
