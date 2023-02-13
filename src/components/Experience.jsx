import data from "../data/employerData"
import React, {useState} from "react"
import {nanoid} from "nanoid"
import resume from "../assets/ARoman Resume Jan 2023.pdf"
import { useInView } from "react-intersection-observer"




function Experience () {

    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true
    })

    const [info, setInfo] = useState(data)
    const [employer, setEmployer] = useState(
        <div>
                <p className="employer">{data[0].position}<span> @ {data[0].name}</span></p>
                <p className="date">{data[0].date}</p>
                {data[0].description.map(x => (
                    <ul key={nanoid()}>
                        <li>{x}</li>
                    </ul>
                ))}
            </div>
    )
    

    function handleClick(event) {
        const id = event.currentTarget.id - 1
        setEmployer(prevEmployer => (
            <div>
                <p className="employer">{data[id].position}<span> @ {data[id].name}</span></p>
                <p className="date">{data[id].date}</p>
                {data[id].description.map(x => (
                    <ul key={nanoid()}>
                        <li>{x}</li>
                    </ul>
                ))}
            </div>
        ))
        setInfo(prevInfo => prevInfo.map(x => {
            return x.id === id + 1 ? {...x, className: "employerChosen"} : {...x, className: ""}
        }))

    }


    const name = info.map(x => (
        <li className={x.className} onClick={handleClick} id={x.id} key={x.id}>{x.name}</li>
        
    ))

    return (
        <div className="experienceSection" id="experience">
            <p className="sectionTitles">Experience</p>

            <div ref={ref} className={`${inView ?"experienceContainer fade-in appear": "experienceContainer fade-in"}`}>
                <div className="employers">
                    <ul>
                        {name}
                    </ul>
                </div>
                <div className="employerDescription">
                    {employer}
                </div>
            </div>
            <div ref={ref} className={`${inView ?"resume fade-in appear": "resume fade-in"}`}>
            <a href={resume} target="_blank"><button className="resumeButton">Download Resume</button></a>
            </div>
            
        </div>
    )
}

export default Experience