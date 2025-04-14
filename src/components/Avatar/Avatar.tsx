import { Box, Image } from "@mantine/core";
import classes from "./Avatar.module.css";
import avatar from "../../assets/avatar.png";

export function Avatar() {
  const path =
    "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11z";

  return (
    <Box className={classes.wrapper}>
      <svg viewBox="-1 -1 26 26" className={classes.svg}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--mantine-color-gradient1-0)" />
            <stop offset="100%" stopColor="var(--mantine-color-gradient2-0)" />
          </linearGradient>
        </defs>

        <path d={path} stroke={`url(#gradient)`} fill="none" strokeWidth={1} />
      </svg>

      <Box className={classes.imageWrapper}>
        <Image src={avatar} className={classes.image} alt="Avatar of Me" />
      </Box>
    </Box>
  );
}
