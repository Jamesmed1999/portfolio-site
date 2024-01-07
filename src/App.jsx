
import styles from "./App.module.css"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/hero"
import { About } from "./components/About"
import { Experience } from "./components/experience"
import {Projects} from "./components/Projects"


function App() {
 
  return (
    <>
      <div className = {styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      </div>
    </>
  )
}

export default App
