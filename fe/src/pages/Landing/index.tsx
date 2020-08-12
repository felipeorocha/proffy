import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Study"/>
            Estudar
          </Link>
          <Link to="/give-class" className="give-classes">
            <img src={giveClassesIcon} alt="Class"/>
            Dar aula
          </Link>
        </div>
        <span className="total-connections">
          Total de 200 conexoes realizadas
          <img src={purpleHeart} alt="Heart"/>
        </span>
      </div>
    </div>
  )
}

export default Landing;
