import { Box } from "@mantine/core";
import { Heading } from "../Heading/Heading";
import { cards } from "../../experience";
import { ExperienceCard } from "../../ExperienceCard/ExperienceCard";
import classes from "./Experience.module.css";

export function Experience() {
  return (
    <Box mih="100vh" py="xl" bg="gradient2" className={classes.container}>
      <Heading id="experience">MY DEV JOURNEY</Heading>
      <Box className={classes.timeline}>
        {cards.map((card, index) => (
          <ExperienceCard key={index} card={card} index={index} />
        ))}
      </Box>
    </Box>
  );
}
