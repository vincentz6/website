import { Box, SimpleGrid } from "@mantine/core";
import { Heading } from "../Heading/Heading";
import { SkillCard } from "../SkillCard/SkillCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../../static/skills";
// import classes from "./Skills.module.css";

export function Skills() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });

  return (
    <Box mih="100vh" py="xl" px="md" bg="gradient1">
      <Heading id="skills" color="var(--mantine-color-body)">
        MY SKILLSET
      </Heading>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: "sm", md: "md" }}
        py="md"
        ref={containerRef}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.2,
            }}
          >
            <SkillCard {...skill} />
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
}
