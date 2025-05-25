import { motion } from "framer-motion";

export default function PracticeCard({
  name,
  count,
  variants,
}: {
  name: string;
  count: string;
  variants?: any;
}) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center shadow-sm border border-white/10 hover:bg-white/15 transition-colors"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
      }}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <p className="font-semibold text-teal-300">{name}</p>
      <p className="text-sm text-gray-300">{count}</p>
    </motion.div>
  );
}
