import { Box, Text, Title } from "@mantine/core";
import { Heading } from "../Heading/Heading";
import { Artists } from "../Artists/Artists";
import classes from "./About.module.css";

export function About() {
  return (
    <Box my="5rem">
      <Heading id="about">ABOUT ME</Heading>
      <Text my="xl" maw={800} mx="auto" ta="center" className={classes.text}>
        I'm a Software Engineering graduate from the University of Calgary with
        a passion for exploring new technologies. I'm especially drawn to web
        development, frontend engineering, UI/UX design, and artificial
        intelligence. My other interests include weightlifting, competitive
        gaming, and learning new languages. I'm currently seeking new
        opportunities that will help me develop both personally and
        professionally.
      </Text>
      <Title order={2} mb="xs" ta={{ base: "center", sm: "left" }}>
        Who I've Been Listening to Lately
      </Title>
      <Artists />
    </Box>
  );
}
