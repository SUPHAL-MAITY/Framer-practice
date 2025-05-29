import { motion } from "framer-motion"
import { useState } from "react"

export default function PanExample() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "sans-serif"
      }}
    >
      <motion.div
        drag
        dragMomentum={false}
        onPan={(_e, info) => setOffset(info.offset)}
        onPanEnd={() => setOffset({ x: 0, y: 0 })}
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor:
            Math.abs(offset.x) > 100 ? "tomato" : "skyblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontWeight: "bold",
          userSelect: "none",
          cursor: "grab"
        }}
      >
        Drag Me
      </motion.div>

      <div style={{ marginTop: 20 }}>
        Offset: x = {Math.round(offset.x)}, y = {Math.round(offset.y)}
      </div>
    </div>
  )
}
