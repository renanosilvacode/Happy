import React from 'react';
import { FiArrowRight } from 'react-icons/fi'
import '../styles/pages/landing.css'
import logoImg from '../images/logo.svg';

import { Link } from 'react-router-dom'

export default function Landing(){

    return(
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>
        <main>
          <h1>Bring Happiness to the world</h1>
          <p>Visit orphanages and change the day of the children.</p>

          <div className="location">
            <strong>São Bernardo do Campo</strong>
            <span>São Paulo</span>
          </div>

          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
          </Link>
        </main>
      </div>
    </div>
    )
}