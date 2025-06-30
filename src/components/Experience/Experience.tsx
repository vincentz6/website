import { Box, Title, Text } from "@mantine/core";
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

      <Title order={3} ta={{ base: "left", sm: "center" }}>
        Next Stop?
      </Title>
      <Text ta={{ base: "left", sm: "center" }}>
        Currently looking for new opportunities!
      </Text>
    </Box>
  );
}
