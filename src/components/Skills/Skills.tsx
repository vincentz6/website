import { Box, SimpleGrid } from "@mantine/core";
import { Heading } from "../Heading/Heading";
import { SkillCard } from "../SkillCard/SkillCard";
import {
  IconDeviceImacCode,
  IconLayoutDashboard,
  IconChartDots,
  IconServer,
  IconDatabase,
  IconRocket,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import classes from "./Skills.module.css";

export function Skills() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });

  const cards = [
    {
      title: "Frontend Development",
      description:
        "To test the design of the website, I'm currently writing random shit and you're wasting your time reading this. This is sentence 2 used for testing the length of the card description.",
      icon: IconDeviceImacCode,
      keywords: ["HTML", "CSS", "JavaScript", "React", "Typescript"],
    },
    {
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: IconLayoutDashboard,
      keywords: ["Figma"],
    },
    {
      title: "Data Analysis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: IconChartDots,
      keywords: ["Python", "Pandas", "NumPy"],
    },
    {
      title: "Backend Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: IconServer,
      keywords: ["Java", "Node.js", "Django", "RESTful APIs"],
    },
    {
      title: "Database Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: IconDatabase,
      keywords: ["SQL", "PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      title: "Deployment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: IconRocket,
      keywords: ["Docker", "Netlify", "GCP"],
    },
  ];

  return (
    <Box mih="100vh" py="xl" px="md" bg="gradient1">
      <Heading id="skills" color="var(--mantine-color-body)">
        SKILLS
      </Heading>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: "sm", md: "md" }}
        py="md"
        ref={containerRef}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.2,
            }}
          >
            <SkillCard {...card} />
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
}
