import React from "react"
import './App.css'
import Nav from "./components/Nav"
import Main from "./components/Main"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"

function App() {
  

  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
    </div>
  )
}

export default App
