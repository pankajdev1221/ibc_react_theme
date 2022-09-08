import React  from "react";
import {useState} from 'react'
export default function Entrepreneur(){
    const[showRoleOther , setShowRoleOther] = useState(false)
    const[showTechOther , setShowTechOther] = useState(false)

    return (
        <>
            <div className="form-inner-area">
                <p className="mb-4">Name of your Startup (Optional)</p>
                <input type="text" name="college_name" className="form-control" placeholder="Name of your Startup" />
            </div>

            <div className="form-inner-area">
            <p className="mb-4"> Incorporation Year (Optional)</p>
                <input type="number" name="experience" className="form-control" placeholder="Year of incorpation " />
            </div>
            <div className="form-inner-area">
            <p className="mb-4">  Website (Optional)</p>
                <input type="text" name="experience" className="form-control" placeholder="Website " />
            </div>

            
            <div className="language-select">
                <p>Domain  : </p>
                <select name="domain" onChange={(e) => e.target.value !== 'others' ? setShowRoleOther(false) : setShowRoleOther(true)}>
                    <option value="" disabled="disabled" selected="selected">Select</option>
                    <option value="Developer">Agriculture</option>
                    <option value="Functionalconsultant">Education</option>
                    <option value="Functionalconsultant">Health</option>
                    <option value="Functionalconsultant">Fintech</option>
                    <option value="Functionalconsultant">IT services</option>
                    <option value="Functionalconsultant">Goverment Other technologies</option>
                    <option value="others">Others</option>
                </select>

            </div>
            {showRoleOther ?  (
                <div className="form-inner-area">
                <p className="mb-2">
                        <small>Mention your  Dommain if you chose "other" in the above question</small>
                    </p>
                    <input type="text" name="othersInput" className="form-control" placeholder="Mention Others" />
                </div>
            ) : null}

        
        <div className="language-select">
                <p>Technology  : </p>
                <select name="tech" onChange={(e) => e.target.value !== 'others' ? setShowTechOther(false) : setShowTechOther(true)}>
                    <option value="" disabled="disabled" selected="selected">Select</option>
                    <option value="Developer">Blockchain</option>
                    <option value="Functionalconsultant">AI/ML</option>
                    <option value="Functionalconsultant">IoT</option>
                    <option value="others">Others</option>
                </select>

            </div>

                 {showTechOther ?  (
                <div className="form-inner-area">
                <p className="mb-2">
                        <small>Mention your  Technology if you chose "other" in the above question</small>
                    </p>
                    <input type="text" name="othersInput" className="form-control" placeholder="Mention Others" />
                </div>
            ) : null}
            
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