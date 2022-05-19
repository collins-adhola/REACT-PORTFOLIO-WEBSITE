import React from "react";
import "./about.css";
import ME from '../../assets/me2.JPG';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TiFolder} from 'react-icons/ti'


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="AboutImage"/>
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <TiFolder className="about__icon" />
              <h5>10+ Completed Projects</h5>
              <small>2+ Years Working Experience</small>
            </article>
          </div>
            <p>
              Hello, I am a Frontend Developer with a background in IT Networking and Application Support. In my previous roles I collaborated with developers to build and test iOS, Android and Desktop applications, before transitioning to software development. I specialise in creating Frontend scalable interactive experiences and functional interfaces using the latest technologies including React, Material Ui, HTML5 and JavaScript. I am also substantially knowledgeable in Backend technologies including Django, REST API, docker and Python. 
            </p>
            <a href ="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About