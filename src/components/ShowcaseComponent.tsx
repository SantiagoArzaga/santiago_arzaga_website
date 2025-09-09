
//Helps showcase different things (projects, work, etc.) with descriptions, images, links and a title

type showcaseItem = {
    id: number
    name : string
    description : string
    duties : string[]
    logo : string
}

type ShowcaseComponentProps = {
  ShowcaseItems : showcaseItem[]
}

export default function ShowcaseComponent({ShowcaseItems} : ShowcaseComponentProps) {
  return (
    <div>
      {ShowcaseItems.map((item) => 
        <div className="bg-steel-circuit p-5 m-2 border-2 border-carbon-protocol  flex flex-row space-y-4 justify-start">
          <img src={`src/assets/showcase/${item.logo}`} width={275} height={200}  alt="showcase_logo_image"></img>
          <div className="m-2 mx-10">
            <h1 className="font-bold text-2xl py-5 px-2 m-1 text-steel-neon  underline">{item.name}</h1>
            <p className="py-2 px-3 m-1 text-steel-neon font-bold">{item.description}</p>
            <ul className="list-disc mx-15">
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
