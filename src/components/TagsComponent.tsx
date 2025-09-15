
type tag = {
  id : number,
  name : string,
  image : string,
}

type TagsComponentProps = {
  tags : tag[]
}

export default function TagsComponent({tags} : TagsComponentProps)  {
  return (
    <div className=" m-10 flex flex-wrap gap-2 justify-evenly">
        {tags.map((currentTag) => 
        <div className="inline-flex bg-lava-alloy items-center text-2xl font-black border-4 border-lava-shadow  px-2 py-1 ">
        <img src={`./tools/${currentTag.image}`} className="rounded-2xl w-8 h-8 mr-2" alt="img"/>
        <p className="text-sand-protocol">{currentTag.name}</p>
        </div>
        )}

    </div>
  )
}
