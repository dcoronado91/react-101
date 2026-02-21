import React from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App () {
    return(
        <React.Fragment>
            <TwitterFollowCard userName="daggerlover91" name="Derek "/>
            <TwitterFollowCard userName="BigSalchichin" name="Nery"/>
            <TwitterFollowCard userName="MRvimi" name="Mario"/>
            <TwitterFollowCard userName="_elsanti1" name="Santi"/>
        </React.Fragment>
    )
}