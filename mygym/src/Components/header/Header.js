import React, { useState } from 'react';
import './header.css';
import LOGO from '../../assets/img/logo.png';
import { FiList } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav id="navbar" className="bg-dark">
        <div className="logo">
          <a href="home">
            <img className="logo-img" src={LOGO} alt="Logo" />
          </a>
        </div>
        <ul className={`nav-links ${isOpen ? 'show-nav' : ''}`}>
          <li>
            <a href="#showcase" onClick={toggleNav}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleNav}>
              About
            </a>
          </li>
          <li>
            <a href="#programs" onClick={toggleNav}>
              Programmes
            </a>
          </li>
          <li>
            <a href="#trainers" onClick={toggleNav}>
              Trainers
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleNav}>
              Contact
            </a>
          </li>
        </ul>
        <a className="nav-toggle" onClick={toggleNav}>
          <FiList />
        </a>
      </nav>
    </>
  );
};

export default Header;
