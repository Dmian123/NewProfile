import React from "react";
import './App.css';
import Footer from "./Footer/Footer";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavLinks from './NavTab/NavTab';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";




function App(){


  return <div>
  <Router>

      
      <div>
       
          <NavLinks/>
           <Routes>
           <Route exact path="*" element={<Home/>}/>
               <Route exact path="/home" element={<Home/>}/>
            
               <Route exact path="/contact" element={<Contact/>}/>

               <Route exact path="/resume" element={<Resume/>}/>

           </Routes>
          
         
      </div>
    
      </Router>
       
       <Footer/>
       </div>
}



export default App;
