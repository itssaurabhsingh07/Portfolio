import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/projects/Projects'
function App() {


  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Projects/>
    </>
  )
}

export default App
