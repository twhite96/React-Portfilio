import logo from "../assets/images/logo.png"

function Nav() {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="#"><img src={logo}></img></a>
            </div>
            <div className="navlinks">
                <a href="#">About</a>
                <a href="#">Experience</a>
                <a href="#">Projects</a>
                <a href="#">Testimonials</a>
            </div>
        </div>
    )
}

export default Nav