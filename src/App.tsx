

import ShowcaseComponent from "./components/ShowcaseComponent"
import GalleryComponent from "./components/GalleryComponent"
import TagsComponent from "./components/TagsComponent"
import ThreeModelComponent  from "./components/ThreeModelComponent"
import VideoShowcaseComponent from "./components/VideoShowcaseComponent"
import WindowComponent from "./components/WindowComponent"

import {jobs, tools, projects } from  "./data/index.json"




function App() {


  return (
    <>
      <header className=" noise font-black bg-window-neon p-2 flex justify-between border-b-3 border-lava-alloy">
        <div className="pt-3">
          <h1 className="mx-5 text-bold text-4xl text-center text-sand-protocol">Santiago Arzaga</h1>
        </div>
       
        <div className="p-2 flex justify-around space-x-4 text-sand-protocol">
          <button className="border-3 px-1 py-1  bg-window-shadow border-lava-alloy text-2xl text-sand-protocol"
            onClick={() => window.open("https://github.com/SantiagoArzaga","_blank", "noopener,noreferrer")}
          >
            <img src="src/assets/logo_github.png" className="h-10 w-10 p-1"  ></img>
          </button>
          {/* <button className="border-3 px-4 bg-window-shadow border-lava-alloy text-2xl text-sand-protocol "
            onClick={() => {
              const link = document.createElement("SantiagoArzaga_Resume")
              link.href = "/docs/cv.pdf"
              link.download = "MyCV.pdf"
              link.click()
            }}
          >
            Resume
          </button> */}
          <a 
            className="btn border-3 px-4 pt-1 bg-window-shadow border-lava-alloy text-2xl text-sand-protocol " 
            href="src/assets/Santiago Arzaga Resume.pdf"
            download
          >
            Resume
          </a>
        </div>
      </header>

      <main className="bg-blueprint-2">

    
         
        <div className="h-screen m-6 flex flex-row flex-wrap ">

          <div className="text-center font-black"></div>
          <ThreeModelComponent/>
          
        </div>


        <WindowComponent
          insideComponent={
            <VideoShowcaseComponent
              showcaseItems={projects}
            />}
          title={"PROJECTS"}
        />

        
        <WindowComponent
          insideComponent={
            <ShowcaseComponent
              ShowcaseItems={jobs}
            />}
          title={"MY EXPERIENCE"}
        />

        <WindowComponent
          insideComponent={
            <TagsComponent
              tags={tools}
            />}
          title={"TOOLS"}
        />

        <WindowComponent
          insideComponent={<GalleryComponent/>}
          title={"INTERESTS AND HOBBIES"}
        />


      </main>
    </>
  )
}

export default App
