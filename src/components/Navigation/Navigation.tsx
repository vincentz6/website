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

  const navigate = (targetId: string) => {
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(targetId);
      if (section) {
        window.scrollTo({
          behavior: "smooth",
          top: section.getBoundingClientRect().top + window.pageYOffset - 60,
        });
      }
    }

    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <NavigationContext.Provider value={navigate}>
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
