import React from 'react'
import "./Contact.css"
import con from "../../assets/contact.png"
function Contact() {
  return (
    <div id='contact'>
        <div className='leftcontact'>
           <img src={con} alt=''/>
        </div>
        <div className='rightcontact'>
            <form action ="https://formspree.io/f/xdkbezza" method='POST' className='form'>
                <h2>Contact Me</h2>
                <input type="text" placeholder='Your Name' name='name' required/>
                <input type="email" placeholder='Your Email' name='email' required/>
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact