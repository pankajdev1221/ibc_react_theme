import React  from "react";
import {useState} from 'react'
export default function Developer(){
    const[showRoleOther , setShowRoleOther] = useState(false)

    return (
        <>
            <div className="form-inner-area">
                <p className="mb-4">Name of your Organization (Optional)</p>
                <input type="text" name="college_name" className="form-control" placeholder="Name of your college/institution" />
            </div>
            <div className="language-select">
                <p>Role you are playing  : </p>
                <select name="qualification" onChange={(e) => e.target.value !== 'others' ? setShowRoleOther(false) : setShowRoleOther(true)}>
                    <option value="" disabled="disabled" defaultValue>Select</option>
                    <option value="Developer">Developer</option>
                    <option value="Functionalconsultant">Functional Consultant</option>
                    <option value="others">Others</option>
                </select>

            </div>
            {showRoleOther ?  (
                <div className="form-inner-area">
                <p className="mb-2">
                        <small>Mention your  Role if you chose "other" in the above question</small>
                    </p>
                    <input type="text" name="othersInput" className="form-control" placeholder="Mention Others" />
                </div>
            ) : null}



            <div className="form-inner-area">
            <p className="mb-4"> Domain</p>
                <input type="text" name="domain" className="form-control" placeholder="Domain" />
            </div>
            <div className="form-inner-area">
            <p className="mb-4"> Technologies</p>
                <input type="text" name="technology" className="form-control" placeholder="Technologies" />
            </div>
            <div className="form-inner-area">
            <p className="mb-4"> Total years of experience</p>
                <input type="number" name="experience" className="form-control" placeholder="Total years of experience " />
            </div>

       
        
        </>
    )
}