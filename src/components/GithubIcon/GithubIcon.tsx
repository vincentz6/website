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
      <svg width="0" height="0">
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--mantine-color-gradient1-0)" />
          <stop offset="100%" stopColor="var(--mantine-color-gradient2-0)" />
        </linearGradient>
      </svg>
      <Tooltip
        label="GitHub"
        withArrow
        transitionProps={{ transition: "fade", duration: 300 }}
      >
        <IconBrandGithub stroke="url(#icon-gradient)" strokeWidth={2} />
      </Tooltip>
    </ActionIcon>
  );
}
