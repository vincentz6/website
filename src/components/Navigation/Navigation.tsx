import { Group, Stack } from "@mantine/core";
import { NavigationButton } from "../NavigationButton/NavigationButton";
import { NavigationContext } from "./NavigationContext";

type NavigationProps = {
  vertical?: boolean;
  visibleFrom?: string;
  onNavigate?: () => void;
};

export function Navigation({
  vertical = false,
  visibleFrom,
  onNavigate,
}: NavigationProps) {
  const Wrapper = vertical ? Stack : Group;

  return (
    <NavigationContext.Provider value={onNavigate}>
      <Wrapper
        visibleFrom={visibleFrom}
        gap="xl"
        align="stretch"
        justify="center"
      >
        <NavigationButton targetId="home">HOME</NavigationButton>
        <NavigationButton targetId="about">ABOUT</NavigationButton>
        <NavigationButton targetId="projects">PROJECTS</NavigationButton>
        <NavigationButton targetId="skills">SKILLS</NavigationButton>
        <NavigationButton targetId="experience">EXPERIENCE</NavigationButton>
        <NavigationButton targetId="contact">CONTACT</NavigationButton>
      </Wrapper>
    </NavigationContext.Provider>
  );
}
