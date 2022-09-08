import React  from "react";
import {useState} from 'react'
export default function StartupFinancial(){
    const[showStageOther , setShowStageOther] = useState(false)

    return (
        <>
       
        <div className="language-select">
            <p>Startup Stage  : </p>
            <select name="domain" onChange={(e) => e.target.value !== 'others' ? setShowStageOther(false) : setShowStageOther(true)}>
                <option value="" disabled="disabled" selected="selected">Select</option>
                <option value="Developer">Idea Stage</option>
                <option value="Functionalconsultant">Seed Stage </option>
                <option value="Functionalconsultant">Series-A</option>
                <option value="Functionalconsultant">Series-B</option>
                <option value="others">Others</option>
            </select>

        </div>
        {showStageOther ?  (
            <div className="form-inner-area">
            <p className="mb-2">
                    <small>Mention your Stage if you chose "other" in the above question</small>
                </p>
                <input type="text" name="othersInput" className="form-control" placeholder="Mention Others" />
            </div>
        ) : null}
        <div className="form-inner-area">
            <p className="mb-4">Current Annual Revenue </p>
            <input type="number" name="revenue" className="form-control" placeholder=" (Mention the current annual revenue of your startup in USD) " />
        </div>  

        <div className="services-select-option">
            <p>Have you raised any funding before?</p>
            <ul className="">
                <li className="bg-white"><label>Yes <input type="radio" name="bfore" value="yes"  /></label></li>
                <li className="bg-white"><label>No <input type="radio" name="bfore" value="no" /></label></li>
            </ul>
        </div>

         <div className="form-inner-area">
            <p className="mb-4">If yes, please mention how much funding you have raised (in USD)? </p>
            <input type="number" name="funding" className="form-control" placeholder=" (Mention the raised funding of your startup in USD) " />
        </div>  


    
        </>
    )
}