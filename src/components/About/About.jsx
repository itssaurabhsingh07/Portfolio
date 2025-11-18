import React from 'react'
import './About.css'
import Card from '../Card/Card.jsx'
import mern from '../../assets/mern.png'
import devops from '../../assets/devops.png'
import genai from '../../assets/genai.webp'
function About() {
  return (
    <div id='about'>
      <div className='leftabout'>
        <div className="circle-line">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
              <span>Name</span> : Saurabh Singh
              </li>
              <li>
              <span>AGE</span> : 21 YEARS
              </li>
              <li>
              <span>GENDER</span> : MALE
              </li>
              <li>
              <span>LANGUAGE KNOWN</span> : HINDI,ENGLISH
              </li>
            </ul> 
          </div>
          <div className="EDUCATION">
            <h1>Education</h1>
            <ul>
              <li>
              <span>DEGREE</span> : B-TECH
              </li>
              <li>
              <span>BRANCH</span> : ELECTRONICS & COMMUNICATION ENGINEERING
              </li>
              <li>
              <span>CGPA</span> : 6.5
              </li>
            </ul> 
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
               FULL STACK 
              </li>
              <li>
              DEVOPS 
              </li>
              <li>
              GEN AI 
              </li>
            </ul> 
          </div>
        </div>
      </div> 
      <div className='rightabout'>
        <Card title="FULL STACK DEVELOPER" image={mern}/>
        <Card title="DEVOPS DEVELOPER" image={devops}/>
        <Card title="GEN AI DEVELOPER" image={genai}/>
      </div>
    </div>
  )
}

export default About