import chef from "../assets/chef-icon.png";
import vans from "../assets/vanlife.png";
import genoptic from "../assets/genoptic.png";
import trivia from "../assets/trivia.png";

export const projects = [
  {
    title: "#VANLIFE",
    description:
      "A van rental service simulation where users can browse available vans. Built using React.js and Firebase, this project was developed to gain hands-on experience with React Router for client-side routing and Firebase for backend services including authentication and database management.",
    image: vans,
    tech_stack: [
      { name: "React", description: "Frontend Framework" },
      { name: "Firebase", description: "Database" },
    ],
    link: "https://github.com/vincentz6",
    source: "https://github.com/vincentz6",
  },
  {
    title: "LED Grow Light - Genoptic",
    description: `Plant growth optimization system designed to enhance plant development by dynamically adjusting light spectrum and intensity according to each growth stage. By promoting optimal photosynthesis and supporting overall plant health, the system creates ideal growing conditions in real-time. The user interface was designed in Figma, with a frontend built using TypeScript and React.js. The backend powered by .NET Framework, with PostgreSQL database, and AWS for cloud infrastructure and authentication services.`,
    tech_stack: [
      { name: "Figma", description: "UI/UX Design" },
      { name: "React", description: "Frontend Framework" },
      { name: "TypeScript", description: "Frontend" },
      { name: ".NET Framework", description: "Backend Framework" },
      { name: "PostgreSQL", description: "Database" },
      {
        name: "AWS",
        description: "Cloud Infrastructure and Authentication Services",
      },
    ],
    image: genoptic,
    sponsor: "https://genoptic.com/",
  },
  {
    title: "Trivia Titans",
    description:
      "A multiplayer trivia game where users can compete with friends and test their knowledge in a variety of questions.",
    image: trivia,
    tech_stack: [
      { name: "React", description: "Frontend Framework" },
      {
        name: "Socket.io",
        description: "WebSockets & Real-time Communication",
      },
      { name: "RabbitMQ", description: "Message Broker" },
      { name: "Docker", description: "Containerization" },
      { name: "MongoDB", description: "Database" },
    ],
    source: "https://github.com/ryanitt/TriviaTitans",
  },
  {
    title: "Chef Claude",
    description:
      "A web application that uses Mistral AI to generate custom recipes based on ingredients provided by the user. Built with React.js, the app allows users to input the ingredients they have on hand and receive recipe suggestions they can create using those ingredients.",
    image: chef,
    tech_stack: [
      { name: "React", description: "Frontend Framework" },
      {
        name: "Mistral AI",
        description: "AI Service",
      },
    ],
    link: "https://github.com/vincentz6",
    source: "https://github.com/vincentz6",
  },
  {
    title: "World Happiness Index Analysis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://placehold.co/1000x500?text=Placeholder",
    tech_stack: [
      { name: "Python", description: "Data Analysis with Pandas and NumPy" },
    ],
    link: "https://github.com/vincentz6",
    source: "https://github.com/vincentz6",
  },
];
