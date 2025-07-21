import { Center, UnstyledButton, ActionIcon, Tooltip } from "@mantine/core";
import { IconChevronUp } from "@tabler/icons-react";
import classes from "./Contact.module.css";

export function Contact() {
  return (
    <Center
      mih="50vh"
      px="md"
      bg="gradient3"
      id="contact"
      className={classes.container}
    >
      <UnstyledButton
        component="a"
        href="mailto:vincentz0307@gmail.com"
        c="gradient1"
        ta="center"
        className={classes.contact}
      >
        GET IN TOUCH.
      </UnstyledButton>
      <ActionIcon
        size="xl"
        variant="outline"
        radius="md"
        color="gradient1"
        aria-label="Return to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={classes.scrollToTop}
      >
        <Tooltip
          label="Return to Top"
          withArrow
          color="gradient1"
          transitionProps={{ transition: "pop", duration: 250 }}
          closeDelay={200}
        >
          <IconChevronUp stroke={2} size={35} />
        </Tooltip>
      </ActionIcon>
    </Center>
  );
}
