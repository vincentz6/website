import { Card, Image, Title, Text, Button, Stack } from "@mantine/core";
import classes from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <Card radius="md" shadow="sm" className={classes.card}>
      <Card.Section>
        <Image src={image} alt="Project Image" h={300} />
      </Card.Section>

      <Stack h="100%" justify="space-between" className={classes.content}>
        <div>
          <Title order={3}>{title}</Title>
          <Text>{description}</Text>
        </div>
        <Button.Group className={classes.buttons} orientation="vertical">
          <Button component="a" href={link} target="_blank" bg="gradient1">
            VIEW PROJECT
          </Button>
          <Button component="a" href={link} target="_blank" bg="gradient2">
            SOURCE CODE
          </Button>
        </Button.Group>
      </Stack>
    </Card>
  );
}
