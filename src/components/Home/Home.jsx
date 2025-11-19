import React from 'react'
import './Home.css'
import man from '../../assets/man.png'
import Typewriter from 'typewriter-effect'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Home() {
  useGSAP (()=>{
    let tl1=gsap.timeline()
    tl1.from(".line1",{
      y:80,
      duration:1,
      opacity:0
    })
    tl1.from(".line2",{
      y:80,
      duration:1,
      opacity:0
    })
    tl1.from(".line3",{
      y:80,
      duration:1,
      opacity:0
    })
    gsap.from(".righthome img",{
      x:200,
      duration:1,
      opacity:0
    })
  })
  return (
    <div id='home'>
        <div className='lefthome'>
         <div className='homedetails'>
             <div className="line1">I'M</div>
             <div className="line2">SAURABH SINGH</div>
             <div className="line3">
               <Typewriter
              options={{
                strings: [
                  'A Full Stack Developer',
                  'A DevOps Developer',
                  'A GEN AI Developer'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
             </div>
             <button>HIRE ME</button>
         </div>
        </div>
        <div className='righthome'>
            <img src={man} alt="man"/>
        </div>
    </div>
  )
}

export default Home