import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function ScrollAnimation({ children, delay = 0 }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
}
