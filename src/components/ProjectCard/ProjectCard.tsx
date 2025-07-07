import { Card, Image, Title, Text, Button, Stack } from "@mantine/core";
import { motion } from "framer-motion";
import classes from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link?: string;
  source?: string;
  sponsor?: string;
};

export function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <Card radius="md" shadow="sm" className={classes.card}>
        <Card.Section>
          <Image src={image} alt="Project Image" h={300} fit="contain" />
        </Card.Section>

        <Stack h="100%" justify="space-between" className={classes.content}>
          <div>
            <Title order={3} my="sm">
              {title}
            </Title>
            <Text>{description}</Text>
          </div>
          <Button.Group className={classes.buttonGroup} orientation="vertical">
            <Button
              component="a"
              href={link}
              target="_blank"
              bg="gradient1"
              className={classes.button}
            >
              VIEW PROJECT
            </Button>
            <Button
              component="a"
              href={link}
              target="_blank"
              bg="gradient1"
              className={classes.button}
            >
              SOURCE CODE
            </Button>
          </Button.Group>
        </Stack>
      </Card>
    </motion.div>
  );
}
