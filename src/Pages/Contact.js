import React  from "react";
import {useState,useEffect} from 'react';
import emailjs from "emailjs-com";
import Footer from '../Footer/Footer'
function Contact(){


const sendEmail = (e) => {
   e.preventDefault();

   emailjs.sendForm('emailJSGmail', 'template_k89cn58', e.target, 'cBrlg-wCdIoBy2Um_')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });
     e.target.reset();
 };

 //const [showSent,setShowSent]=useState(false);
 //const text="Submit";
 const text=" ";

 const[buttonText,setButtonText]=useState(text);

 useEffect(()=> {
   const timer = setTimeout(()=> {
      setButtonText(text);
   }, 2000);
   return ()=> clearTimeout(timer);
}, [buttonText]);


 

return<div>
 
<div className="formTitle" >

    <h1 className="welcome animate__animated animate__tada animate__repeat__3 "> Job Offer </h1>
    
</div>






<div className="container">

  <form onSubmit={sendEmail}>

    <div className="row g-9 align-items-center">

       <div className="col-md-2"></div>

       <div className="col-md-5">
        <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
        <input className="form-control" id="exampleFormControlFirstName"  name="firstName"  type="text" placeholder="enter your name"></input>
        </div>

    <div className="col-md-5">
        <label htmlFor="exampleFormControlInput2" className="form-label">Last Name</label>
        <input  className="form-control" id="exampleFormControlLastName" name="lastName" type="text" placeholder="enter your lastname"></input>
     </div> 

     <div className="col-md-2"></div>

     <div className="col-md-5">
        <label htmlFor="exampleFormControlInput2" className="form-label">Cellphone #</label>
        <input  className="form-control" id="exampleFormControlcellphone" name="cellphone"  type="telephone-number" placeholder="enter your cellphone number"/>
     </div> 

    
     <div className="col-md-5">  
        <label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
         <input   className="form-control" id="exampleFormControlEmail" name="emailAddress"   type="email" placeholder="enter your email"></input>
     </div>
      
     <div className="col-md-2"></div>   

     <div className="col-md-10">
        <label htmlFor="exampleFormControlInput3" className="form-label">Job Offer</label>
        <textarea  className="form-control" id="exampleFormControljobOffer" name="jobOffer"  type="text" placeholder="job offer description"></textarea>
     </div> 

     <div className="col-md-2"></div>

     <div className="col-md-5">
        <label htmlFor="exampleFormControlInput4" className="form-label">Company </label>
        <input  className="form-control" id="exampleFormControlCompany" name="company"  type="text" placeholder="Enter company name"></input>
     </div> 
      
     <div className="col-md-5">
        <label htmlFor="exampleFormControlInput4" className="form-label">Location </label>
        <input  className="form-control" id="exampleFormControllocation" name="location"  type="text" placeholder="Enter job location"></input>
     </div> 

     <div className="col-md-2"></div>   

     <div className="col-md-10">
        <label htmlFor="exampleFormControlInput4" className="form-label">Salary yearly </label>
        <input  className="form-control" id="exampleFormControlsalary" name="salary" type="salary" placeholder="Salary expected"></input>
     </div> 
      
     <div className="col-md-2"></div>  

     <div className="col-6">
         <button type="submit" className="btn-btn" onClick={() => setButtonText("Your offer has been received, thank you !!")}
  >Submit</button>
         
    </div>
     
    
    <div className="col-6 acknowledge">

  


    {buttonText}
    

   </div>
     </div>
   </form>
   
   </div>

  <Footer/> 
   
</div>






}
export default Contact;

//onClick={()=>setShowSent(!showSent)}
/*
  {
   showSent?<div >
   

        <p> Your offer has been received, thank you !!</p>

    </div>:null
    }*/ 