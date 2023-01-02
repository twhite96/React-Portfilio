import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import postgres from "../assets/images/postgres.png"
import github from "../assets/images/github1.png"
import reactIcon from "../assets/images/React-icon.png"
import node from "../assets/images/node.png"
import resume from "../assets/ARoman Resume Dec 2022.pdf"
import {useInView } from "react-intersection-observer"

function About() {
    const {ref: ref, inView: inView} = useInView({
        threshold: .5,
        triggerOnce: true,
        
    })

    const {ref: refSkills, inView: inViewSkills} = useInView({
        threshold: 1,
        triggerOnce: true
    })

    console.log(inView)

    return (
        <div className="aboutSection" id="about">
            <p className="sectionTitles">About Me</p>
            <div ref={ref} className={`${inView ? "aboutBody fade-in appear" :"aboutBody fade-in"}`}>
                <p>
                    Hello! My name is <span className="important">Angel Roman</span> and I enjoy creating things out of a blank page. Back in 2012, after I finished my Bachelor in Criminal Justice, I decided to get another degree in Information Technology where I took programming classes and I fell in love with software development. After exhausting my military benefits and my former job as a police officer taking all of my free time, I took a pause on learned and stepped away from school. Fast forward to 2021, I decided to jump right back in and become a <span className="important">Software Engineer.</span> I have graduated with a <span className="coral">Bachelor in Information Technology</span> with a Concentration in <span className="important">Software Development.</span> I have learned multiple languages and I am ready to find my next challenge in my career where I can use the skills that I have learned.
                </p>
                    <br/>
                <p>
                    Outside of programming, I have previously worked in law enforcement for 6 years, working with a team and working closely with different federal agencies. I did 5 years in the <span className="coral">Marine Corps</span> working on the electronic countermeasures for all the Marine Corps helicopters and was responsible for the training and operation of a squadron of at least 1000 Marines. With these past experiences I am bringing <span className="important">personal growth, lessons learned, soft skills, and wisdom gained.</span>So you are asking yourself, why would you want <span className="coral">ME</span> as part of you team when I do not have much experience. Well, I will tell you this; I am excited to learn and can positively boost your team culture, I bring a <span className="important">learning</span> mindset where I can learn critical skills to remove single points of failure, I ask a lot of questions where I can inspire creative ideas, I have not been <span className="coral">brainwashed</span> so that makes me great to receive feedback, past experiences show that I learn quickly, I can <span className="important">adapt</span> to changes, and I work well in a team as an individual. The best teams are made of people with different experiences.
                </p>
                <a href={resume} target="_blank"><button className="resumeButton">Download Resume</button></a>
            </div>
            <div ref={refSkills} className={`${inViewSkills ? "skills fade-in appear" :"skills fade-in"}`}  >
                <p>Skills</p>
                <div className="skillsIcons">
                    <figure>
                        <img src={html} alt="" />
                        <figcaption>HTML</figcaption>
                    </figure>
                    <figure>
                        <img src={css} alt="" />
                        <figcaption>CSS</figcaption>
                    </figure>
                    <figure>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                        <figcaption>JavaScript</figcaption>
                    </figure>
                    <figure>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="" />
                        <figcaption>Python</figcaption>
                    </figure>
                    <figure>
                        <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="" />
                        <figcaption>Git</figcaption>
                    </figure>
                    <figure>
                        <img src={github} alt="" />
                        <figcaption>GitHub</figcaption>
                    </figure>
                    <figure>
                        <img src={reactIcon} alt="" />
                        <figcaption>React</figcaption>
                    </figure>
                    <figure>
                        <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="" />
                        <figcaption>Django</figcaption>
                    </figure>
                </div>

                <p>Exposure</p>
                <div className="skillsIcons">
                    <figure>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="" />
                        <figcaption>C++</figcaption>
                    </figure>
                    <figure>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="" />
                        <figcaption>Java</figcaption>
                    </figure>
                    <figure>
                        <img src={node} alt="" />
                        <figcaption>Node JS</figcaption>
                    </figure>
                    <figure>
                        <img src={postgres} alt="" />
                        <figcaption>PostgreSQL</figcaption>
                    </figure>
                    <figure>
                        <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="" />
                        <figcaption>SQLite</figcaption>
                    </figure>
                    <figure>
                        <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="" />
                        <figcaption>Figma</figcaption>
                    </figure>
                    
                </div>

            </div>
        
        </div>
    )
}

export default About