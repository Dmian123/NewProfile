
import React from "react"
import Card from "../Pages/Card.js"
import AboutMe from "./AboutMe"
import { Container, Row, Col } from 'react-grid-system';
function Home(){

    return < div> 
 
  <Container>
  <Row>
<Col lg={6}>
  <h1 className="welcome">Welcome </h1>
  <h4 className="description">I'm Damian Martinez  </h4>
  <p className="developer">Fullstack Developer </p>
  </Col>
<Col lg={6}>
 <Card/>
</Col> 
 </Row>
 
 </Container>

  <AboutMe/>


 
   
     <div className="cushion"> 
      
     <div className="welcomeLetter">
 
 This profile was built using the React library ,
will provide you with my proffesional experience as well

as education, skills  and contact information, browse through 
the navigation bar to look at my resume.
      
<div>
<p className="sign">  Thank you for your visit</p>
</div>


</div>

     </div>

  </div>

       
    
      
    
    }

    export default Home;


    