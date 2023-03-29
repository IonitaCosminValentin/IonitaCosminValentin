import './App.scss'
import NavBar from './Components/NavBar'
import Intro from './Components/Intro'
import About from './Components/About'
import Resume from './Components/Resume'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <Intro />
      <About />
      <Resume />
    </div>
  )
}

export default App
