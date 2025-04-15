import { Grid, Flex, Center, ActionIcon } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import { Avatar } from "../Avatar/Avatar";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <Flex className={classes.welcome} justify="center">
      <Grid justify="center" align="center">
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Center>
            <Avatar />
          </Center>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
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
        </Grid.Col>
        <ActionIcon
          variant="transparent"
          size="auto"
          className={classes.chevronWrapper}
        >
          <IconChevronDown className={classes.chevron} />
        </ActionIcon>
      </Grid>
    </Flex>
  );
}
