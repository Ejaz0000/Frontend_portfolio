import React from 'react'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import Projects from './components/Projects'
import { Listofproj } from './components/Listofproj'
import Skills from './components/skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSec/>
      <Listofproj/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App