import React from "react";
// import './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/bootstrap-datepicker.css';
import '../../assets/css/fontawesome-all.css';
import '../../assets/css/animate.min.css';
//main css
import '../../assets/scss/style.scss';

import 'bootstrap';

// import '../../assets/js/bootstrap-datepicker.min.js';
import '../../assets/js/jquery.validate.min.js';
import '../../assets/js/main.js';

import { Link } from "react-router-dom";
class StepOne extends React.Component {
    render() {
        return (
        <div className="wrapper fix-form">
            <div className="steps-area steps-area-fixed">
            <div className="image-holder">
                <img src="https://jthemes.net/themes/html/neonwizard-react/v1/assets/img/side-img.jpg" alt="" />
            </div>
            <div className="steps clearfix">
                <ul className="tablist multisteps-form__progress">
                <li className="multisteps-form__progress-btn js-active current">
                    <span>1</span>
                </li>
                <li className="multisteps-form__progress-btn">
                    <span>2</span>
                </li>
                <li className="multisteps-form__progress-btn">
                    <span>3</span>
                </li>
                <li className="multisteps-form__progress-btn">
                    <span>4</span>
                </li>
                <li className="multisteps-form__progress-btn ">
                    <span>5</span>
                </li>
                <li className="multisteps-form__progress-btn last">
                    <span>6</span>
                </li>
                </ul>
            </div>
            </div>
            <form
            className="multisteps-form__form"
            action="#"
            id="wizard"
            method="POST"
            >
            <div className="form-area position-relative">
                <div className="multisteps-form__panel js-active" data-animation="slideHorz" >
                    {/* div 1 */}
                    <div className="wizard-forms">
                        <div className="inner pb-5 clearfix">
                            <div className="form-content pera-content">
                                <div className="step-inner-content">
                                    <span className="step-no">Step 1</span>
                                    <h2>Personal details</h2>
                                    <p className="mb-0">
                                        Tell us something about yourself
                                    </p>

                                    <div className="form-inner-area">
                                        <input type="text" name="full_name" defaultValue="pankaj mmsnj" className="form-control required" minLength="2" placeholder="First and last name *"  />
                                        <input type="email" name="email" defaultValue="1234@gmail.com" className="form-control required" placeholder="Email Address *"  />
                                        <input type="text" name="phone" placeholder="Phone" />
                                    </div>
                                    <div className="language-select">
                                        <p>Role: </p>
                                        <select name="role">
                                            <option>Admin</option>
                                            <option>Student</option>
                                            <option>Developer</option>
                                            <option>Entrepreneur</option>
                                            <option>Mentors </option>
                                            <option>Jurors</option>
                                        </select>
                                    </div>
                                    <div className="language-select">
                                        <p className="mt-4">Country: </p>
                                        <select name="country">
                                            <option>India</option>
                                            <option>United States </option>
                                            <option>Brazil</option>
                                            <option>Canada</option>
                                            <option>Russia </option>
                                            <option>United Kingdom</option>
                                        </select>
                                    </div>
                                    {/* <div className="language-select">
                                        <p>State: </p>
                                        <select name="country">
                                            <option>Hyderabad</option>
                                            <option>United States </option>
                                            <option>Brazil</option>
                                            <option>Canada</option>
                                            <option>Russia </option>
                                            <option>United Kingdom</option>
                                        </select>
                                    </div> */}
                                    <div className="language-select">
                                        <p className="mt-4">City: </p>
                                        <select name="country">
                                            <option>India</option>
                                            <option>United States </option>
                                            <option>Brazil</option>
                                            <option>Canada</option>
                                            <option>Russia </option>
                                            <option>United Kingdom</option>
                                        </select>
                                    </div>
                                    <div className="form-inner-area">
                                        <p className="mb-4">Social Links: </p>
                                        
                                        <div className="grid-4">
                                            <input type="text" name="linkedin" placeholder="Linkedin (optional)" />
                                            <input type="text" name="github" placeholder="Github (optional)" />
                                            <input type="text" name="discord" placeholder="Discord (optional)" />
                                            <input type="text" name="telegram" placeholder="Telegram (optional)" />
                                        </div>
                                    </div>

                                    <div className="step-box small-box-ui">
                                        <p className="mb-4">You are a: </p>

                                
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label className="step-box-content sml-height bg-white text-center relative-position active">
                                                    {/* <span className="step-box-icon">
                                                        <img src={require("../../assets/img/d1.png")} alt="" />
                                                    </span> */}
                                                    <span className="step-box-text">Corporate Professional</span>
                                                    <span className="service-check-option">
                                                        <span>
                                                            <input
                                                                type="radio"
                                                                name="service_name"
                                                                defaultValue="Corporate Services"
                                                                defaultChecked
                                                            />
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="step-box-content sml-height bg-white text-center relative-position">
                                                    {/* <span className="step-box-icon">
                                                        <img src={require("../../assets/img/d2.png")} alt="" />
                                                    </span> */}
                                                    <span className="step-box-text">Freelancer</span>
                                                    <span className="service-check-option">
                                                        <span>
                                                            <input
                                                                type="radio"
                                                                name="service_name"
                                                                defaultValue="Freelancing Services"
                                                            />
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="step-box-content sml-height bg-white text-center relative-position">
                                                    {/* <span className="step-box-icon">
                                                        <img src={require("../../assets/img/d3.png")} alt="" />
                                                    </span> */}
                                                    <span className="step-box-text">Investor</span>
                                                    <span className="service-check-option">
                                                        <span>
                                                            <input
                                                                type="radio"
                                                                name="service_name"
                                                                defaultValue="Investor Services"
                                                            />
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="step-box-content sml-height bg-white text-center relative-position">
                                                    {/* <span className="step-box-icon">
                                                        <img src={require("../../assets/img/d3.png")} alt="" />
                                                    </span> */}
                                                    <span className="step-box-text">Mentor</span>
                                                    <span className="service-check-option">
                                                        <span>
                                                            <input
                                                                type="radio"
                                                                name="service_name"
                                                                defaultValue="Mentor Services"
                                                            />
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="step-box-content sml-height bg-white text-center relative-position">
                                                    {/* <span className="step-box-icon">
                                                        <img src={require("../../assets/img/d3.png")} alt="" />
                                                    </span> */}
                                                    <span className="step-box-text">Startup SME</span>
                                                    <span className="service-check-option">
                                                        <span>
                                                            <input
                                                                type="radio"
                                                                name="service_name"
                                                                defaultValue="Startup Services"
                                                            />
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="step-box-content sml-height bg-white text-center relative-position">
                                                    {/* <span className="step-box-icon">
                                                        <img src={require("../../assets/img/d3.png")} alt="" />
                                                    </span> */}
                                                    <span className="step-box-text">Others</span>
                                                    <span className="service-check-option">
                                                        <span>
                                                            <input
                                                                type="radio"
                                                                name="service_name"
                                                                defaultValue="Other Services"
                                                            />
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.inner */}
                        <div className="actions">
                            <ul>
                                <li className="disable" aria-disabled="true">
                                    <span className="js-btn-next" title="NEXT">
                                        Backward <i className="fa fa-arrow-right" />
                                    </span>
                                </li>
                                <li>
                                    <span className="js-btn-next" title="NEXT">
                                                <Link to="/step2">
                                                    NEXT <i className="fa fa-arrow-right" />
                                        </Link>
                                        
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </form>
      </div>

            
        );
    }
}

export default StepOne;