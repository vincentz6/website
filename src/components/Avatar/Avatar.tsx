import { Box, Image } from "@mantine/core";
import classes from "./Avatar.module.css";

export function Avatar() {
  const framePath =
    "M 7.5860 42.9414 L 23.8516 52.1758 C 26.6407 53.7695 29.3126 53.7930 32.1485 52.1758 L 48.4141 42.9414 C 50.5938 41.6992 51.7890 40.4336 51.7890 37.0352 L 51.7890 18.8008 C 51.7890 15.4961 50.5703 14.3008 48.5783 13.1523 L 32.2657 3.8711 C 29.3595 2.2070 26.5704 2.2305 23.7344 3.8711 L 7.4219 13.1523 C 5.4297 14.3008 4.2110 15.4961 4.2110 18.8008 L 4.2110 37.0352 C 4.2110 40.4336 5.4063 41.6992 7.5860 42.9414 Z M 9.7891 39.6601 C 8.4532 38.9101 8.0079 38.1836 8.0079 36.9179 L 8.0079 18.9648 C 8.0079 17.7930 8.4766 17.1133 9.6485 16.4336 L 25.3985 7.4101 C 27.1797 6.4023 28.7735 6.3554 30.6016 7.4101 L 46.3516 16.4336 C 47.5237 17.1133 47.9922 17.7930 47.9922 18.9648 L 47.9922 36.9179 C 47.9922 38.1836 47.5468 38.9101 46.2110 39.6601 L 30.6016 48.5430 C 28.7266 49.5976 27.2032 49.5742 25.3985 48.5430 Z";

  return (
    <Box className={classes.wrapper}>
      <svg viewBox="4.211 2.207 47.578 51.586" className={classes.svg}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--mantine-color-gradient1-0)" />
            <stop offset="100%" stopColor="var(--mantine-color-gradient2-0)" />
          </linearGradient>
        </defs>

        <path d={framePath} fill={`url(#gradient)`} strokeWidth={1} />
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
