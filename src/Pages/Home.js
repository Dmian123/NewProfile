
import React from "react"
import Card from "../Pages/Card.js"
import AboutMe from "./AboutMe"
import { Container, Row, Col } from 'react-grid-system';

import  'animate.css'

import Footer from '../Footer/Footer'
function Home(){
  
  




    return < div> 
  
  <Container>
  <Row>
   <Col lg={12}>
   <div > 
    
   <h2 className="welcome animate__animated animate__tada animate__repeat__3 " >
         
         Hi,
          </h2>
    </div>
    
   </Col>
 </Row>
   
  
 

 <Row>
  <Col lg={6}>

   <h4 className="who  " > I'm </h4>
 
  <h4 className="presentationName">Damian Martinez  </h4>
  <p className="developer">Fullstack Developer </p>
  </Col>
<Col lg={6}>

 <Card/>
</Col> 
 </Row>
 

  <AboutMe/>


 <Row>
   <Col>
   <div > 
    
    <p className="sign">  Thank you for your visit !!</p>
    </div>
    
   </Col>
 </Row>
   
 </Container>

 <Footer/>
</div>

   

 

       
    
      
    
    }

    export default Home;

    
