import React from 'react';
import { Link } from 'react-router-dom';

class StepThree extends React.Component {
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
              <li className="multisteps-form__progress-btn js-active current">
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
          <div
            className="multisteps-form__panel js-active"
            data-animation="slideHorz"
          >
            <div className="wizard-forms">
              <div className="inner pb-100 clearfix">
                <div className="form-content pera-content">
                  <div className="step-inner-content">
                    <span className="step-no bottom-line">Step 3</span>
                    <div className="step-progress float-right">
                      <span>3 of 6 completed</span>
                      <div className="step-progress-bar">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: '48%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <h2>Skills Page</h2>
                    {/* <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p> */}
                    <div className="services-select-option">
                      <p>What is your coding skill level?</p>
                      <ul className="grid-4-code">
                        <li className=" bg-white active">
                          <label>
                            Can’t code{' '}
                            <input
                              type="radio"
                              name="web_service"
                              defaultValue="Web Design"
                              defaultChecked
                            />
                          </label>
                        </li>
                        <li className=" bg-white">
                          <label>
                            Can code a bit
                            <input
                              type="radio"
                              name="web_service"
                              defaultValue="Web Development"
                            />
                          </label>
                        </li>
                        <li className=" bg-white">
                          <label>
                            Can code fairly well{' '}
                            <input
                              type="radio"
                              name="web_service"
                              defaultValue="Graphics Design"
                            />
                          </label>
                        </li>
                        <li className=" bg-white">
                          <label>
                            Can code very well{' '}
                            <input
                              type="radio"
                              name="web_service"
                              defaultValue="SEO"
                            />
                          </label>
                        </li>
                      </ul>
                    </div>

                    <div className="budget-area">
                      <p>What is your specialty/skillset?</p>
                      <div className="opti-list">
                        <ul className="d-md-flex">
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti1"
                              defaultValue="Semantic coding"
                            />
                            Full Stack
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti2"
                              defaultValue="Mobile APP"
                            />
                            Blockchain
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti3"
                              defaultValue="Mobile Design"
                            />
                            Front-end
                          </li>
                        </ul>
                        <ul className="d-md-flex">
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti4"
                              defaultValue="Semantic coding"
                            />
                            Back-end
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti5"
                              defaultValue="Mobile APP"
                            />
                            Game
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti6"
                              defaultValue="Mobile Design"
                            />
                            UI/UX
                          </li>
                        </ul>
                        <ul className="d-md-flex">
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti10"
                              defaultValue="Semantic coding"
                            />
                            Graphic Design
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti11"
                              defaultValue="Mobile APP"
                            />
                            Web
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti12"
                              defaultValue="Mobile Design"
                            />
                            System
                          </li>
                        </ul>
                        <ul className="d-md-flex">
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti13"
                              defaultValue="Semantic coding"
                            />
                            Deveops
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti14"
                              defaultValue="Mobile APP"
                            />
                            Data Science
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti14"
                              defaultValue="Mobile Design"
                            />
                            Mobile
                          </li>
                        </ul>
                        <ul className="d-md-flex">
                          <li className="bg-white ">
                            <input
                              type="checkbox"
                              name="code_opti15"
                              defaultValue="Semantic coding"
                            />
                            Security
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti16"
                              defaultValue="Mobile APP"
                            />
                            Product Manager
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="code_opti17"
                              defaultValue="Mobile Design"
                            />
                            Project Manager
                          </li>
                        </ul>

                        <ul className="d-md-flex">
                          <li className="bg-white ">
                            <input
                              type="checkbox"
                              name="code_opti18"
                              defaultValue="Semantic coding"
                            />
                            Others
                          </li>
                          {/* <li className="bg-white"><input type="checkbox" name="code_opti19" defaultValue="Mobile APP" />Product Manager</li>
                                                <li className="bg-white"><input type="checkbox" name="code_opti20" defaultValue="Mobile Design" />Project Manager</li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="budget-area">
                      <p>What languages, frameworks are you familiar with?</p>
                      <div className="opti-list">
                        <ul className="d-md-flex">
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="Solidity"
                              defaultValue="Semantic coding"
                            />
                            Solidity
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="Rust"
                              defaultValue="Mobile APP"
                            />
                            Rust
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="Cplus"
                              defaultValue="Mobile Design"
                            />
                            C++
                          </li>
                        </ul>
                        <ul className="d-md-flex">
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="c"
                              defaultValue="Semantic coding"
                            />
                            C
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="js"
                              defaultValue="Mobile APP"
                            />
                            JavsScript
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="ts"
                              defaultValue="Mobile Design"
                            />
                            TypeScript
                          </li>
                        </ul>
                        <ul className="d-md-flex">
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="python"
                              defaultValue="Semantic coding"
                            />
                            Python
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="nodejs"
                              defaultValue="Mobile APP"
                            />
                            Node js
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="csharp"
                              defaultValue="Mobile Design"
                            />
                            C#
                          </li>
                        </ul>
                        <ul className="d-md-flex">
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="sql"
                              defaultValue="Semantic coding"
                            />
                            SQL
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="assembly"
                              defaultValue="Mobile APP"
                            />
                            Assembly Language
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="haskel"
                              defaultValue="Mobile Design"
                            />
                            Haskell
                          </li>
                        </ul>
                        <ul className="d-md-flex">
                          <li className="bg-white ">
                            <input
                              type="checkbox"
                              name="r"
                              defaultValue="Semantic coding"
                            />
                            R
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="dotnet"
                              defaultValue="Mobile APP"
                            />
                            .NET
                          </li>
                          <li className="bg-white">
                            <input
                              type="checkbox"
                              name="mtlb"
                              defaultValue="Mobile Design"
                            />
                            MATALAB
                          </li>
                        </ul>

                        <ul className="d-md-flex">
                          <li className="bg-white ">
                            <input
                              type="checkbox"
                              name="others"
                              defaultValue="Semantic coding"
                            />
                            Others
                          </li>
                          {/* <li className="bg-white"><input type="checkbox" name="code_opti19" defaultValue="Mobile APP" />Product Manager</li>
                                                <li className="bg-white"><input type="checkbox" name="code_opti20" defaultValue="Mobile Design" />Project Manager</li> */}
                        </ul>
                      </div>
                    </div>

                    <div className="services-select-option">
                      <p>Which of the following best describes you?</p>
                      <ul className="">
                        <li className=" bg-white active">
                          <label>
                            Solo Hacker, who doesnt need a team{' '}
                            <input
                              type="radio"
                              name="web_service"
                              defaultValue="Web Design"
                              defaultChecked
                            />
                          </label>
                        </li>
                        <li className=" bg-white">
                          <label>
                            Solo Hacker looking a team
                            <input
                              type="radio"
                              name="web_service"
                              defaultValue="Web Development"
                            />
                          </label>
                        </li>
                        <li className=" bg-white">
                          <label>
                            Hacker with a team{' '}
                            <input
                              type="radio"
                              name="web_service"
                              defaultValue="Graphics Design"
                            />
                          </label>
                        </li>
                        <li className=" bg-white">
                          <label>
                            Hacker with a team recuiting more members{' '}
                            <input
                              type="radio"
                              name="web_service"
                              defaultValue="SEO"
                            />
                          </label>
                        </li>
                      </ul>
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
                  <li>
                                    <span className="js-btn-prev" title="BACK">
                                        <Link to="/step2">

                      <i className="fa fa-arrow-left"></i> BACK{' '}    
                                        </Link>
                    </span>
                  </li>
                  <li>
                                    <span className="js-btn-next" title="NEXT">
                                        <Link to="step4">

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

export default StepThree;
