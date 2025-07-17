import { Heading } from "../Heading/Heading";
import { Box } from "@mantine/core";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Carousel } from "@mantine/carousel";
import { projects } from "../../static/projects";
import classes from "./Projects.module.css";

export function Projects() {
  return (
    <Box mih="100vh" py="xl" px="md">
      <Heading id="projects" color="gradient1">
        MY PORTFOLIO
      </Heading>
      <Carousel
        slideSize={{ base: "100%", sm: "50%", lg: "33.333333%" }}
        slideGap="md"
        controlSize={30}
        controlsOffset="-xs"
        px="2.5rem"
        py="md"
        emblaOptions={{
          align: "start",
        }}
        classNames={classes}
      >
        {projects.map((project, index) => (
          <Carousel.Slide key={index}>
            <ProjectCard {...project} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
