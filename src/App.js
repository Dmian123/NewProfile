import React from "react";
import './App.css';

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import {Helmet} from "react-helmet";

import NavTab from './NavTab/NavTab';

function App(){




  return <div>
      <Helmet>
       <meta charSet="utf-8" />
                <title>DM Profile</title>
                <link rel="canonical" href="https://dmian123.github.io/Profile/" />

                <meta name="description" content="My profile" />
        </Helmet>


       
       
    <Router>
    
       
    <NavTab/>
      <div>
     

          
      <Routes>

           <Route exact path="*" element={<Home/>}/>
               <Route exact path="/home" element={<Home/>}/>
            
               <Route exact path="/contact" element={<Contact/>}/>

               <Route exact path="/resume" element={<Resume/>}/>

           </Routes> 
         
      </div>
    
      </Router>
       
       
       </div>
}



export default App;
