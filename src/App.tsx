import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Router } from "./Router";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <ColorSchemeScript defaultColorScheme="light" />
      <Router />
    </MantineProvider>
  );
}
