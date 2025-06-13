import { ReactNode } from "react";
import { Title } from "@mantine/core";
import { motion } from "framer-motion";
import classes from "./Heading.module.css";

type HeadingProps = {
  children: ReactNode;
  id: string;
  color?: string;
};

export function Heading({ children, id, color }: HeadingProps) {
  const text = `${children} • `;
  const items = text.repeat(20);

  return (
    <div className={classes.headingWrapper} id={id}>
      <motion.div
        className={classes.marquee}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 500, ease: "linear", repeat: Infinity }}
      >
        <div className={classes.marqueeGroup}>
          <Title className={classes.heading} c={color}>
            {items}
          </Title>
          <Title className={classes.heading} c={color}>
            {items}
          </Title>
        </div>
      </motion.div>
    </div>
  );
}
