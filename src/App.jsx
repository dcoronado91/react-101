import React from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App () {
    const formatUserName = (userName) => `@${userName}` 

    return(
        <section className="App">
            <React.Fragment>
            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="daggerlover91">
            <strong>Derek Coronado</strong>
            </TwitterFollowCard>

            <TwitterFollowCard 
            formatUserName={formatUserName}
            userName="BigSalchichin">
            <strong>Nery Hernandez</strong>
            </TwitterFollowCard>

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="MRvimi" 
            name="Mario">
            <strong>Mario Villanueva</strong>
            </TwitterFollowCard>

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="_elsanti1" 
            name="Santi">
            <strong>Santiago Barrios</strong>
            </TwitterFollowCard>

        </React.Fragment>
        </section>
    )
}