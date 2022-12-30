import data from "../data/projectData"
import React from "react"
import {nanoid} from "nanoid"


function Projects() {

    const element = data.map(project => (
        project.id % 2 !== 0 ? (
        <div key={project.id} className="projectContainer">
                <div className="projectImage">
                    <a href={project.live} target="_blank"><img src={project.img} alt="project image" /></a> 
                </div>
                <div className="projectSide">
                    <a href={project.live} target="_blank">
                        <p className="projectTitle">{project.name}</p>
                    </a> 
                    <p className="projectDescription" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                    <div className="tools">
                        <ul>
                            {project.tools.map(x =>
                                <li key={nanoid()}>{x}</li>
                                )}
                        </ul>
                    </div>
                    <div className="projectButtons">
                        <a href={project.code} target="_blank"><i className="fa fa-github"></i></a>
                        <a href={project.live} target="_blank"><i className="fa fa-external-link"></i></a>
                    </div>
                </div>
            </div>) : (
                <div key={project.id} className="projectContainer containerInverted">
                <div className="projectImage">
                    <a href={project.live} target="_blank"><img src={project.img} alt="" /></a> 
                </div>
                <div className="projectSide">
                    <a href={project.live} target="_blank">
                        <p className="projectTitle titleInverted">{project.name}</p>
                    </a> 
                    <p className="projectDescription descriptionInverted" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                    <div className="tools">
                        <ul>
                            {project.tools.map(x =>
                                <li key={nanoid()}>{x}</li>
                                )}
                        </ul>
                    </div>
                    <div className="projectButtons">
                        <a href={project.code} target="_blank"><i className="fa fa-github"></i></a>
                        <a href={project.live} target="_blank"><i className="fa fa-external-link"></i></a>
                    </div>
                </div>
            </div>
            )
            
            
    ))

         

    return (
        <div className="projectSection">
            <p className="sectionTitles" id="projects">Projects</p>

            {element}

            <h2 className="stayTuned">Please stay tuned for additional projects coming soon. . .</h2>

            <div className="codingActivity">
                <p>Github Coding Activity 2022</p>
                <img src="https://ghchart.rshah.org/aroman87" alt="coding activity" />
            </div>
        </div>
    )
}

export default Projects