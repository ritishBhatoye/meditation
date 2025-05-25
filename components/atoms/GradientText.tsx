import { motion } from "framer-motion";

export default function GradientText({
  children,
  variants,
}: {
  children: React.ReactNode;
  variants?: any;
}) {
  return (
    <motion.span
      className="block text-xl font-semibold tracking-wide bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text"
      style={{ fontFamily: "'Homemade Apple', cursive" }}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.span>
  );
}
