import {
  IconBrandFigma,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandCSharp,
  IconBrandSocketIo,
  IconBrandDocker,
  IconBrandMongodb,
  IconBrandFirebase,
  IconBrandAws,
  IconAi,
  IconBrandPython,
  IconCode,
} from "@tabler/icons-react";
import { SiRabbitmq, SiPostgresql } from "react-icons/si";
import { List, ThemeIcon, Text } from "@mantine/core";
import classes from "./TechStack.module.css";

const iconMap: Record<string, React.JSX.Element> = {
  Figma: <IconBrandFigma />,
  React: <IconBrandReact />,
  TypeScript: <IconBrandTypescript />,
  "Node.js": <IconBrandNodejs />,
  ".NET Framework": <IconBrandCSharp />,
  "Socket.io": <IconBrandSocketIo />,
  RabbitMQ: <SiRabbitmq className={classes.reactIcon} />,
  Docker: <IconBrandDocker />,
  MongoDB: <IconBrandMongodb />,
  PostgreSQL: <SiPostgresql className={classes.reactIcon} />,
  Firebase: <IconBrandFirebase />,
  AWS: <IconBrandAws />,
  "Mistral AI": <IconAi />,
  Python: <IconBrandPython />,
};

type Tech = {
  name: string;
  description: string;
};

type TechStackProps = {
  stack: Tech[];
};

export function TechStack({ stack }: TechStackProps) {
  return (
    <List py="md">
      {stack.map(({ name, description }) => (
        <List.Item
          icon={
            <ThemeIcon color="gradient2" size="md" variant="light">
              {iconMap[name] ?? <IconCode />}
            </ThemeIcon>
          }
        >
          <Text>
            <Text span fw={700}>
              {name}
            </Text>
            : {description}
          </Text>
        </List.Item>
      ))}
    </List>
  );
}
