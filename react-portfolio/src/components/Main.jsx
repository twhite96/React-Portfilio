import me from "../assets/images/me.png"

function Main() {
    return (
        <div className="main">
            <div className="intro">
                <p className="myname">Hello, my name is</p>
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