import React from 'react'
import './Projects.css'
import { useState } from 'react';
import isimmproject1 from '../../../asserts/images/isimmproject1.png';
import isimmproject2 from '../../../asserts/images/isimmproject2.png';
import isimmproject3 from '../../../asserts/images/isimmproject3.png';
import isimmproject4 from '../../../asserts/images/isimmproject4.png';
import isimmproject5 from '../../../asserts/images/isimmproject5.png';
import login from '../../../asserts/images/login.png'
import doneontime from '../../../asserts/images/done_on_time.png'
import tasks from '../../../asserts/images/tasks.png'
import projects from '../../../asserts/images/projects.png'
import ATM from '../../../asserts/images/ATM machine.png'
import gestioncuisine from "../../../asserts/images/gestion d'une cuisine.png";
import gestionecole from "../../../asserts/images/gestion d'une école.png";
import gestionrestaurant from "../../../asserts/images/gestion restaurant.png";
import crudsapp from "../../../asserts/images/cruds app.png" ;
import notesapp1 from "../../../asserts/images/notes-app1.png" ;
import notesapp21 from "../../../asserts/images/notes-app21.png" ;
import notesapp22 from "../../../asserts/images/notes-app22.png" ;
import notesapp3 from "../../../asserts/images/notes-app3.png" ;
import flivan from "../../../asserts/images/flivan.png";
import ShareModal from '../../Share/ShareModel';
//recycling_app
import recycling_app from "../../../asserts/images/recycling_app.png" ;
import recycling_app1 from "../../../asserts/images/recycling_app1.png" ;
import recycling_app2 from "../../../asserts/images/recycling_app2.png" ;
import recycling_app3 from "../../../asserts/images/recycling_app3.png" ;
import recycling_app4 from "../../../asserts/images/recycling_app4.png" ;
import recycling_app5 from "../../../asserts/images/recycling_app5.png" ;
import Meetapp1 from "../../../asserts/images/Meetapp1.png" ;
import Meetapp2 from "../../../asserts/images/Meetapp2.png" ;
import Meetapp3 from "../../../asserts/images/Meetapp3.png" ;
import Meetapp4 from "../../../asserts/images/Meetapp4.png" ;
import Meetapp5 from "../../../asserts/images/Meetapp5.png" ;
import Meetapp6 from "../../../asserts/images/Meetapp6.png" ;
import dashboard1 from "../../../asserts/images/dashboard1.png" ;
import dashboard2 from "../../../asserts/images/dashboard2.png" ;
import ADPrint1 from "../../../asserts/images/ADPrint1.png" ;
import ADPrint2 from "../../../asserts/images/ADPrint2.png" ;
import ADPrint3 from "../../../asserts/images/ADPrint3.png" ;
import ADPrint4 from "../../../asserts/images/ADPrint4.png" ;
import ADPrint5 from "../../../asserts/images/ADPrint5.png" ;
import ADPrint6 from "../../../asserts/images/ADPrint6.png" ;
import jaweherkouloub1 from "../../../asserts/images/jaweherkouloub1.png" ;
import jaweherkouloub2 from "../../../asserts/images/jaweherkouloub2.png" ;
import jaweherkouloub3 from "../../../asserts/images/jaweherkouloub3.png" ;


function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleClick = (url, content) => {
        setModalContent({ url, content });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

  return (
<section className="projects skills-container" id="projects">
        <h1>Projects</h1>
        <div className="content">
        <div className="card">
                    <div className="container-img">
                        <img alt="mawsouaa"  src={jaweherkouloub1} id="slide-1"/>
                        <img alt="souscategorie"  src={jaweherkouloub2} id="slide-2"/>
                        <img alt="souscategorie-images"  src={jaweherkouloub3} id="slide-3"/>

                    </div>
                
                    <div className="info">
                        <p>Jaweherkouloub :  React js , express js , MYSQL  </p>
                        <p>Freelance Project </p>
                        <strong className="project-title">
                            <span >Dashboard</span>
                            <a href="https://jawaherkouloub.com/" className="more-details">more details</a>   
                        </strong>
                        
                    </div>
                </div>
        <div className="card">
                    <div className="container-img">
                        <img alt="home"  src={recycling_app1} id="slide-1"/>
                        <img alt="home"  src={recycling_app2} id="slide-2"/>
                        <img alt="home"  src={recycling_app3} id="slide-3"/>
                        <img alt="listings"  src={recycling_app4} id="slide-4"/>
                        <img alt="listings"  src={recycling_app5} id="slide-5"/>
                        <img alt="login"  src={recycling_app} id="slide-6"/>
                    </div>
                
                    <div className="info">
                        <p>Figma design</p>
                        <strong className="project-title">
                            <span >Community Recycling</span>
                            <a href="https://www.figma.com/design/De8q1UeCqmWmmy0iQZBR7x/Portfolio-page---Web-site-UI-(Community)?node-id=0-1&t=bTBsnerTCZof88YV-1" className="more-details">more details</a>   
                        </strong>
                        
                    </div>
        </div>
        <div className="card">
                    <div className="container-img">
                        <img alt="home1"  src={ADPrint1} id="slide-1"/>
                        <img alt="home2"  src={ADPrint2} id="slide-2"/>
                        <img alt="home3"  src={ADPrint3} id="slide-3"/>
                        <img alt="home4"  src={ADPrint4} id="slide-4"/>
                        <img alt="home5"  src={ADPrint5} id="slide-5"/>
                        <img alt="home6"  src={ADPrint6} id="slide-6"/>
                    </div>
                
                    <div className="info">
                        <p>AD Print App : React js </p>
                        <strong className="project-title">
                            <span >AD Print</span>
                            <a href="#" className="more-details">more details</a>   
                        </strong>
                        
                    </div>
        </div>
                <div className="card">
                    <div className="container-img">
                        <img alt="liste des produits"  src={dashboard1} id="slide-1"/>
                        <img alt="ajouter produit"  src={dashboard2} id="slide-2"/>

                    </div>
                
                    <div className="info">
                        <p>Dashboard React js</p>
                        <strong className="project-title">
                            <span >Dashboard</span>
                            <a href="#" className="more-details">more details</a>   
                        </strong>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="container-img">
                        <img alt="meeting1"  src={Meetapp2} id="slide-1"/>
                        <img alt="authentificate"  src={Meetapp3} id="slide-2"/>
                        <img alt="partage d'écran"  src={Meetapp1} id="slide-3"/>
                        <img alt="login"  src={Meetapp4} id="slide-4"/>
                        <img alt="chat"  src={Meetapp5} id="slide-5"/>
                        <img alt="leave meeting "  src={Meetapp6} id="slide-6"/>
                    </div>
                
                    <div className="info">
                        <p>Meeting App React js , Express js , MongoDB , Typescript </p>
                        <strong className="project-title">
                            <span >Online meeting</span>
                            <a href="#" className="more-details">more details</a>   
                        </strong>
                        
                    </div>
                </div>
            <div className="card">
                    <div className="container-img">
                        <img alt="login"  src={flivan} id="slide-1"/>
                       
                    </div>
                
                    <div className="info">
                        <p>Home page with React js</p>
                        <strong className="project-title">
                            <span >Flivan web site</span>
                            <a href="https://ammardalel.github.io/flivain-React-js/" className="more-details">more details</a>   
                            <p onClick={()=>{handleClick(flivan ,'flivan' )}}>share</p>
                        </strong>
                        
                    </div>
                </div>
        <div className="card">
                    <div className="container-img">
                        <img alt="notes app"  src={notesapp1} id="slide-1"/>
                        <img alt="notes app"  src={notesapp21} id="slide-2"/>
                        <img alt="notes app"  src={notesapp22} id="slide-3"/>
                        <img alt="notes app"  src={notesapp3} id="slide-4"/>

                    </div>
                
                    <div className="info">
                        <p>Notes Application : HTML , CSS , JS</p>
                        <strong className="project-title">
                            <span >Notes Application</span>
                            <a href="https://ammardalel.github.io/Notes_App/" className="more-details">more details</a>
                        </strong>
                       
                    </div>
             </div>
            <div className="card">
                    <div className="container-img">
                        <img alt="crud app"  src={crudsapp} id="slide-1"/>
                    </div>
                
                    <div className="info">
                        <p>CRUD Application : HTML , CSS , JS</p>
                        <strong className="project-title">
                            <span >CRUD Application</span>
                            <a href="https://ammardalel.github.io/CRUDS_JS//" className="more-details">more details</a>
                        </strong>
                    </div>
             </div>

            <div className="card">
                <div className="container-img">
                    <img alt="login"  src={isimmproject1} id="slide-1"  />
                    <img alt="done on time"  src={isimmproject2}id="slide-2"/>
                    <img alt="tasks"  src={isimmproject3} id="slide-3"/>
                    <img alt="projects"  src={isimmproject4} id="slide-4"/>
                    <img alt="projects"  src={isimmproject5} id="slide-4"/>

                </div>
               
                <div className="info">
                    <p>web application with React js</p>
                    <strong className="project-title">
                        <span >ISIMM website</span>
                         <a href="#projects" className="more-details">more details</a>   
                    </strong>
                </div>
            </div>
            <div className="card">
                <div className="container-img">
                    <img alt="login"  src={login} id="slide-1"/>
                    <img alt="done on time"  src={doneontime}id="slide-2"/>
                    <img alt="tasks"  src={tasks} id="slide-3"/>
                    <img alt="projects"  src={projects} id="slide-4"/>
                </div>
               
                <div className="info">
                    <p>web application with React js and Springboot</p>
                    <strong className="project-title">
                        <span >Statistic web app</span>
                         <a href="#projects" className="more-details">more details</a>   
                    </strong>
                </div>
            </div>
            <div className="card">
                <div className="container-img">
                    <img alt="ATM machine"  src={ATM} id="slide-1"/>
                </div>
              
                <div className="info">
                    <p>ATM Machine : JavaCard</p>
                    <strong className="project-title">
                        <span >ATM Machine</span>
                        <a href="https://drive.google.com/drive/folders/1I2RADf0McsRNM7q2RfJ5b8g8fRrvnyjz?usp=sharing" className="more-details">more details</a>
                    </strong>
                </div>
            </div>

  
        </div>

        {isModalOpen && (
                <ShareModal
                    urlModel={modalContent.url}
                    modalContent={modalContent.content}
                    closeModal={closeModal}
                />
            )}
    </section>  )
}

export default Projects