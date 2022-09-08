import React  from "react";
import {useState} from 'react'
export default function CollegeAdmin(){
    const[showRoleOther , setShowRoleOther] = useState(false)
    const[showTechOther , setShowTechOther] = useState(false)

    return (
        <>
            <div className="form-inner-area">
                <p className="mb-4">Name of College </p>
                <input type="text" name="college_name" className="form-control" placeholder="Name of your Startup" />
            </div>

            <div className="form-inner-area">
            <p className="mb-4"> Incorporation Year (Optional)</p>
                <input type="number" name="experience" className="form-control" placeholder="Year of incorpation " />
            </div>
            <div className="form-inner-area">
            <p className="mb-4">  Website </p>
                <input type="text" name="website" className="form-control" placeholder="Website " />
            </div>

     
            <div className="comment-box">
                <p><i className="fas fa-comments"></i> Address</p>
                <textarea name="comments-note" placeholder="Address Here"></textarea>
            </div>

       
        
        </>
    )
}