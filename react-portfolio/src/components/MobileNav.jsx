import { AiOutlineMenu } from "react-icons/ai"
import { CgCloseO } from "react-icons/cg"
import React, {useState} from "react"

function MobileNav() {

const [open, setOpen] = useState(false)

const hamburgerOpen = <AiOutlineMenu className="ham" onClick={() => setOpen(!open)} />

const hamburgerClose = <CgCloseO className="ham" onClick={() => setOpen(!open)} />

const closeMenu = () => setOpen(false)
    return (
        <>
        {open ? hamburgerClose : hamburgerOpen}
        <div className="menu">
            {open && <div className="navlinksMobile">
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#experience" onClick={closeMenu}>Experience</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
            </div>}
        </div>
        </>
    )
}

export default MobileNav