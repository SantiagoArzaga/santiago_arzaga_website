import type { Component } from "react"
import type { JSX } from "react"

type WindowComponentProps = {
    insideComponent : JSX.Element
    title : string
}


export default function WindowComponent({insideComponent, title} : WindowComponentProps) {
  return (
    <div className="bg-window-neon pb-2 m-5 border-3 border-window-neon drop-shadow-2xl shadow-red-100">
    <div className="m-2 bg-window-shadow  font-black font-sans flex justify-between">
        <h1 className=" text-start text-4xl p-2 text-sand-protocol " >{title}</h1>
        <button className="border-3 m-1 py-1 px-3 bg-window-neon border-window-neon text-3xl text-sand-protocol ">X</button>
    </div>
    <div className=" bg-window-shadow m-5 ring-offset-4 ring-offset-window-neon p-2 shadow-inner shadow-black">
        {/* <ShowcaseComponent
        ShowcaseItems={jobs}
        /> */}
        {insideComponent}
    </div>

    </div>
  )
}
