import './App.scss'
import './Breakpoints.scss'
import NavBar from './Components/NavBar'
import Intro from './Components/Intro'
import About from './Components/About'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <Intro />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
