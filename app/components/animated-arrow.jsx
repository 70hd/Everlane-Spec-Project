import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedArrow = ({ isActive, onClick }) => (
  <motion.div
    onClick={onClick}
    animate={{ rotate: isActive ? 90 : 0 }}
    transition={{ ease: "easeInOut", duration: 0.3 }}
    className="min-w-[20px] max-w-[20px]"
  >
    <Image
      src="/right-arrow.svg"
      width={20}
      height={20}
      alt="arrow icon"
      className="min-w-[20px] max-w-[20px]"
    />
  </motion.div>
);

export default AnimatedArrow;