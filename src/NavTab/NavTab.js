import React from "react";
import {NavLink}from "react-router-dom";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import {faHouse} from'@fortawesome/free-solid-svg-icons';
import {faHandHoldingDollar} from'@fortawesome/free-solid-svg-icons';
import {faAddressCard} from'@fortawesome/free-solid-svg-icons';



function NavTab() {
 
  
    return<div>
    <div className="container-fluid" >
    
   
    <nav className="topNav  " >
    
  



   <ul className="nav  " >
   
   <div className="navbar-brand-nav-item " > <p className="  ImageHead " >DM</p></div>
    
  <li className="nav-item" role="presentation"> <NavLink   className="nav-link " to="/home"> <FontAwesomeIcon icon={faHouse} className="homeIcon" /></NavLink>  </li>
  <li className="nav-item" role="presentation"> <NavLink className="nav-link"  to="/Contact"><FontAwesomeIcon icon={faHandHoldingDollar} className="offerIcon" /></NavLink></li>
  <li className="nav-item" role="presentation"> <NavLink className="nav-link"  to="/resume"><FontAwesomeIcon icon={faAddressCard} className="offerIcon" /></NavLink></li>
   
  
  
     
    </ul>
    
    </nav>
    </div>
   
  </div>
}
  
export default NavTab;

