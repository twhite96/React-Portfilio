import logo from "../assets/images/logo.png"

function Nav() {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="#"><img src={logo}></img></a>
            </div>
            <div className="navlinks">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#">Testimonials</a>
            </div>
        </div>
    )
}

export default Nav