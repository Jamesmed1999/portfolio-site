
import styles from "./App.module.css"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/hero"
import { About } from "./components/About"
import { Experience } from "./components/experience"


function App() {
 
  return (
    <>
      <div className = {styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      </div>
    </>
  )
}

export default App
