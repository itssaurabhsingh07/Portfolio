import React from 'react'
import './About.css'
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

      </div>
    </div>
  )
}

export default About