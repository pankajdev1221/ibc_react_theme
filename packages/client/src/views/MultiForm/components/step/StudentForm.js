import React  from "react";
import {useState} from 'react'
export default function Student(){
    const[showOther , setShowOther] = useState(false)
    const[showMajorOther , setShowMajorOther] = useState(false)
    const[showMinorOther , setShowMinorOther] = useState(false)

    return (
        <>
        <div className="form-inner-area">
            <input type="text" name="college_name" className="form-control" placeholder="Name of your college/institution" />
        </div>
        <div className="language-select">
            <p>Academic Qualification   : </p>
            <select name="qualification" onChange={(e) => e.target.value !== 'others' ? setShowOther(false) : setShowOther(true)}>
                 <option value="" disabled="disabled" selected="selected">Select</option>
                <option value="be">BE</option>
                <option value="btech">B.Tech</option>
                <option value="mca">MCA</option>
                <option value="others">Others</option>
            </select>

        </div>
        {showOther ?  (
            <div className="form-inner-area">
            <p className="mb-2">
                    <small>Mention your  Degree if you chose "other" in the above question</small>
                </p>
                <input type="text" name="othersInput" className="form-control" placeholder="Mention Others" />
            </div>
        ) : null}



         <div className="form-inner-area">
         <p className="mb-4">Expected Year of Completion</p>
            <input type="text" name="year_completion" className="form-control" placeholder="Expected Year of Completion" />
        </div>

        <div className="language-select">
            <p>Specialized Major   : </p>
            <select name="qualification" className="mb-4" onChange={(e) => e.target.value !== 'others' ? setShowMajorOther(false) : setShowMajorOther(true)}>
                <option value="" disabled="disabled" selected="selected">Select</option>
                 <option value="62db9966">Aeronautical Engineering</option>
                 <option value="62db996a">Automobile Engineering</option>
                 <option value="62db9976">Biotechnology</option>
                 <option value="62db9980">Civil Engineering</option>
                 <option value="62db998b">Computer Science and Engineering</option>
                 <option value="62db9994">Electrical and Electronics Engineering</option>
                 <option value="62db999d">Mechanical Engineering</option>
                 <option value="62db99a7">Electronics &amp; Communication</option>
                 <option value="others">Other</option>
            </select>

        </div>

        {showMajorOther ?  (
            <div className="form-inner-area">
                <p className="mb-2">
                    <small>Mention your Major Field if you chose "other" in the above question</small>
                </p>
                <input type="text" name="othersInput" className="form-control" placeholder="Mention Others" />
            </div>
        ) : null}
        <div className="language-select">
            <p>Specialized Minor   : </p>
            <select name="qualification" className="mb-4" onChange={(e) => e.target.value !== 'others' ? setShowMinorOther(false) : setShowMinorOther(true)}>
                 <option value="" disabled="disabled" selected="selected">Select</option>
                 <option value="62db9966">Aeronautical Engineering</option>
                 <option value="62db996a">Automobile Engineering</option>
                 <option value="62db9976">Biotechnology</option>
                 <option value="62db9980">Civil Engineering</option>
                 <option value="62db998b">Computer Science and Engineering</option>
                 <option value="62db9994">Electrical and Electronics Engineering</option>
                 <option value="62db999d">Mechanical Engineering</option>
                 <option value="62db99a7">Electronics &amp; Communication</option>
                 <option value="others">Other</option>
            </select>

        </div>
        {showMinorOther ?  (
            <div className="form-inner-area">
            <p className="mb-2">
                    <small>Mention your Minor Field if you chose "other" in the above question</small>
                </p>
                <input type="text" name="othersInput" className="form-control" placeholder="Mention Others" />
            </div>
        ) : null}
        </>
    )
}