import  { useState } from "react";
import { motion } from "framer-motion";

const ExpandingCard = () => {
 const [isOpen, setIsOpen] = useState(false);


  return (
    <>

     <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      style={{
        backgroundColor: "#90cdf4",
        borderRadius: 20,
        padding: 20,
        width: 300,
        cursor: "pointer",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      }}
    >
      <motion.h2 layout>Click to {isOpen ? "close" : "expand"}</motion.h2>
      {isOpen && (
        <motion.p layout style={{ marginTop: 10 }}>
          This is the expanded content. Framer Motion automatically animates the
          layout change when it appears and disappears.
        </motion.p>
      )}
    </motion.div>
      
    </>
  )
}

export default ExpandingCard
