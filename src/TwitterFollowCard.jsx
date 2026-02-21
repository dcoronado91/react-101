export function TwitterFollowCard ({ formatUserName, userName, children, isFollowing }) {   
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar" 
                alt="papi kawhi leonard"
                src={`https://unavatar.io/x/${formatUserName(userName)}`} 
                />
                <div className="tw-followCard-info">
                    {children}
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}