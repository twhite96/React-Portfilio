import logo from "../assets/images/logo.png"
import MobileNav from "./MobileNav";


function Nav() {
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-110px";
    }
    prevScrollpos = currentScrollPos;
}


    return (
        <div className="navbar" id="navbar">
            <div className="logo">
                <a href="#"><img src={logo}></img></a>
            </div>
            <div className="navlinks">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </div>
            
            <div className="hamMenu">
                <MobileNav />
            </div>
        </div>
    )
}

export default Nav