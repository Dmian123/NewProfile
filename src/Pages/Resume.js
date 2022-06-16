import React from 'react'
import resume from "../Resume/ResumeUpdate.pdf"


function Resume(){




return <div className="resume"> 

      <p className ="resumeInfo">Thank you for your visit, if you would like to obtain more information click on my 
       <a href={resume} alt=" " > <span>Resume</span> </a>
    
       </p>
</div>

}

export default Resume ;