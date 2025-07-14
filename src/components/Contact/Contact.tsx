import { Center, UnstyledButton } from "@mantine/core";
import classes from "./Contact.module.css";

export function Contact() {
  return (
    <Center mih="50vh" px="md" bg="gradient3" id="contact">
      <UnstyledButton
        component="a"
        href="mailto:vincentz0307@gmail.com"
        c="gradient1"
        ta="center"
        className={classes.contact}
      >
        GET IN TOUCH.
      </UnstyledButton>
    </Center>
  );
}
