import { motion } from "motion/react"

const DivAnimate = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      />

    </>
  );
};

export default DivAnimate;
