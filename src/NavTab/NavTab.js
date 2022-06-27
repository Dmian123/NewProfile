import React from "react";
import {useState} from "react";
import {NavLink}from "react-router-dom";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import {faHouse} from'@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import{faBars} from'@fortawesome/free-solid-svg-icons';

function NavTab() {
 
  const [showSidebar,setShowSidebar]=useState(false);
    return<div>

<div className="container-fluid" >
    
  
       
    <nav className="topNav  " >
 


 

  <div className="sidebar">

<button className="toggleMenu" onClick={()=>setShowSidebar(!showSidebar)}><FontAwesomeIcon icon={faBars} className="hover:text-red-500"  /></button>
    
<div className="showSidebar">
 {
   showSidebar?<div id="mySidenav" className="sidenav">


          
       

         <p > <NavLink  id="NavHome"  to="/home"> <FontAwesomeIcon icon={faHouse} className="homeIcon" /></NavLink>  </p>
  
         <p > <NavLink id="NavResume"  to="/resume">Resume</NavLink> </p>

         <p ><NavLink  id="NavContact"  to="/Contact"> Job Offer</NavLink> </p>

         <a href="/home#workExperienceText"   id="workExperience"> Work </a>  
          
          
          <a href="/home#educationText" id="education">Education</a>
          
          
          <a href="/home#skillText" id="skills">Skills</a>
         
          
          <a href="/home#lenguageText" id="lenguage">Language</a>
          
          
          <a href="/home#ContactText" id="ContactMe">Contact</a>
          

     
     

        


   </div>:null
 }
 
  </div> 



  


</div>
     




  
  </nav>
  

 </div>

     
  </div>
}
  
export default NavTab;

/*
<span>
<a class="navbar-brand" href="#">
    <img src="" width="30" height="30" class="d-inline-block align-top" alt=""/>
    Bootstrap
   </a>
</span>*/ 


/* 


 <div className="container-fluid" >
    
  
       
       <nav className="topNav  " >
    
 

    <ul className="nav justify-content-center " >
    
   
   
   <li className="nav-item" role="presentation"> <NavLink   className="nav-link " to="/home"> <FontAwesomeIcon icon={faHouse} className="homeIcon" /></NavLink>  </li>
  <li className="nav-item" role="presentation"> <NavLink className="nav-link"  to="/resume">Resume</NavLink></li>
  <li className="nav-item" role="presentation"> <NavLink className="nav-link"  to="/Contact"> Job Offer</NavLink></li>
   
   
   
      
     </ul>
     
     </nav>
     
   
    </div>
   


*/
/*

  <div className="container-fluid" >
    
  
       
    <nav className="topNav  " >
 


 <ul className="nav justify-content-center " >
 


<li className="nav-item" role="presentation"> <NavLink   className="nav-link " to="/home"> <FontAwesomeIcon icon={faHouse} className="homeIcon" /></NavLink>  </li>
<li className="nav-item" role="presentation"> <NavLink className="nav-link"  to="/resume">Resume</NavLink></li>
<li className="nav-item" role="presentation"> <NavLink className="nav-link"  to="/Contact"> Job Offer</NavLink></li>



   
  </ul>
  
  </nav>
  

 </div>


   


*/ 