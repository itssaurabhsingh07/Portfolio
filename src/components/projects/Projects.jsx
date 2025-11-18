import React from 'react'
import Card from '../Card/Card'
import './Projects.css'
import va from '../../assets/va.jpg'
function Projects() {
  return (
    <div id='projects'>
          <h1 id='para'>1.5+ YEARS EXPERIENCED IN PROJECTS</h1>
          <div className="slider">
            <Card title="A FOOD DELIVERY WEBSITE" image={va}/>
            <Card title="MOVIE BOOKING WEBSITE" image={va}/>
            <Card title="GMAIL CLONE" image={va}/> 
            <Card title="GROCERY DELIVERY WITH AI" image={va}/>
            <Card title="PORTFOLIO" image={va}/>
          </div>
    </div>
  )
}

export default Projects