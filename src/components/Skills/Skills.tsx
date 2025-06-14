import { Box, SimpleGrid, Paper } from "@mantine/core";
import { Heading } from "../Heading/Heading";
// import classes from "./Skills.module.css";

export function Skills() {
  return (
    <Box mih="100vh" py="xl" bg="gradient1">
      <Heading id="skills" color="var(--mantine-color-body)">
        SKILLS
      </Heading>
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "sm", md: "md" }}
      >
        <Paper p="md" shadow="md">
          This is a Test
        </Paper>
        <Paper p="md" shadow="md">
          This is a Test
        </Paper>
        <Paper p="md" shadow="md">
          This is a Test
        </Paper>
        <Paper p="md" shadow="md">
          This is a Test
        </Paper>
        <Paper p="md" shadow="md">
          This is a Test
        </Paper>
        <Paper p="md" shadow="md">
          This is a Test
        </Paper>
      </SimpleGrid>
    </Box>
  );
}
