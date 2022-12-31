import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import postgres from "../assets/images/postgres.png"
import github from "../assets/images/github1.png"
import reactIcon from "../assets/images/React-icon.png"
import node from "../assets/images/node.png"
import resume from "../assets/ARoman Resume Dec 2022.pdf"

function About() {
    return (
        <div className="aboutSection">
            <p className="sectionTitles" id="about">About Me</p>
            <div className="aboutBody">
                <p>
                    Aspiring Software Engineer who always strives for perfection. My experiences in the past have taught me how to learn quickly, have the ability to work independently, in a team environment, under pressure, how multi-task, and be detailed oriented. Looking for the next challenge in my career where I can use the skills that I have learned. Currently pursuing a Bachelor's Degree in Information Technology with a concentration in Software Development with an expected graduation date of March 2023. I have learned HTML, CSS, JavaScript and Python with many more upcoming learning in SQL, C++ and Java.

                    <br />
                    <br />

                    Outside of programming, I have previously worked in law enforcement for 6 years, working with a team and working closely with different federal agencies. I did 5 years in the Marine Corps working on the electronic countermeasures for all the Marine Corps helicopters and was responsible for the training and operation of a squadron of at least 1000 Marines. Additionally, I am fully bilingual and certified in Spanish.
                </p>
                <a href={resume} target="_blank"><button className="resumeButton">Download Resume</button></a>
            </div>
            <div className="skills">
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