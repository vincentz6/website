import { Group } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import { Avatar } from "../Avatar/Avatar";
import classes from "./Welcome.module.css";
export function Welcome() {
  return (
    <Group>
      <Avatar />
      <TypeAnimation
        sequence={[
          "Hello! I'm Vincent,\n Aspiring Developer.",
          5000,
          "Hello! I'm Vincent,\n Gym Enthusiast.",
          1500,
          "Hello! I'm Vincent,\n Knowledge Seeker.",
          1500,
          "Hello! I'm Vincent,\n Gaming Enjoyer.",
          1500,
        ]}
        wrapper="span"
        repeat={Infinity}
        className={classes.title}
      />
    </Group>
  );
}
