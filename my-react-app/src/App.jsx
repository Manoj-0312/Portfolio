
import './App.css'
import Body from './Pages/Body'
import Navbar from "./Pages/Navbar"
import HeroSection from "./Pages/HeroSection"
import InfoSection from './Pages/InfoSection'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
<div className='container'>
      <Body/>
      <Navbar/>
      <HeroSection/>
      <InfoSection/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
    </>
  )
}

export default App
