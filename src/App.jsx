
import styles from "./App.module.css"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/hero"
import { About } from "./components/About"
import { Experience } from "./components/experience"
import {Projects} from "./components/Projects"
import { Footer } from "./components/Footer"


function App() {
 
  return (
    <>
      <div className = {styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
      </div>
    </>
  )
}

export default App
