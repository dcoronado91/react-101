import { useState } from "react"

export function TwitterFollowCard ({ formatUserName, userName, children }) {   
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar" 
                alt="avatar"
                src={`https://unavatar.io/x/${formatUserName(userName)}`} 
                />
                <div className="tw-followCard-info">
                    {children}
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}