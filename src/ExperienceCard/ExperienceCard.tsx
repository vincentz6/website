import { Box, Paper, Title, Text } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });

  const isEven = index % 2 === 0;

  return (
    <Box
      className={`${classes.container} ${isEven ? classes.even : classes.odd}`}
      pb="2rem"
    >
      <Box className={classes.dot} />
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        ref={containerRef}
        className={classes.card}
      >
        <Paper
          p="lg"
          shadow="md"
          radius="md"
          bg="gradient1"
          c="var(--mantine-color-body)"
        >
          <Title order={3}>{card.title}</Title>
          <Text size="sm">{card.date}</Text>
          <Text>{card.description}</Text>
        </Paper>
      </motion.div>
    </Box>
  );
}
