import { motion, useDragControls } from "framer-motion";

export default function DraggableBox() {
    
  const dragControls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false} // Important: disables default drag on whole box
      style={{ width: 200, height: 200, background: "lightblue" }}
    >
      <button
        onPointerDown={(e) => dragControls.start(e)}
        style={{ cursor: "grab" }}
      >
        Drag from here
      </button>
    </motion.div>
  );
}
