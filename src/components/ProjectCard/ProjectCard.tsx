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
  source,
  sponsor,
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
          <Image
            src={image}
            alt="Project Image"
            height={300}
            fit="contain"
            fallbackSrc="https://placehold.co/1000x600?text=Placeholder"
          />
        </Card.Section>

        <Stack h="100%" justify="space-between" className={classes.content}>
          <div>
            <Title order={3} my="sm">
              {title}
            </Title>
            <Text>{description}</Text>
          </div>
          <Button.Group className={classes.buttonGroup} orientation="vertical">
            {link && (
              <Button
                component="a"
                href={link}
                target="_blank"
                bg="gradient1"
                className={classes.button}
              >
                VIEW PROJECT
              </Button>
            )}
            {source && (
              <Button
                component="a"
                href={link}
                target="_blank"
                bg="gradient1"
                className={classes.button}
              >
                SOURCE CODE
              </Button>
            )}
            {sponsor && (
              <Button
                component="a"
                href={sponsor}
                target="_blank"
                bg="gradient1"
                className={classes.button}
              >
                VIEW PROJECT SPONSOR
              </Button>
            )}
          </Button.Group>
        </Stack>
      </Card>
    </motion.div>
  );
}
