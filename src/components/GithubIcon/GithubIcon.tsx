import { IconBrandGithub } from "@tabler/icons-react";
import { ActionIcon, Tooltip } from "@mantine/core";
import classes from "./GithubIcon.module.css";

export function GithubIcon() {
  return (
    <ActionIcon
      className={classes.github_icon}
      component="a"
      href="https://github.com/vincentz6"
      target="_blank"
      rel="noopener noreferrer"
      size="lg"
      radius="md"
      variant="outline"
      color="gradient1"
      aria-label="Github link"
    >
      <Tooltip
        label="GitHub"
        withArrow
        transitionProps={{ transition: "fade", duration: 300 }}
      >
        <IconBrandGithub strokeWidth={2} />
      </Tooltip>
    </ActionIcon>
  );
}
