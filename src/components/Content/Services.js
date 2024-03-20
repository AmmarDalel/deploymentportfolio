import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faMobile } from '@fortawesome/free-solid-svg-icons'; 
import './Services.css';

function Services() {
  return (
    <>
    <div className='services'>
        <h2 className="title">Services</h2>
        <div className="content">
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faLaptop} /> 
            </div>
            <div className="info">
              <h3>problem solving</h3>
              <p>Algorithme </p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faMobile} />
            </div>
            <div className="info">
              <h3>developpement</h3>
              <p>mobile applications developpement : Android , React Native</p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faLaptop} /> 
            </div>
            <div className="info">
              <h3>developpement</h3>
              <p>web applications developpement : Full Stack : react js , Springboot</p>
            </div>
          </div>
        </div>
    </div>
      
    </>
  );
}

export default Services;
