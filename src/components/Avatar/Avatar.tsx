import { Box, Image } from "@mantine/core";
import classes from "./Avatar.module.css";

export function Avatar() {
  const framePath =
    "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z";

  return (
    <Box className={classes.wrapper}>
      <svg viewBox="0 0 24 24" className={classes.svg}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--mantine-color-gradient1-0)" />
            <stop offset="100%" stopColor="var(--mantine-color-gradient2-0)" />
          </linearGradient>
        </defs>

        <path d={framePath} stroke={`url(#gradient)`} fill="none" />
      </svg>

      <Box className={classes.imageWrapper}>
        <Image
          src="src/assets/avatar.png"
          className={classes.image}
          alt="Avatar of Me"
        />
      </Box>
    </Box>
  );
}
