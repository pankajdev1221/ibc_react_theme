import React, { useState} from 'react';
import { Link } from 'react-router-dom';


export default function StepFive(){

    const[program, setprogram] = useState('');
    
    return (
      <div className="wrapper fix-form">
        <div className="steps-area steps-area-fixed">
          <div className="image-holder">
            <img
              src="https://jthemes.net/themes/html/neonwizard-react/v1/assets/img/side-img.jpg"
              alt=""
            />
          </div>
          <div className="steps clearfix">
            <ul className="tablist multisteps-form__progress">
              <li className="multisteps-form__progress-btn js-active ">
                <span>1</span>
              </li>
              <li className="multisteps-form__progress-btn js-active">
                <span>2</span>
              </li>
              <li className="multisteps-form__progress-btn js-active ">
                <span>3</span>
              </li>
              <li className="multisteps-form__progress-btn js-active ">
                <span>4</span>
              </li>
              <li className="multisteps-form__progress-btn js-active current">
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
          <div
            className="multisteps-form__panel js-active"
            data-animation="slideHorz"
          >
            <div className="wizard-forms">
              <div className="inner  clearfix">
                <div className="form-content pera-content">
                  <div className="step-inner-content">
                    <span className="step-no bottom-line">Step 5</span>
                    <div className="step-progress float-right">
                      <span>5 of 6 completed</span>
                      <div className="step-progress-bar">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: '80%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <h2>Program Selection</h2>
                    <div className="step-box small-box-ui">
                      <p className="mb-4">Choose Program: </p>

                      <div className="row">
                        <div className="col-md-6">
                          <label className="step-box-content sml-height bg-white text-center relative-position active">
                            <span className="step-box-icon">
                              <img
                                src={require('../../assets/img/d1.png')}
                                alt=""
                              />
                            </span>
                            <span className="step-box-text">Hackathon</span>
                            <span className="service-check-option">
                              <span>
                                <input
                                  type="radio"
                                  name="service_name"
                                  defaultValue="hack"
                                  defaultChecked
                                />
                              </span>
                            </span>
                          </label>
                        </div>
                        <div className="col-md-6">
                          <label className="step-box-content sml-height bg-white text-center relative-position">
                            <span className="step-box-icon">
                              <img
                                src={require('../../assets/img/d2.png')}
                                alt=""
                              />
                            </span>
                            <span className="step-box-text">Emerge</span>
                            <span className="service-check-option">
                              <span>
                                <input
                                  type="radio"
                                  name="service_name"
                                  defaultValue="emerge"
                                />
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p> */}
                    <div className="step-content-field">

                                        
                      <div className="plan-area">
                        {/* <div className="plan-icon-text text-center active">
                          <div className="plan-icon">
                            <i className="fas fa-chess-queen"></i>
                          </div>
                          <div className="plan-text">
                            <h3>Unlimited Plan</h3>
                            <p>
                              Tation argumentum et usu, dicit viderer evertitur
                              te has. Eu dictas concludaturque usu, dicit
                              viderer evertitur
                            </p>
                            <input
                              type="radio"
                              name="your_plan"
                              value="Unlimited Plan"
                              defaultChecked
                            />
                          </div>
                        </div> */}
                        {/* <div className="plan-icon-text text-center">
                          <div className="plan-icon">
                            <i className="fas fa-cubes"></i>
                          </div>
                          <div className="plan-text">
                            <h3>Limited Plan</h3>
                            <p>
                              Tation argumentum et usu, dicit viderer evertitur
                              te has. Eu dictas concludaturque usu, dicit
                              viderer evertitur
                            </p>
                            <input
                              type="radio"
                              name="your_plan"
                              value="Unlimited Plan"
                            />
                          </div>
                        </div> */}
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="actions">
                <ul>
                  <li>
                    <span className="js-btn-prev" title="BACK">
                      <Link to="/step4">
                        <i className="fa fa-arrow-left"></i> BACK{' '}
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="js-btn-next" title="NEXT">
                      <Link to="/step6">
                        NEXT <i className="fa fa-arrow-right"></i>
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  
}

