import { Group } from "@mantine/core";
import { NavigationButton } from "../NavigationButton/NavigationButton";

export function Navigation() {
  return (
    <Group gap="xl">
      <NavigationButton targetId="home">HOME</NavigationButton>
      <NavigationButton targetId="about">ABOUT</NavigationButton>
      <NavigationButton targetId="projects">PROJECTS</NavigationButton>
      <NavigationButton targetId="skills">SKILLS</NavigationButton>
      <NavigationButton targetId="experience">EXPERIENCE</NavigationButton>
      <NavigationButton targetId="contact">CONTACT</NavigationButton>
    </Group>
  );
}
