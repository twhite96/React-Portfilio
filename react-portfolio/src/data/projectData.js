import portfolio from "../assets/images/portfolio.png"
import anime from "../assets/images/anime.png"
import speedType from "../assets/images/speedType.png"
import rps from "../assets/images/rps.png"

const data = [
   {
    id: 1,
    img: portfolio,
    name: "Personal Portfolio",
    description: "Decided to take my old personal Software Engineer Portfolio, that was outdated, just using HTML/CSS and a bit of JavaScript and convert it all in <span>React.</span><br /><br/> I have a full understanding of how to integrate all the components, <span>Hooks,</span> and gathering data from another file as objects, and pass it to a component.",
    tools: ["React", "JavaScript", "HTML/CSS"],
    code: "https://github.com/ARoman87/React-Portfilio/",
    live: "https://code-dependant.com/"
   },
   {
    id: 2,
    img: anime,
    name: "Anime Trivia",
    description: "This is a trivia game with questions from Manga or Anime that access random questions from the <a href='https://opentdb.com/' target='_blank'><span>Open Trivia Database API.</span></a> There are 5 multiple choice questions and the player is scored based on their answers.<br/><br/> This is a final solo project from <a href='https://scrimba.com/learn/learnreact' target='_blank'><span>Scrimba Learn React course.</span></a> This project will be updated to give the user the ability to choose the category of the questions and the difficulty of the questions. ",
    tools: ["React", "JavaScript", "HTML/CSS"],
    code: "https://github.com/ARoman87/anime_trivia",
    live: "https://aroman87.github.io/anime_trivia/"
   }, 

   {
    id: 3,
    img: speedType,
    name: "Speed Typing Test",
    description: "A short typing speed test to test how fast you can type given the number of seconds. This is a project that is part of <a href='https://scrimba.com/learn/learnreact' target='_blank'><span>Scrimba Learn React course.</span></a><br/><br/> I would like to implement the next feature of the user having to follow a specific paragraph where the program will know and not count any mispelled words. ",
    tools: ["React", "JavaScript", "HTML/CSS"],
    code: "https://github.com/ARoman87/speedType",
    live: "https://aroman87.github.io/speedType/"
   }, 
   {
    id: 4,
    img: rps,
    name: "Rock, Paper, Scissors",
    description: "Oh look! It is another <span>Rock, Paper, Scissors</span> project just like every other developer. Well the reason why I included this project here is because I can say that I was pretty proud of this project. This was the first project I spent a lot of time working on it.<br/> <br/> This was one of those projects that I learned so much with it because it made me think a lot on how to use event handlers and write a lot of <span>JavaScript</span> in one project. Hope you enjoy this one as much as I did. ",
    tools: ["JavaScript", "HTML/CSS"],
    code: "https://github.com/ARoman87/rock-paper-scissors",
    live: "https://aroman87.github.io/rock-paper-scissors/"
   }, 
]

export default data