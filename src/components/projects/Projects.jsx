import React from 'react'
import Card from '../Card/Card'
import './Projects.css'
import va from '../../assets/va.jpg'
import movie from '../../assets/movie.png'
import grocery from '../../assets/grocery.png'
import portfolio from '../../assets/portfolioi.jpg'
import gmail from '../../assets/gmail.png'
function Projects() {
  return (
    <div id='projects'>
          <h1 id='para'>1.5+ YEARS EXPERIENCED IN PROJECTS</h1>
          <div className="slider">
            <Card title="A FOOD DELIVERY WEBSITE" image={va}/>
            <Card title="MOVIE BOOKING WEBSITE" image={movie}/>
            <Card title="GMAIL CLONE" image={gmail}/> 
            <Card title="GROCERY DELIVERY WITH AI" image={grocery}/>
            <Card title="PORTFOLIO" image={portfolio}/>
          </div>
    </div>
  )
}

export default Projects