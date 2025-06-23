import { Image } from "@mantine/core";
import { motion } from "framer-motion";
import classes from "./Avatar.module.css";
import avatar from "../../assets/avatar.png";

export function Avatar() {
  const path =
    "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11z";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.05] }}
      className={classes.wrapper}
    >
      <svg viewBox="-1 -1 26 26" className={classes.svg}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--mantine-color-gradient1-0)" />
            <stop offset="100%" stopColor="var(--mantine-color-gradient2-0)" />
          </linearGradient>
        </defs>

        <path d={path} stroke="none" fill={`url(#gradient)`} />
      </svg>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={classes.imageWrapper}
      >
        <Image src={avatar} className={classes.image} alt="Avatar of Me" />
      </motion.div>
    </motion.div>
  );
}
