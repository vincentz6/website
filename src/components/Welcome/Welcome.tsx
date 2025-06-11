import { Grid, Flex, Center, ActionIcon } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import { Avatar } from "../Avatar/Avatar";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "framer-motion";
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
              "Hello! I'm Vincent,\n Gym Enthusiast.",
              2000,
              "Hello! I'm Vincent,\n Knowledge Seeker.",
              2000,
              "Hello! I'm Vincent,\n Tech Enjoyer.",
              2000,
              "Hello! I'm Vincent,\n Gamer too.",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
            className={classes.title}
          />
        </Grid.Col>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 2 }}
          viewport={{ once: true }}
        >
          <ActionIcon
            variant="transparent"
            size="auto"
            className={classes.chevronWrapper}
            onClick={() => {
              const section = document.getElementById("about");
              if (section)
                window.scrollTo({
                  behavior: "smooth",
                  top:
                    section.getBoundingClientRect().top +
                    window.pageYOffset -
                    60,
                });
            }}
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              <IconChevronDown className={classes.chevron} />
            </motion.div>
          </ActionIcon>
        </motion.div>
      </Grid>
    </Flex>
  );
}
