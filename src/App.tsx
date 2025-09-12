import { useEffect, useRef, useState } from "react"

import ShowcaseComponent from "./components/ShowcaseComponent"
import GalleryComponent from "./components/GalleryComponent"
import TagsComponent from "./components/TagsComponent"
import ThreeModelComponent  from "./components/ThreeModelComponent"
import TestComponent from "./components/TestComponent"
import VideoShowcaseComponent from "./components/VideoShowcaseComponent"

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





        <h1 className="font-black font-sans text-center text-4xl p-2 text-outline-2">PROJECTS</h1> {/* Each of this title sections could have a 3d spinner icon*/}
        {/* <ShowcaseComponent
          ShowcaseItems={projects}
        /> */}
        <VideoShowcaseComponent
          showcaseItems={projects}
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
