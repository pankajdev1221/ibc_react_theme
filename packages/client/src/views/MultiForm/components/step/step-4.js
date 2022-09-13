import React from 'react';
import { Link } from 'react-router-dom';

class StepFour extends React.Component {
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
              <li className="multisteps-form__progress-btn js-active">
                <span>2</span>
              </li>
              <li className="multisteps-form__progress-btn js-active ">
                <span>3</span>
              </li>
              <li className="multisteps-form__progress-btn js-active current">
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
          <div
            className="multisteps-form__panel js-active"
            data-animation="slideHorz"
          >
            <div className="wizard-forms">
              <div className="inner  clearfix">
                <div className="form-content pera-content">
                  <div className="step-inner-content">
                    <span className="step-no bottom-line">Step 4</span>
                    <div className="step-progress float-right">
                      <span>4 of 6 completed</span>
                      <div className="step-progress-bar">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: '64%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <h2>Team Formation</h2>
                    {/* <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p> */}
                    <div className="step-content-area">
                      <div className="form-inner-area">
                        <p className="mb-4">Team Name (Optional)</p>
                        <input
                          type="text"
                          name="team"
                          className="form-control"
                          placeholder="Team Name"
                        />
                      </div>
                      <div className="form-inner-area">
                        <p className="mb-4">Invite Member</p>
                        <div>
                          <input
                            type="email"
                            name="teaminvite"
                            className="form-control"
                            placeholder="Email"
                          />
                          <button type="button" className="btn btn-primary">
                            Invite
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="actions">
                <ul>
                  <li>
                    <span className="js-btn-prev" title="BACK">
                      <Link to="/step3">
                        <i className="fa fa-arrow-left"></i> BACK{' '}
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className="js-btn-next" title="NEXT">
                      <Link to="/step5">
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
}

export default StepFour;
