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
                 <option value="" disabled="disabled" defaultValue>Select</option>
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
                <option value="" disabled="disabled" defaultValue>Select</option>
                 <option value="ae">Aeronautical Engineering</option>
                 <option value="aue">Automobile Engineering</option>
                 <option value="bio">Biotechnology</option>
                 <option value="cvbl">Civil Engineering</option>
                 <option value="cse">Computer Science and Engineering</option>
                 <option value="eee">Electrical and Electronics Engineering</option>
                 <option value="me">Mechanical Engineering</option>
                 <option value="ec">Electronics &amp; Communication</option>
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
                 <option value="" disabled="disabled" defaultValue>Select</option>
                 <option value="ae">Aeronautical Engineering</option>
                 <option value="ae">Automobile Engineering</option>
                 <option value="bio">Biotechnology</option>
                 <option value="cvl">Civil Engineering</option>
                 <option value="cse">Computer Science and Engineering</option>
                 <option value="eee">Electrical and Electronics Engineering</option>
                 <option value="me">Mechanical Engineering</option>
                 <option value="ec">Electronics &amp; Communication</option>
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