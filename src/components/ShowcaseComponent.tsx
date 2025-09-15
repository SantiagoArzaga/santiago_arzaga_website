
//Helps showcase different things (projects, work, etc.) with descriptions, images, links and a title

type showcaseItem = {
    id: number
    name : string
    description : string
    duties : string[]
    logo : string
    date: string
}

type ShowcaseComponentProps = {
  ShowcaseItems : showcaseItem[]
}

export default function ShowcaseComponent({ShowcaseItems} : ShowcaseComponentProps) {
  return (
    <div>
      {ShowcaseItems.map((item) => 
          <div className="bg-line-filter p-5 m-5 rounded-xl border-6 border-rust-neon  flex flex-row space-y-4 justify-start">
            <img src={`src/assets/showcase/${item.logo}`} className="w-100 h-50" alt="showcase_logo_image"></img>
            <div className="m-2 mx-10 w-full">
              <div className="flex flex-row justify-between w-full">
                <h1 className="font-bold text-3xl py-5 px-1 m-1 text-sand-protocol underline ">{item.name}</h1>
                <h1 className="font-bold text-2xl py-5 px-1 m-1 text-sand-protocol ">{item.date}</h1>
              </div>
              
              <p className="py-2 px-3 m-1 text-2xl text-sand-protocol font-bold">{item.description}</p>
              <ul className="list-disc mx-15 text-sand-protocol">
                {item.duties.map((currentListItem, idx) => 
                  <li key={idx} >{currentListItem}</li> 
                )}
              </ul>
            </div>
            
          </div>
      )}
    </div>

  )
}
