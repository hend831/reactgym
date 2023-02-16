import React from 'react'
import './traner.css'
import Tran from '../../assets/img/trainer-1.jpg'
import Tran_2 from '../../assets/img/trainer-2.jpg'
import Tran_3 from '../../assets/img/trainer-3.jpg'
import {CiFacebook} from 'react-icons/ci'

const traner = () => {
  return (
    <section id="trainers" className=" py-1">
    <h2 className="m-heading text-center py-1">Expert<span
      className="text-primary"> Trainers</span></h2>
      <div className="container">
        <div className="trainers-boxes">
          <div className="trainer-box box-shadow p-1">
            <img src={Tran}alt="Trainer 1"/>
            <span className="text-primary">Strength Trainer</span>
            <h4> jon jon</h4>
            <p>Lorem ipsum dolor sit amet, consectetur a 
              dipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna 
               aliqua. Ut enim ad minim veniam, quis</p>
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"></a><i className="fab fa-instagram"></i></li>
              </ul>
            </div>

            <div className="trainer-box box-shadow p-1">
              <img src={Tran_2}alt="Trainer 2"/>
              <span className="text-primary">Strength Trainer</span>
              <h4> amer sayren</h4>
              <p>Lorem ipsum dolor sit amet, consectetur a 
              dipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna 
               aliqua. Ut enim ad minim veniam, quis</p>
                <ul>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"></a><i className="fab fa-instagram"></i></li>
                </ul>
              </div>

              <div className="trainer-box box-shadow p-1">
                <img src={Tran_3}alt="Trainer 3"/>
                <span className="text-primary">Strength Trainer</span>
                <h4> jusy roy</h4>
                <p>Lorem ipsum dolor sit amet, consectetur a 
              dipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna </p>
                  <ul>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"></a><i className="fab fa-instagram"></i></li>
                  </ul>
                </div>

          </div>

          </div>

  </section>
  )
}

export default traner
