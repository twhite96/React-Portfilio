import data from "../data/employerData"
import React, {useState} from "react"
import {nanoid} from "nanoid"




function Experience () {
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
        <div className="experienceSection">
            <p className="sectionTitles" id="experience">Experience</p>

            <div className="experienceContainer">
                <div className="employers">
                    <ul>
                        {name}
                    </ul>
                </div>
                <div className="employerDescription">
                    {employer}
                </div>
            </div>
            <div className="resume">
            <a href="#"><button className="resumeButton">Download Resume</button></a>
            </div>
            
        </div>
    )
}

export default Experience