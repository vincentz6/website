import chef from "../assets/chef-icon.png";
import vans from "../assets/vanlife.png";
import genoptic from "../assets/genoptic.png";
import trivia from "../assets/trivia.png";
import avatar from "../assets/avatar.png";
import wer from "../assets/wer.png";
import { TECH } from "./tech.ts";

export const projects = [
  {
    title: "#VANLIFE",
    description:
      "A van rental service simulation where users can browse available vans. This project was developed to gain hands-on experience with React Router for client-side routing and Firebase for backend services including authentication and database management.",
    image: vans,
    tech_stack: [TECH.REACT, TECH.FIREBASE],
    link: "https://github.com/vincentz6",
    source: "https://github.com/vincentz6",
  },
  {
    title: "LED Grow Light - Genoptic",
    description:
      "Plant growth optimization system designed to enhance plant development by dynamically adjusting light spectrum and intensity according to each growth stage. By promoting optimal photosynthesis and supporting overall plant health, the system creates ideal growing conditions in real-time.",
    tech_stack: [
      TECH.FIGMA,
      TECH.REACT,
      TECH.TYPESCRIPT,
      TECH.MANTINE,
      TECH.DOTNETFRAMEWORK,
      TECH.POSTGRESQL,
      TECH.AWS,
    ],
    image: genoptic,
    sponsor: "https://genoptic.com/",
  },
  {
    title: "Trivia Titans",
    description:
      "A multiplayer trivia game where users can compete with friends and test their knowledge across a variety of question categories. Built with a focus on exploring the principles of distributed computing and real-time state synchronization to support synchronous gameplay.",
    image: trivia,
    tech_stack: [
      TECH.REACT,
      TECH.NODEJS,
      TECH.SOCKETIO,
      TECH.RABBITMQ,
      TECH.DOCKER,
      TECH.MONGODB,
    ],
    source: "https://github.com/ryanitt/TriviaTitans",
  },
  {
    title: "Chef Claude",
    description:
      "A web application that uses AI to generate custom recipes based on ingredients provided by the user. The app allows users to input the ingredients they have on hand and receive recipe suggestions they can create using those ingredients.",
    image: chef,
    tech_stack: [TECH.REACT, TECH.MISTRALAI],
    link: "https://github.com/vincentz6",
    source: "https://github.com/vincentz6",
  },
  {
    title: "World Happiness Index Analysis",
    description:
      "Machine learning project exploring the World Happiness Index dataset to analyze and predict factors contributing to a country's happiness score. A wide range of machine learning models were applied to derive meaningful insights from real-world data. These models include linear regressions (Lasso, MLR, SVR), ensemble methods (Random Forest, Gradient Boosting, XGBoost, AdaBoost), and neural networks (MLP, LSTM).",
    image: wer,
    tech_stack: [TECH.PANDAS],
    source: "https://github.com/b4yc/ensf544-project2-team9",
  },
  {
    title: "This Website",
    description:
      "This website was a personal project to showcase my skills, experience, and other recent works. Check out my other projects on my Github!",
    image: avatar,
    tech_stack: [
      TECH.REACT,
      TECH.TYPESCRIPT,
      TECH.MANTINE,
      TECH.NODEJS,
      TECH.SPOTIFYAPI,
    ],
    github: "https://github.com/vincentz6",
    source: "https://github.com/vincentz6/website",
  },
];
