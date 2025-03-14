import React from 'react';
import { useNavigate } from 'react-router-dom';

import vd2 from '../../asserts/vd3.mp4';

import './Main.css';
import Header from '../Header/Header';
import Skills from '../Content/skills/Skills';
import Projects from '../Content/projects/Projects';
import Contact from '../Content/Contact/Contact';
import Footer from '../Footer/Footer';
import dalel from '../../asserts/images/dalel.png';
import instagramicon from '../../asserts/images/Instagram logo.gif';
import linkedinicon from '../../asserts/images/LinkedIn.gif';
import facebookicon from '../../asserts/images/Facebook.gif';
import githubicon from '../../asserts/images/Github.gif';


function Main() {

 const navigate = useNavigate();

 const handleClickCV = () => {
   navigate('/cv');
 };


  return (
    <div style={{backgroundColor:'#010000'}}>

      <Header  />  

     <div className="video-background" id='home'>
     <video src={vd2} autoPlay loop muted />

       
        <div className='presentation1'>

          <div className='hello'>
            <h3 className='hellomate'>Hi , I am Dalel ! </h3>

            <p className='position dynamic-txt'>I am <span className='engenniringstudent'>Software Engineering Student</span></p> 

            <h4>
              I am a second-year software engineering student with a strong passion for web development. Before starting my software engineering studies,
              I completed two years of integrated preparatory studies at the Higher Institute of Computer Science and Mathematics of Monastir (ISIMM). 
              I am dedicated to acquiring new skills and solving complex challenges in the field.
            </h4>
              <button className="button" onClick={handleClickCV}>Download cv</button>
              <div className='contacticonmaincontainer'>
                <a href="https://www.linkedin.com/in/dalel-ammar-b0544a234/" ><img className='iconcontactmain linkedin' alt='linkedin' src={linkedinicon} /></a>
                <a href="https://www.instagram.com/dalel.ammar/"> <img className='iconcontactmain insta'  alt='instagram' src={instagramicon} /> </a>
                <a href="https://www.facebook.com/dalel.ammar.961">  <img className='iconcontactmain fb' alt='facebook' src={facebookicon} /> </a>
                <a href="https://github.com/AmmarDalel">   <img className='iconcontactmain github' alt='github' src={githubicon} /> </a>
              </div>
         
          </div>

          <img  className='photoprofil' src={dalel} alt='dalelimage' />

        </div>
      </div>

      <div className=' containersskillsmain' id="skills">
        <Skills />
      </div>

      <div className='containerprojects' id="projects">
        <Projects />
      </div>

      <div className='containercontact' id="contact">
        <Contact />
      </div>

      <div className='containerFooter' >
        <Footer />
      </div>
    </div>
  );
}

export default Main;
