import me from "../assets/images/me.png"

function Main() {
    let special = "<Hello />"
    return (
        <div className="main">
            <div className="intro">
                <p className="myname"><span>{special},</span> my name is</p>
                <p className="name">Angel Roman</p>
                <p className="software">Software Engineer</p>

            </div>
            <div className="intro-img">
                <img src={me} alt="my image" />
            </div>
        </div>
    )
}

export default Main