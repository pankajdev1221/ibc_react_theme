import React from "react";

class StepSix extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Step 6</span>
                                <div className="step-progress float-right">
                                    <span>3 of 6 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Skills Page</h2>
                                {/* <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p> */}
                                <div className="services-select-option">
                                    <p>Choose Track </p>
                                    <ul className="grid-4-code">
                                        <li className=" bg-white"><label>Polkadot <input type="radio" name="web_service" value="Web Design"/></label></li>
                                        <li className=" bg-white"><label>Robonomics<input type="radio" name="web_service" value="Web Development" /></label></li>
                                        <li className=" bg-white"><label>Chingari <input type="radio" name="web_service" value="Graphics Design" /></label></li>
                                        <li className=" bg-white"><label>IBC Open Innovation <input type="radio" name="web_service" value="SEO" /></label></li>
                                    </ul>
                                </div>

                                <div className="comment-box">
                                    <p>Theme/Refernce Problem</p>
                                     <select name="country">
                                        <option>Problem 1</option>
                                        <option>Problem 2</option>
                                    </select>
                                </div>  


                                <div className="comment-box">
                                    <p>Problem Statement </p>
                                    <textarea name="proeblem-statement" placeholder="(Describe your problem statement in about 100 words if you are not choosing an existing problem statement)"></textarea>
                                </div>
                                <div className="comment-box">
                                    <p>Brief Solution Approach</p>
                                    <textarea name="proeblem-statement" placeholder="(Write about your solution in about 100 words)"></textarea>
                                </div>

                                <div className="upload-documents">
                                    <h3>Idea Deck:</h3>
                                    <div className="upload-araa bg-white">
                                        <input type="hidden" value="" name="fileContent" id="fileContent" />
                                        <input type="hidden" value="" name="filename" id="filename" />
                                            <div className="upload-icon float-left">
                                                <i className="fas fa-cloud-upload-alt"></i>
                                            </div>
                                            <div className="upload-text">
                                                <span>( File accepted: pdf. doc/ docx -
                                                Max file size : 5 Mb for demo limit )</span>
                                            </div>
                                            <div className="upload-option text-center">
                                                <label htmlFor="attach">Upload The Documents</label>
                                                <input id="attach" style={{display : 'none'}} type="file" />
                                            </div>
                                    </div>
                                </div>    

                                    
                                {/* <div className="language-select">
                                    <p>I want to browse projects in the following languages: </p>
                                    <select name="languages">
                                        <option>English</option>
                                        <option>Arabic</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                    </select>
                                </div>
                                <div className="comment-box">
                                    <p><i className="fas fa-comments"></i> Write Somthing note</p>
                                    <textarea name="full_comments" placeholder="Write here"></textarea>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <ul>
                            <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> BACK </span></li>
                            <li><button type="submit" title="NEXT">SUBMIT <i className="fa fa-arrow-right"></i></button></li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepSix;