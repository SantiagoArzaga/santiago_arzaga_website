
type VideoShowcaseComponent = {
    id : number
    name: string
    description : string
    duties : string[]
    logo : string
    video : string
}

type VideoShowcaseComponentProps = {
    showcaseItems : VideoShowcaseComponent[]
}


export default function VideoShowcaseComponent({showcaseItems} : VideoShowcaseComponentProps) {
  return (
    <div className="m-6 rounded-2xl space-y-3">
        {showcaseItems.map((item) =>
            <div className="relative w-full h-64 overflow-hidden rounded-xl items-center p-1.5 ">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                >
                    <source src={`src/assets/videos/${item.video}`} type="video/mp4" />
                </video>

                <div className="bg-steel-circuit/90 h-full p-3 border-2 rounded-2xl 
                        border-carbon-protocol flex flex-row justify-start relative z-10 items-center"
                >
                    <img src={`src/assets/showcase/${item.logo}`}   className="w-120 h-51 rounded-4xl" alt="showcase_logo_image"></img>
                    <div className="m-2 mx-10 ">
                    <h1 className="font-bold text-2xl py-5 px-2 m-1 text-steel-neon underline">{item.name}</h1>
                    <p className="py-2 px-3 m-1 text-steel-neon font-bold">{item.description}</p>
                    <ul className="list-disc mx-15">
                        {item.duties.map((currentListItem, idx) => 
                        <li key={idx} >{currentListItem}</li> 
                        )}
                    </ul>
                    </div>
                    
                </div>
            </div>
        )} 
    </div>

  )
}
