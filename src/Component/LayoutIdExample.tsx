import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  { id: "1", url: "https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_1280.jpg" },
  { id: "2", url: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg" },
]



const LayoutIdExample = () => {



  const [selectedId, setSelectedId] = useState<string|null>(null)


  return (
    <>
      <div>
      <div style={{ display: "flex", gap: 20 }}>

        {images.map((img) => (
          <motion.img
            key={img.id}
            layoutId={img.id}
            src={img.url}
            onClick={() => setSelectedId(img.id)}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            onClick={() => setSelectedId(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.5)",
              cursor: "pointer",
            }}
          >
            <motion.img
              src={images.find((img) => img.id === selectedId)?.url ?? ""}
              style={{
                width: 300,
                height: 300,
                borderRadius: 20,
                objectFit: "cover",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
      
    </>
  )
}

export default LayoutIdExample
