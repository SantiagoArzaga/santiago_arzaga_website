//A component for showcasing a gallery of images with a title text that displays over them when hovered
import { hobbies } from  "../data/index.json"

export default function GaleryComponent() {
  return (
    <div className="bg-lava-circuit m-4 h-screen grid grid-cols-3 gap-1 jusitfy-evenly" >
        {hobbies.map((hobby, idx) => 
        <div key={idx} className="relative group overflow-hidden border-5 border-rust-alloy m-2">
            <img
            src= {`src/assets/hobbies/${hobby.image}`}
            alt={hobby.name}
            className="w-full h-128 object-cover object-bottom-right transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h1 className="text-2xl font-bold text-white">{hobby.name}</h1>
            </div>
        </div>
        )}
    </div>
  )
}
