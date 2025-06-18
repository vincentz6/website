import { IconProps } from "@tabler/icons-react";
import { Paper, Stack, Title, Text, Group, Badge } from "@mantine/core";
import classes from "./SkillCard.module.css";

type SkillCardProps = {
  title: string;
  description: string;
  icon: React.FC<IconProps>;
  keywords?: string[];
};

export function SkillCard({
  title,
  description,
  icon: Icon,
  keywords,
}: SkillCardProps) {
  return (
    <Paper
      p="lg"
      shadow="md"
      radius="md"
      className={classes.card}
      mih={{ base: 350, lg: "40vh" }}
    >
      <Stack gap="xs" className={classes.content}>
        <Title order={3}>{title}</Title>
        <Text size="lg">{description}</Text>
      </Stack>
      {keywords && (
        <Group gap="xs" mt="md">
          {keywords.map((word, i) => (
            <Badge
              key={i}
              color="gradient1"
              radius="sm"
              className={classes.badge}
            >
              {word}
            </Badge>
          ))}
        </Group>
      )}
      <Icon size={256} stroke={1.5} className={classes.icon} />
    </Paper>
  );
}
