import React  from "react";
import {useState} from 'react'
export default function EmergeStep6(){
    const[showOther , setShowOther] = useState(false)   
    const[showDomainOther , setShowDomainOther] = useState(false)
    const[showMotivationOther , setShowMotivationOther] = useState(false)

    return (
        <>
        <div className="form-inner-area">
            <p>Name of startup</p>
            <input type="text" name="college_name" className="form-control" placeholder="Name of your Startup/ Startup Idea" />
        </div>
        <div className="form-inner-area">
            <p className="mb-4">Startup  Website </p>
            <input type="text" name="website" className="form-control" placeholder="Startup Website " />
        </div>  
        <div className="form-inner-area">
            <p>Company Email</p>
            <input type="email" name="email" value="1234@gmail.com" className="form-control required" placeholder="Email Address *"  />
        </div>

        <div className="language-select">
            <p>Domain  : </p>
            <select name="domain" onChange={(e) => e.target.value !== 'others' ? setShowDomainOther(false) : setShowDomainOther(true)}>
                <option value="" disabled="disabled" defaultValue>Select</option>
                <option value="Developer">Agriculture</option>
                <option value="Functionalconsultant">Education</option>
                <option value="Functionalconsultant">Health</option>
                <option value="Functionalconsultant">Fintech</option>
                <option value="Functionalconsultant">IT services</option>
                <option value="Functionalconsultant">Goverment Other technologies</option>
                <option value="others">Others</option>
            </select>

        </div>
        {showDomainOther ?  (
            <div className="form-inner-area">
            <p className="mb-2">
                    <small>Mention your  Domain if you chose "other" in the above question</small>
                </p>
                <input type="text" name="othersInput" className="form-control" placeholder="Mention Others" />
            </div>
        ) : null}

        <div className="language-select">
            <p>How did you hear about IBC EMERGE Startup Pitch Competition?   : </p>
            <select name="qualification" onChange={(e) => e.target.value !== 'others' ? setShowOther(false) : setShowOther(true)}>
                 <option value="" disabled="disabled" defaultValue>Select</option>
                <option value="email">Email</option>
                <option value="website">Website</option>
                <option value="friend">Friend</option>
                <option value="social">Social Media</option>
                <option value="others">Others</option>
            </select>

        </div>
        {showOther ?  (
            <div className="form-inner-area">
            <p className="mb-2">
                    <small>Mention your Hearing if you chose "other" in the above question</small>
                </p>
                <input type="text" name="othersInput" className="form-control" placeholder="Mention Others" />
            </div>
        ) : null}

        <div className="language-select">
            <p>What is your primary motivation to participate in IBC EMERGE Startup Pitch - Competition? : </p>
            <select name="qualification" onChange={(e) => e.target.value !== 'others' ? setShowMotivationOther(false) : setShowMotivationOther(true)}>
                 <option value="" disabled="disabled" defaultValue>Select</option>
                <option value="acceleration">acceleration</option>
                <option value="funding">Funding</option>
                <option value="mentorship">Mentorship</option>
                <option value="networking">Networking</option>
                <option value="others">Others</option>
            </select>

        </div>
        {showMotivationOther ?  (
            <div className="form-inner-area">
            <p className="mb-2">
                    <small>Mention your  Primary Motivation if you chose "other" in the above question</small>
                </p>
                <input type="text" name="othersInput" className="form-control" placeholder="Mention Others" />
            </div>
        ) : null}

        <div className="services-select-option">
            <p>Did you participate in a Startup Pitch Competition before?</p>
            <ul className="">
                <li className="bg-white"><label>Yes <input type="radio" name="bfore" value="yes"  /></label></li>
                <li className="bg-white"><label>No <input type="radio" name="bfore" value="no" /></label></li>
            </ul>
        </div>
    
        </>
    )
}