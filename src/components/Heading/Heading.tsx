import { ReactNode } from "react";
import { Title } from "@mantine/core";
import { motion } from "framer-motion";
import classes from "./Heading.module.css";

type HeadingProps = {
  children: ReactNode;
  id: string;
};

export function Heading({ children, id }: HeadingProps) {
  const items = Array(5).fill(<span>{children} • </span>);

  return (
    <div className={classes.headingWrapper} id={id}>
      <motion.div
        className={classes.marquee}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 300, ease: "linear", repeat: Infinity }}
      >
        <div className={classes.marqueeGroup}>
          <Title className={classes.heading}>{items}</Title>
          <Title className={classes.heading}>{items}</Title>
        </div>
      </motion.div>
    </div>
  );
}
