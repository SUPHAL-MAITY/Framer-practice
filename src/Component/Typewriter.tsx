import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Typewriterprops={
    text:string,
    speed?:number
}

export const Typewriter:React.FC<Typewriterprops> = ({ text , speed = 100 }) => {


   const [index, setIndex] = useState(0)



  useEffect(() => {
    if(index < text.length){
        const timeout=setTimeout(()=>{ 

            setIndex( (prev)=> prev +1) 

         },speed)

         return ()=>clearTimeout(timeout)
    }
  
  }, [text, speed,index])



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontFamily: "monospace", fontSize: "24px" }}
    >
      {text.slice(0, index)}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        |
      </motion.span>
    </motion.div>
  )
}
