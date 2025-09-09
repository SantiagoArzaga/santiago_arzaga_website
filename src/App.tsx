import ThreeModelComponent  from "./components/ThreeModelComponent"
import {sections, jobs, tools, hobbies } from  "./data/index.json"
import ShowcaseComponent from "./components/ShowcaseComponent"
import GalleryComponent from "./components/GalleryComponent"
import TagsComponent from "./components/TagsComponent"

function App() {

  return (
    <>
      <header className=" noise font-black bg-steel-circuit p-4 flex justify-between border-b-3 border-steel-circuit">
        <div>
          <h1 className="text-bold filter text-4xl text-sand-protocol">Santiago Arzaga</h1>
        </div>
       
        <div className="p-3 flex justify-around space-x-4 text-sand-protocol">
          <p>Github</p>
          <p>CV</p>
        </div>
      </header>

      <main className="bg-blueprint-2">

        <ThreeModelComponent/>
         
        <h1 className="font-black font-sans text-center text-4xl p-2 text-outline-2 ">ABOUT ME</h1>
        <div className="bg-steel-circuit h-screen m-2 border flex flex-row flex-wrap">
          <div className="w-1/3 font-black text-2xl p-10 text-center bg-amber-neon ">You tryna trick me man, put smoke into my head and stuff, get out of my head
            <img src="src/assets/cos.jpg" className="border-6 border-moss-alloy"></img>
          </div>
          <div className="w-2/3 bg-copper-alloy text-center p-10 text-4xl font-black">Thingie majingie
            <p className="text-2xl">This is a piece that talks about me and my thingies</p>
          </div>
        </div>

        <h1 className="font-black font-sans text-center text-4xl p-2 ">PROJECTS</h1>

        <h1 className="font-black font-sans text-center text-4xl p-2 " >MY EXPERIENCE</h1>
        <ShowcaseComponent
          ShowcaseItems={jobs}
        />



        <h1 className="font-black font-sans text-center text-4xl p-2 " >CERTIFICATES</h1>

        <h1 className="font-black font-sans text-center text-4xl p-2 " >TOOLS</h1>
        <TagsComponent
          tags={tools}
        />

        <h1 className="font-black font-sans text-center text-4xl p-2 " >INTERESTS AND HOBBIES</h1>
        <GalleryComponent/>

      </main>
    </>
  )
}

export default App
