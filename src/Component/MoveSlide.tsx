import { motion, useMotionValue } from "framer-motion"
import { useEffect } from "react"

const MoveSlide = () => {

     const x = useMotionValue(0)

     useEffect(() => {
    const timeout = setTimeout(() => x.set(100), 1000)
    return () => clearTimeout(timeout)
   }, [])



  return (
    <>
     <motion.div
      style={{
        x,
        width: 100,
        height: 100,
        background: 'skyblue',
        borderRadius: 10
      }}
    />
      
    </>
  )
}

export default MoveSlide





