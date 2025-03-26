import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Router } from "./Router";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <ColorSchemeScript defaultColorScheme="dark" />
      <Router />
    </MantineProvider>
  );
}
