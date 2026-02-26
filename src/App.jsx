import React from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
        userName: "daggerlover91",
        name: "Derek Coronado",
        isFollowing: true
    },
    {
        userName: "_elsanti1",
        name: "Santiago Barrios",
        isFollowing: false
    }
]

export function App () {
    const formatUserName = (userName) => `@${userName}` 

    return(
        <section className="App">
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            isFollowing={isFollowing}
                            formatUserName={formatUserName}
                            >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}