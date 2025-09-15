
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
    <div className="m-6 rounded-2xl space-y-3s">
        {showcaseItems.map((item) =>
            <div className="relative w-full h-64 overflow-hidden items-center  border-3 border-lava-shadow ">
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

                <div className="bg-line-filter bg-lava-alloy h-full  border-2 border-rust-shadow 
                        flex flex-row justify-start relative z-10 items-center"
                >
                    <img src={`src/assets/showcase/${item.logo}`}   className="w-120 h-51 rounded-4xl" alt="showcase_logo_image"></img>
                    <div className="m-2 mx-10 ">
                    <h1 className="font-bold text-2xl px-2 m-1 text-sand-protocol underline">{item.name}</h1>
                    <p className="py-2 px-3 m-1 text-sand-protocol font-bold">{item.description}</p>
                    <ul className="list-disc mx-15 text-sand-protocol">
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
