import { useEffect, useRef, useState } from "react"

import ShowcaseComponent from "./components/ShowcaseComponent"
import GalleryComponent from "./components/GalleryComponent"
import TagsComponent from "./components/TagsComponent"
import ThreeModelComponent  from "./components/ThreeModelComponent"
import TestComponent from "./components/TestComponent"

import {sections, jobs, tools, hobbies, projects } from  "./data/index.json"

import { motion, useMotionValue, useTransform } from "motion/react"



function useElementDimensions(
    ref: React.RefObject<HTMLDivElement | null>
): [
    { width: number; height: number; top: number; left: number },
    VoidFunction
] {
    const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 })

    function measure() {
        if (!ref.current) return

        setSize(ref.current.getBoundingClientRect())
    }

    // Note: This won't accurately reflect viewport size changes
    useEffect(() => {
        measure()
    }, [])

    return [size, measure]
}

function App() {
    const ref = useRef<HTMLDivElement>(null)
    const [{ width, height, top, left }, measure] = useElementDimensions(ref)
    const gradientX = useMotionValue(0.5)
    const gradientY = useMotionValue(0.5)
    const background = useTransform(
        () =>
            `conic-gradient(from 0deg at calc(${
                gradientX.get() * 100
            }% - ${left}px) calc(${
                gradientY.get() * 100
            }% - ${top}px), #0cdcf7, #ff0088, #fff312, #0cdcf7)`
    )

  return (
    <>
      <header className=" noise font-black bg-steel-circuit p-2s flex justify-between border-b-3 border-steel-circuit">
        <div>
          <h1 className="mx-5 text-bold filter text-4xl text-sand-protocol">Santiago Arzaga</h1>
        </div>
       
        <div className="p-3 flex justify-around space-x-4 text-sand-protocol">
          <p>Github</p>
          <p>CV</p>
        </div>
      </header>

      <main className="bg-blueprint-2">

        
         
        {/* <h1 className="font-black font-sans text-center text-4xl p-2 text-outline-2 ">ABOUT ME</h1> */}
        <div className="h-screen m-6 flex flex-row flex-wrap ">
          {/* <div className="w-1/3 font-black text-2xl p-10 text-center bg-amber-neon ">You tryna trick me man, put smoke into my head and stuff, get out of my head
            <img src="src/assets/cos.jpg" className="border-6 border-moss-alloy"></img>
          </div> */}
          <div className="text-center font-black">
            {/* <h1 className="text-8xl font-extrabold bg-gradient-to-r from-amber-neon via-copper-alloy to-red-circuit bg-clip-text text-transparent">HI, I'm Santiago Arzaga</h1> */}
          </div>
          <ThreeModelComponent/>
          {/* <TestComponent/> */}
          
        </div>





        <div className="relative w-full h-64 overflow-hidden rounded-xl items-center p-2">
            <video
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload nofullscreen noremoteplayback"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            >
              <source src="src/assets/videos/project_codex.mp4"type="video/mp4" />
            </video>
            {/* <div className="h-full bg-steel-circuit opacity-75  relative z-10 flex items-center justify-center text-white rounded-lg">
              <h1 className="text-2xl font-bold">Text on top</h1>
            </div> */}
            <div className="bg-steel-circuit/75 h-full p-3 border-2 rounded-2xl 
                  border-carbon-protocol flex flex-row space-y-4 justify-start relative z-10 "
            >
              <img src={`src/assets/showcase/logo_mogu.png`} width={275} height={200}  className="w-275px h-200px rounded-4xl" alt="showcase_logo_image"></img>
              <div className="m-2 mx-10 ">
                <h1 className="font-bold text-2xl py-5 px-2 m-1 text-steel-neon underline">test</h1>
                <p className="py-2 px-3 m-1 text-steel-neon font-bold">esto es una descripcion</p>
                {/* <ul className="list-disc mx-15">
                  {item.duties.map((currentListItem, idx) => 
                    <li key={idx} >{currentListItem}</li> 
                  )}
                </ul> */}
              </div>
              
            </div>
        </div>

        <h1 className="font-black font-sans text-center text-4xl p-2 text-outline-2">PROJECTS</h1> {/* Each of this title sections could have a 3d spinner icon*/}
        <ShowcaseComponent
          ShowcaseItems={projects}
        />

        <h1 className="font-black font-sans text-center text-4xl p-2 text-outline-2" >MY EXPERIENCE</h1>
        <ShowcaseComponent
          ShowcaseItems={jobs}
        />





        <h1 className="font-black font-sans text-center text-4xl p-2 text-outline-2" >TOOLS</h1>
        <TagsComponent
          tags={tools}
        />

        <h1 className="font-black font-sans text-center text-4xl p-2 text-outline-2" >CERTIFICATES</h1>

        <h1 className="font-black font-sans text-center text-4xl p-2 text-outline-2" >INTERESTS AND HOBBIES</h1>
        <GalleryComponent/>

      </main>
    </>
  )
}

export default App
