import React from 'react';
import StudentForm from './StudentForm';
import DeveloperForm from './DeveloperForm';
import EnterpreneurForm from './EntrepreneurForm';
import CollegeAdminForm from './CollegeAdminForm';
import { Link } from 'react-router-dom';
class StepTwo extends React.Component {
  render() {
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
              <li className="multisteps-form__progress-btn js-active current">
                <span>2</span>
              </li>
              <li className="multisteps-form__progress-btn ">
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
            <div
              className="multisteps-form__panel js-active"
              data-animation="slideHorz"
            >
              {/* div 2 */}
              <div className="wizard-forms">
                <div className="inner pb-100 clearfix">
                  <div className="form-content pera-content">
                    <div className="step-inner-content">
                      <span className="step-no bottom-line">Step 2</span>
                      <div className="step-progress float-right">
                        <span>2 of 6 completed</span>
                        <div className="step-progress-bar">
                          <div className="progress">
                            <div className="progress-bar"></div>
                          </div>
                        </div>
                      </div>

                      <h2>Professional Details</h2>
                      {/* <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p> */}
                      <StudentForm />
                      <DeveloperForm />
                      {/* <p>ENter</p> */}
                      <EnterpreneurForm />
                      <CollegeAdminForm />
                      {/* <div className="gender-selection">
                            <h3>Gender:</h3>
                            <label>
                                <input type="radio" name="gender" value="Male" />
                                <span className="checkmark"></span>Male
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Female" />
                                <span className="checkmark"></span>Female
                            </label>
                        </div> */}
                      {/* <div className="upload-documents">
                            <h3>Upload Documents:</h3>
                            <div className="upload-araa bg-white">
                                <input type="hidden" value="" name="fileContent" id="fileContent" />
                                <input type="hidden" value="" name="filename" id="filename" />
                                    <div className="upload-icon float-left">
                                        <i className="fas fa-cloud-upload-alt"></i>
                                    </div>
                                    <div className="upload-text">
                                        <span>( File accepted: pdf. doc/ docx -
                                        Max file size : 150kb for demo limit )</span>
                                    </div>
                                    <div className="upload-option text-center">
                                        <label htmlFor="attach">Upload The Documents</label>
                                        <input id="attach" style={{display : 'none'}} type="file" />
                                    </div>
                            </div>
                        </div> */}
                    </div>
                  </div>
                </div>
                {/*<!-- /.inner -->*/}
                <div className="actions">
                  <ul>
                    <li>
                      <span className="js-btn-prev" title="BACK">
                        <Link to="step1">
                          <i className="fa fa-arrow-left"></i> BACK{' '}
                        </Link>
                      </span>
                    </li>
                    <li>
                      <span className="js-btn-next" title="NEXT">
                        <Link to="/step3">
                          NEXT <i className="fa fa-arrow-right"></i>
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

export default StepTwo;
