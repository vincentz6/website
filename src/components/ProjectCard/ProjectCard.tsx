import { Card, Image, Title, Text, Button, Stack } from "@mantine/core";
import { motion } from "framer-motion";
import { TechStack } from "../TechStack/TechStack";
import { IconBrandGithub } from "@tabler/icons-react";
import classes from "./ProjectCard.module.css";

type Tech = {
  name: string;
  description: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tech_stack: Tech[];
  link?: string;
  source?: string;
  sponsor?: string;
  github?: string;
};

export function ProjectCard({
  title,
  description,
  image,
  tech_stack,
  link,
  source,
  sponsor,
  github,
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
            h={200}
            fit="contain"
            fallbackSrc="https://placehold.co/1000x600?text=Placeholder"
          />
        </Card.Section>
        <Stack
          className={classes.cardContent}
          h={{
            base: "43em",
            xs: "35em",
            sm: "43em",
            md: "35em",
            lg: "38em",
            xl: "35em",
          }}
        >
          <div>
            <Title order={3} my="sm" className={classes.title}>
              {title}
            </Title>
            <Text>{description}</Text>
            <TechStack stack={tech_stack} />
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
                href={source}
                target="_blank"
                bg="gradient1"
                className={classes.button}
              >
                VIEW SOURCE CODE
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
            {github && (
              <Button
                component="a"
                href={github}
                target="_blank"
                bg="gradient1"
                className={classes.button}
              >
                <IconBrandGithub size={20} className={classes.githubIcon} />
                VISIT MY GITHUB
              </Button>
            )}
          </Button.Group>
        </Stack>
      </Card>
    </motion.div>
  );
}
