import React from 'react'
import './about.css'
import US from '../../assets/img/about-us.jpg'

const About = () => {
  return (
    <>
    <section id="about" className="bg-light py-1">
       <div className="container">
         <h2 className="m-heading text-center py-1">Hello, We are the <span
           className="text-primary">GYM</span></h2>
          <div className="about-content">
         <div className='p_p'>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, suntin culpa qui officia deserunt mollit anim id est laborum..</p>
           </div>
           <img src={US} alt="About Us"
            className="box-shadow"/> 
        </div>
      </div>
      

    </section>
    </>
  )
}

export default About
