import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { motion, scale, useMotionValue, useTransform } from "framer-motion"

// Component that loads your GLTF model
function Model() {
  const gltf = useLoader(GLTFLoader, "src/assets/models/scene.gltf")
  useFrame(() => {
    gltf.scene.rotation.y -= 0.01
  })
  gltf.scene.scale.set(3,3,3)
  
  return <primitive object={gltf.scene} />
}


export default function ThreeModelComponent() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Map mouse position → hue shift

  const palette = ["#954f4d", "#be6b50", "#8f853c", "#719193"]

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
    <section className="relative h-screen w-full overflow-hidden">
        <motion.div 
            className=" absolute inset-0 z-0 " 
            drag 
            dragConstraints={{
                top: -100,
                left: -400,
                right: 400,
                bottom: 75,
            }}
            whileDrag={ {scale: .9}}
        >
            <Canvas>
                <ambientLight intensity={10} position={[1,1,1]} />
                
                <pointLight position={[4, 0, 4]} intensity={100} color={"#ff0000"}/>
                <pointLight position={[-4, 0, 4]} intensity={100} color={"#0000ff"}/>
                <pointLight position={[0, 0, 5]} intensity={50} />
                <Model />
            </Canvas>
        </motion.div>


        <div
        onMouseMove={handleMouseMove}
        className=" m-4 flex flex-col justify-start h-screen relative z-0 select-none pointer-events-none"
        >
            <motion.h1
                
                //style={{ color }}
                className="text-[10vw] font-extrabold  tracking-tight relative z-10"
                // initial={{opacity:0, x:-100}}
                animate={{opacity: 1, x: 0, color : ["#954f4d", "#be6b50", "#8f853c", "#719193", "#954f4d"]}}
                transition={{duration : 8, repeat: Infinity}}
            >
                Hi,
            </motion.h1>
            <motion.h1
                //style={{ color }}
                className="text-[10vw] font-extrabold tracking-tight relative z-20"
                // initial={{opacity:0, x:100}}
                animate={{opacity: 1, x: 0, color : ["#954f4d", "#be6b50", "#8f853c", "#719193", "#954f4d"]}}
                transition={{duration : 8, repeat: Infinity}}
            >
                I'm Santiago Arzaga
            </motion.h1>
        
        </div>
    </section>
  )
}
