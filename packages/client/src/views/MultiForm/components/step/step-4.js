import React from "react";

class StepFour extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Step 4</span>
                                <div className="step-progress float-right">
                                    <span>4 of 5 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{width:'70%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Team Formation</h2>
                                {/* <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p> */}
                                <div className="step-content-area">
                                    <div className="form-inner-area">
                                        <p className="mb-4">Team Name (Optional)</p>
                                        <input type="text" name="team" className="form-control" placeholder="Team Name" />
                                    </div>
                                    <div className="form-inner-area">
                                        <p className="mb-4">Invite Member</p>
                                        <div>

                                            <input type="email" name="teaminvite" className="form-control" placeholder="Email" />
                                           <button type="button"  class="btn btn-primary">Invite</button>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <ul>
                            <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> BACK </span></li>
                            <li><span className="js-btn-next" title="NEXT">NEXT <i className="fa fa-arrow-right"></i></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepFour;