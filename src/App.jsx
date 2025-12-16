import React from 'react'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import Projects from './components/Projects'
import { Listofproj } from './components/Listofproj'
import Skills from './components/skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutSection from './components/AboutSection'
import Experience from './components/Experience'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSec/>
      <AboutSection/>
      <Experience/>
      <Listofproj/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App