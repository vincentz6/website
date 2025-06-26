import { Box, Title } from "@mantine/core";
import { Heading } from "../Heading/Heading";
import { cards } from "../../experience";
import { ExperienceCard } from "../../ExperienceCard/ExperienceCard";
import classes from "./Experience.module.css";

export function Experience() {
  return (
    <Box mih="100vh" py="xl" px="md" bg="gradient2">
      <Heading id="experience">MY DEV JOURNEY</Heading>
      <Box className={classes.timeline}>
        <Box className={classes.line} />
        {cards.map((card, index) => (
          <ExperienceCard key={index} card={card} index={index} />
        ))}
      </Box>

      <Title order={4} ta="center">
        Next Stop . . .
      </Title>
    </Box>
  );
}
