import React, {useState, useEffect} from "react"
import { useInView } from "react-intersection-observer"
import './App.css'
import Nav from "./components/Nav"
import Main from "./components/Main"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Preload from "./components/Preload"




function App() {
  const [loading, setLoading] = useState(false)

  const {ref, inView} = useInView()
  

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  },[])

  return (
    <div className="App">
      {loading ? <Preload loading={loading}/> : 
      <div ref={ref} className={`${inView ? "App fade-inLonger appear": "App fade-in"}`}>
       <Nav /> 
       <Main />
      <About />
      <Experience />
      <Projects />
      <Contact /> 
      </div>
    }
    </div>
  )
}

export default App
