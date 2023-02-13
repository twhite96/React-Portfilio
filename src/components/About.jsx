import postgres from "../assets/images/postgres.png"
import github from "../assets/images/github1.png"
import reactIcon from "../assets/images/React-icon.png"
import node from "../assets/images/node.png"
import resume from "../assets/ARoman Resume Jan 2023.pdf"
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
                    Hello, my name is <span className="important">Angel Roman</span> and this is my backstory. After finishing my Bachelor in Criminal Justice in 2012 I decided to further my education and take classes in Information Technology. The more programming classes I took, the more I fell in love with software development. This coincided with the conclusion of my military commitment and I took the next several years to focus on a career in law enforcement and spend time concentrating on my young family. Although I had put my education on hold, I still continued to take courses to further my IT knowledge. Fast forward to 2021, I decided to jump back in and become a <span className="important">Software Engineer.</span> In 2022, I graduated with a <span className="coral">Bachelor in Information Technology</span> with a Concentration in <span className="important">Software Development.</span> In earning this degree, I have learned multiple languages and I am ready to find the next challenge in my career where I am able to use these skills.
                </p>
                    <br/>
                <p>
                    Outside of programming, I have both a military and law enforcement background. I served 5 years in the <span className="coral">United States Marine Corps</span> where I worked on electronic countermeasures for all Marine Corps helicopters. While in this capacity I was responsible for the training and operation of squadrons of up to 1,000 Marines. My 6 years of Law Enforcement helped to solidify my ability to work with multiple departments as well as various federal agencies which has helped to cultivate an understanding of <span className="important">team building, personal growth and gained wisdom.</span> 
                </p>
                    <br/>
                <p>
                    So why would you want to have <span className="coral">ME</span> on your team? What I do not have in experience, I do have in <span className="important">enthusiasm.</span> Enthusiasm to solve problems, work with a team or just the enthusiasm to take on a solo project and work it until I have a solution. I bring a mindset of <span className="coral">wonder</span>, where I can bring critical skills to remove single points of failure through my tenacity. I'm not afraid to ask questions, because it can result in creative ideas .I don't have a programming background which means I don't have preconceived ideas which allow for new and fresh solutions. <span className="important">I have adapted</span> to change throughout my career and I feel it has helped me to learn quickly and work well in both a team and individual setting. I believe the best teams are made up of individuals with the most diverse backgrounds and experiences and <span className="coral">I hope to become a part of yours.</span>
                </p>
                <a href={resume} target="_blank"><button className="resumeButton">Download Resume</button></a>
            </div>
            <div ref={refSkills} className={`${inViewSkills ? "skills fade-in appear" :"skills fade-in"}`}  >
                <p>Skills</p>
                <div className="skillsIcons">
                    <figure>
                        <img src={reactIcon} alt="" />
                        <figcaption>React</figcaption>
                    </figure>
                    <figure>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                        <figcaption>JavaScript</figcaption>
                    </figure>
                    <figure>
                        <img src={node} alt="" />
                        <figcaption>Node JS</figcaption>
                    </figure>
                    <figure>
                        <img src="https://skillshack.blob.core.windows.net/uploads/express.webp" alt="" />
                        <figcaption>Express JS</figcaption>
                    </figure>
                    <figure>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="" />
                        <figcaption>MongoDB</figcaption>
                    </figure>
                    
                    <figure>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="" />
                        <figcaption>Python</figcaption>
                    </figure>
                    <figure>
                        <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="" />
                        <figcaption>Django</figcaption>
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
                        <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" />
                        <figcaption>TailWind CSS</figcaption>
                    </figure>
                    
                </div>

                <p>Exposure</p>
                <div className="skillsIcons">
                    <figure>
                        <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular Logo" />
                        <figcaption>Angular</figcaption>
                    </figure>
                    <figure>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" />
                        <figcaption>TypeScript</figcaption>
                    </figure>
                    <figure>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="Redux" />
                        <figcaption>Redux</figcaption>
                    </figure>
                    
                    <figure>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="" />
                        <figcaption>C++</figcaption>
                    </figure>
                    <figure>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="" />
                        <figcaption>Java</figcaption>
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