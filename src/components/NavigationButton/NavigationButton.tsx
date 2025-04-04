import { UnstyledButton } from "@mantine/core";
import { ReactNode } from "react";
import classes from "./NavigationButton.module.css";

type NavigationButtonProps = {
  children: ReactNode;
  targetId: string;
};

export function NavigationButton({
  children,
  targetId,
}: NavigationButtonProps) {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return <UnstyledButton onClick={handleClick}>{children}</UnstyledButton>;
}
