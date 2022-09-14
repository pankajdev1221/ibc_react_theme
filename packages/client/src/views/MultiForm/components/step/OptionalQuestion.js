export default function OptionalQuestion() {
    const[showRoleOther , setShowRoleOther] = useState(false)
    
    return (
        <>
            <div className="form-inner-area">
                <p>How did you hear about this hackathon?</p>
                <input type="text" name="how"  className="form-control" placeholder="How did you hear about this hackathon?"  />
                
            </div>
            <div className="comment-box">
                <p>Do you have experience in other hackathons? If so, which ones and what did you build? </p>
                <textarea name="proeblem-statement" placeholder="(Write about your experice)"></textarea>
            </div>
             <div className="form-inner-area">
                <p>What is your primary motivation to participate in this Hackathon?</p>
                <input type="text" name="priamrymotivation"  className="form-control" placeholder="What is your primary motivation to participate in this Hackathon?"  />
                
            </div>
        
            <div className="language-select">
                <p>Are you open to being contacted for  : </p>
                <select name="qualification" onChange={(e) => e.target.value !== 'others' ? setShowRoleOther(false) : setShowRoleOther(true)}>
                    <option value="" disabled="disabled" defaultValue>Select</option>
                    <option value="empoiyee">Employment opportunities ?</option>
                    <option value="joinstartup">Joining a startup team ?</option>
                    <option value="codingbootcamp">Participating in Coding bootcamp ?  </option>
                    <option value="otherhack">Participating in other hackathons ?</option>
                    <option value="others">Others</option>
                </select>

            </div>
            {showRoleOther ?  (
                <div className="form-inner-area">
                <p className="mb-2">
                        <small>Mention your  open role if you chose "other" in the above question</small>
                    </p>
                    <input type="text" name="othersInput" className="form-control" placeholder="Mention Others" />
                </div>
            ) : null}
        </>
    )
}