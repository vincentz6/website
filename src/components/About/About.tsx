import { Box, Text, Title } from "@mantine/core";
import { Heading } from "../Heading/Heading";
import { Artists } from "../Artists/Artists";
import { motion } from "framer-motion";
import classes from "./About.module.css";

export function About() {
  return (
    <Box mih="100vh" py="xl" px="md" bg="gradient1" className={classes.about}>
      <Heading id="about" color="var(--mantine-color-body)">
        ABOUT ME
      </Heading>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Text my="xl" maw={800} mx="auto" ta="center" className={classes.text}>
          I'm a Software Engineering graduate from the University of Calgary
          with a passion for exploring new technologies. I'm especially drawn to
          web development, frontend engineering, UI/UX design, and artificial
          intelligence. My other interests include weightlifting, competitive
          gaming, and learning new languages. I'm currently seeking new
          opportunities that will help me develop both personally and
          professionally.
        </Text>
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Title
          order={2}
          pb="xs"
          ta={{ base: "center", sm: "left" }}
          className={classes.title}
        >
          Who I've Been Listening to Lately
        </Title>
      </motion.div>
      <Artists />
    </Box>
  );
}
