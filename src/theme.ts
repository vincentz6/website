import { createTheme, virtualColor } from "@mantine/core";
import { redpink, coral, lavender, lightblue, cream, shade } from "./colors";
import "./fonts.css";

export const theme = createTheme({
  black: "#2e2e2e",
  white: "#f5f5f5",

  colors: {
    redpink,
    coral,
    lavender,
    lightblue,
    cream,
    shade,
    gradient1: virtualColor({
      name: "gradient1",
      dark: "lavender",
      light: "redpink",
    }),

    gradient2: virtualColor({
      name: "gradient2",
      dark: "lightblue",
      light: "coral",
    }),
  },

  primaryColor: "shade",
  primaryShade: { dark: 0, light: 9 },

  fontFamily: "Inter, sans-serif",
  fontFamilyMonospace: "Fira Code, monospace",
  headings: {
    fontFamily: "Neue Haas Display, sans-serif",
    sizes: {
      h1: { fontSize: "4rem" },
      h2: { fontSize: "3rem" },
      h3: { fontSize: "2rem" },
    },
  },

  defaultRadius: "sm",
  cursorType: "default",

  components: {},
});
