import React from 'react'
import './programs.css'
import Body from '../../assets/img/Body-Building.png'
import Yoga   from '../../assets/img/yoga.png'
import Fit from '../../assets/img/Basic-Fitness.png'

const Programs = () => {
  return (
    <>
    <section id="programs" className="text-center py-1">
   <h2 className="m-heading text-center py-1"> Our <span
     class="text-primary">programs</span></h2>
     <div className="container">
     <div className="boxes">
       <div className="box">
         <img src={Fit}alt="Basic Fitness"/>
         <div>
           <h3>Basic Fitness</h3>
           <p>Lorem ipsum dolor sit amet, consectetur a dipiscing elit, sed do eiusmod tempor</p>
             </div>
         </div>

         <div className="box">
           <img src={Body}alt="Basic Fitness"/>
           <div>
             <h3>Body Building</h3>
             <p>Lorem ipsum dolor sit amet, consectetur a dipiscing elit, sed do eiusmod tempor</p>
               </div>
           </div>

           <div className="box">
             <img src={Yoga}alt="Basic Fitness"/>
             <div>
               <h3>Yoga</h3>
               <p>Lorem ipsum dolor sit amet, consectetur a dipiscing elit, sed do eiusmod tempor</p>
                 </div>
             </div>
             </div>
         </div>

   </section>
   </>
  )
}

export default Programs
