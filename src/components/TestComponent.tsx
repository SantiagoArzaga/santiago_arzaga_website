import { motion, useMotionValue, useTransform } from "framer-motion"

export default function TestComponent() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Map mouse position → hue shift

  const palette = ["#efb571", "#caa05a", "#954f4d", "#3d515b"]

  //const hue = useTransform(x, [0, window.innerWidth], [0, 360])
  const color = useTransform(
        x,
        [0, window.innerWidth / 3, (2 * window.innerWidth) / 3, window.innerWidth],
        palette
    )

  //remove the any later
  const handleMouseMove = (e : any) => {
    x.set(e.clientX)
    y.set(e.clientY)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className=" m-4 flex flex-col  justify-start h-screen"
    >
      <motion.h1
        style={{ color }}
        className="text-[10vw] font-extrabold  tracking-tight"
        initial={{opacity:0, x:-100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration : 1.5}}
      >
        Hi,
      </motion.h1>
      <motion.h1
        style={{ color }}
        className="text-[10vw] font-extrabold tracking-tight"
        initial={{opacity:0, x:100}}
        animate={{opacity: 1, x: 0}}
        transition={{duration : 1.5}}
      >
        I'm Santiago Arzaga
      </motion.h1>
       
    </div>
  )
}
