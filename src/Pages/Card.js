import React  from "react";
import {useState} from 'react';
import ImageFace from "../Picture/IMG1toUse.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import {faBookOpenReader} from'@fortawesome/free-solid-svg-icons';
import {faLaptopCode} from'@fortawesome/free-solid-svg-icons';
import ReactCardFlip from 'react-card-flip';
import  'animate.css'

function Card() {


       const[isFlipped,setIsFlipped]=useState(false);
       const handleClick=()=>{
           setIsFlipped(!isFlipped);
       }
   
return <div className="marginCard">
  
 


 <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
           <div className="PresentationCard">
              <img  className="facepic"  src={ImageFace} alt=" " />

              <h3 className="name"   > Damian Martinez</h3>
            
               <p className="profesion">FullSatck Developer </p>
               <p className="profesion2">BLIS </p>
             


                <button onClick={handleClick}  className="buttonCard "> <FontAwesomeIcon icon={faBookOpenReader} className="hover:text-red-500 " /> 
               </button>
               
             </div>

              <div className="backPresentationCard">
              <FontAwesomeIcon icon={faLaptopCode}  className="codeIcon" /> 
              
                <h3 className="backName"> Web Development  </h3>
                 <div>
                 <p className="profesion"></p>

              
                    <p>
                        React
                    </p>
                    <p>
                        Java Script
                    </p>

                    <p>
                     Node Js
                    </p>
                    <p>
                        MySql
                        </p>
                        <p>
                       Mongo DB
                        </p>
                        <p>
                        HTML
                        </p>
                        <p>
                        CSS
                        </p>
               
                 </div>
            
          

             <button onClick={handleClick} className="buttonCard" > <FontAwesomeIcon icon={faBookOpenReader} className="hover:text-red-500" /> 
               </button>
             </div>
               
      
           

       
      </ReactCardFlip>
   
    </div>

  
    } 
    
    export default Card;