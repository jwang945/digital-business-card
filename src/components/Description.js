export default function Description() {
    return (
        <div className = "description-page">
            <h1 className = "description-name">Maisie Lang</h1>
            <h2 className = "profession">Certified Cat</h2>
            <div className="buttons">
                <button className = "button">Feed Me</button>
                <button className = "button">LinkedIn</button>
            </div>
            <div className="descriptions-box">
                <div className = "description">
                    <h2 className = "about-title">About</h2>
                    <h3>I am a business cat. I do lots of business. I am adept at catching toys and lasers. I also have strong biting skills</h3>
                </div>
                <div className = "description">
                    <h2>Interests</h2>
                    <h3>I am interested in big-eye tuna and the mating habits of the common housefly. I am not interested in big and dumb dogs.</h3>
                </div>
            </div>
            
            <div className = "footer">
                <img src={require("./../resources/images/facebook.png")} className="invert"/>
                <img src={require("./../resources/images/instagram.png")} className="invert"/>
                <img src={require("./../resources/images/twitter.png")} className="invert"/>
                <img src={require("./../resources/images/tiktok.png")} className="invert"/>
            </div>
        </div>
    )
}