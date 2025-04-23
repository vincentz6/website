import { Text } from "@mantine/core";
import { Heading } from "../Heading/Heading";
import classes from "./About.module.css";

export function About() {
  return (
    <>
      <Heading id="about">ABOUT ME</Heading>
      <Text size="lg" my="xl" maw={800} mx="auto">
        I'm a Software Engineering graduate from the University of Calgary with
        a passion for exploring new technologies. I'm especially drawn to web
        development, frontend engineering, UI/UX design, and artificial
        intelligence. My other interests include weightlifting, competitive
        gaming, and learning new languages. I'm currently seeking new
        opportunities that will help me develop both personally and
        professionally.
      </Text>
    </>
  );
}
