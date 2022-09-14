import React  from "react";
import {useState} from 'react'
export default function PitchDeck(){
    const[showOther , setShowOther] = useState(false)   
    const[showDomainOther , setShowDomainOther] = useState(false)
    const[showMotivationOther , setShowMotivationOther] = useState(false)
    const[showStageOther , setShowStageOther] = useState(false)

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
            <input type="email" name="email" defaultValue="1234@gmail.com" className="form-control required" placeholder="Email Address *"  />
        </div>

        <div className="language-select">
            <p>Domain  : </p>
            <select name="domain" onChange={(e) => e.target.value !== 'others' ? setShowDomainOther(false) : setShowDomainOther(true)}>
                <option defaultValue="" disabled="disabled" selected="selected">Select</option>
                <option defaultValue="Developer">Agriculture</option>
                <option defaultValue="Functionalconsultant">Education</option>
                <option defaultValue="Functionalconsultant">Health</option>
                <option defaultValue="Functionalconsultant">Fintech</option>
                <option defaultValue="Functionalconsultant">IT services</option>
                <option defaultValue="Functionalconsultant">Goverment Other technologies</option>
                <option defaultValue="others">Others</option>
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
                 <option defaultValue="" disabled="disabled" selected="selected">Select</option>
                <option defaultValue="email">Email</option>
                <option defaultValue="website">Website</option>
                <option defaultValue="friend">Friend</option>
                <option defaultValue="social">Social Media</option>
                <option defaultValue="others">Others</option>
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
                 <option defaultValue="" disabled="disabled" selected="selected">Select</option>
                <option defaultValue="acceleration">acceleration</option>
                <option defaultValue="funding">Funding</option>
                <option defaultValue="mentorship">Mentorship</option>
                <option defaultValue="networking">Networking</option>
                <option defaultValue="others">Others</option>
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
            <p>How would you categorize your solution?</p>
            <ul className="">
                <li className="bg-white"><label>Web2.0 to Web 3.0 migration use cases <input type="radio" name="bfore" defaultValue="web2toweb3"  /></label></li>
                <li className="bg-white"><label>Native Web3.0 use cases <input type="radio" name="bfore" defaultValue="web3" /></label></li>
            </ul>
        </div>
            <div className="language-select">
            <p>Current Stage of Your Startup  : </p>
            <select name="domain" onChange={(e) => e.target.value !== 'others' ? setShowStageOther(false) : setShowStageOther(true)}>
                <option defaultValue="" disabled="disabled" selected="selected">Select</option>
                <option defaultValue="Developer">Idea Stage</option>
                <option defaultValue="mvpstage">MVP Stage </option>
                <option defaultValue="mvpdeployed">SMVP Deployed with Beta Customers</option>
                <option defaultValue="revenueStage">Revenue Stage</option>
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

        <div className="comment-box">
            <p>Startup Solution (Summarize the problem which your startup is solving (in 100 words)</p>
            <textarea name="proeblem-statement" placeholder="Startup Solution (Summarize the problem which your startup is solving (in 100 words)"></textarea>
        </div>

        <div className="upload-documents">
            <h3>Pitchdeck Submission:</h3>
            <div className="upload-araa bg-white">
                <input type="hidden" defaultValue="" name="fileContent" id="fileContent" />
                <input type="hidden" defaultValue="" name="filename" id="filename" />
                    <div className="upload-icon float-left">
                        <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div className="upload-text">
                        <span>( -
                        Max file size : 10 Mb  )</span>
                    </div>
                    <div className="upload-option text-center">
                        <label htmlFor="attach">Upload The Documents</label>
                        <input id="attach" style={{display : 'none'}} type="file" />
                    </div>
            </div>
        </div>    
        </>
    )
}