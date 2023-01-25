import data from "../data/projectData"
import React, {useState, useEffect} from "react"
import {nanoid} from "nanoid"
import { useInView } from "react-intersection-observer"


function Projects() {

    const {ref, inView} = useInView({
        threshold: .2,
        triggerOnce: true
    })
    
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
        <div className="projectSection" id="projects">
            <p className="sectionTitles">Projects</p>
            <div ref={ref} className={`${inView ? "fade-in appear theProjects": "fade-in "}`}>
                {element}
            </div>


            <div className="codingActivity">
                <p>Github Coding Activity 2022</p>
                <img src="https://ghchart.rshah.org/108900/aroman87" alt="coding activity" />
            </div>
        </div>
    )
}

export default Projects