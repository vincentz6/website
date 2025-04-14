import { Flex, Center } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import { Avatar } from "../Avatar/Avatar";
import classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <Flex
      direction={{
        base: "column",
        xs: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
      }}
      align="center"
      justify="center"
      gap="xl"
      className={classes.welcome}
    >
      <Center>
        <Avatar />
      </Center>
      <TypeAnimation
        sequence={[
          "Hello! I'm Vincent,\n Aspiring Developer.",
          6000,
          "Hello! I'm Vincent,\n Description1.",
          2000,
          "Hello! I'm Vincent,\n Description2.",
          2000,
          "Hello! I'm Vincent,\n Description3.",
          2000,
        ]}
        wrapper="span"
        repeat={Infinity}
        className={classes.title}
      />
    </Flex>
  );
}
