import { Box, Paper, Title, Text } from "@mantine/core";
import classes from "./ExperienceCard.module.css";

type CardProps = {
  card: {
    title: string;
    date: string;
    description: string;
  };
  index: number;
};

export function ExperienceCard({ card, index }: CardProps) {
  const isEven = index % 2 === 0;

  return (
    <Box
      className={`${classes.container} ${isEven ? classes.even : classes.odd}`}
      pb="2rem"
    >
      <Box className={classes.dot} />
      <Paper
        p="lg"
        shadow="md"
        radius="md"
        bg="gradient1"
        c="var(--mantine-color-body)"
        className={classes.card}
      >
        <Title order={3}>{card.title}</Title>
        <Text size="sm">{card.date}</Text>
        <Text>{card.description}</Text>
      </Paper>
    </Box>
  );
}
