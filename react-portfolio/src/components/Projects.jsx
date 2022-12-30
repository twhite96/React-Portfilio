import portfolio from "../assets/images/portfolio.png"


function Projects() {
    return (
        <div className="projectSection">
            <p className="sectionTitles" id="projects">Projects</p>
            <div className="projectContainer">
                <div className="projectImage">
                    <a href="#"><img src={portfolio} alt="" /></a> 
                </div>
                <div className="projectSide">
                    <a href="#">
                        <p className="projectTitle">Personal Portfolio</p>
                    </a> 
                    <p className="projectDescription">Decided to take my old personal Software Engineer Portfolio, that was outdated, just using HTML/CSS and a very small code in JavaScript and convert it all in <span className="important">React.</span>
                    <br /><br/>
                    I have a full understanding of how to integrate all the components, <span className="important">Hooks,</span> and gathering data from another file as objects, and pass it to a component.
                    </p>
                    <div className="tools">
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>
                    <div className="projectButtons">
                        <button>Button 1</button>
                        <button>Button 2</button>
                    </div>
                </div>
            </div>


            <div className="projectContainer containerInverted">
                <div className="projectImage">
                    <a href="#"><img src={portfolio} alt="" /></a> 
                </div>
                <div className="projectSide">
                <a href="#">
                        <p className="projectTitle titleInverted">Personal Portfolio</p>
                    </a>
                    <p className="projectDescription descriptionInverted">What a better way than to build my personal Software Engineering Portfolio with <span className="important">React.</span></p>
                    <div className="tools">
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>
                    <div className="projectButtons">
                        <button>Button 1</button>
                        <button>Button 2</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects