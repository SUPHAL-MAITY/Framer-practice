import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export default function ToggleBox() {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>

      <AnimatePresence>
        {show && (
          <motion.div
            key="box"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            style={{
              width: 100,
              height: 100,
              background: "skyblue",
              marginTop: 20,
              borderRadius: 12
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}
