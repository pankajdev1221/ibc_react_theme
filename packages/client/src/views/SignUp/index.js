import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  Select,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faGlobe, faLock } from '@fortawesome/free-solid-svg-icons';

import RegistrationItem from 'src/components/RegistrationItem';
import LoginItem from 'src/components/LoginItem';

const SignUp = () => {
  return (
    <Container className="pt-13">
      <Card className="overflow-hidden">
        <Row>
          {/* <Col md={12} lg={6} className="p-0">
            <LoginItem />
          </Col> */}
          <Col md={12} lg={12} className="p-0">
            <Form
              className="text-center  py-9 px-10 login-form
"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h4 className="pb-5">Sign Up</h4>
              <RegistrationItem
                inputtype="text"
                inputplaceholder="Full Name*"
                icon={faUser}
              />
              <RegistrationItem
                inputtype="email"
                inputplaceholder="Email Address*"
                icon={faEnvelope}
              />
              <RegistrationItem
                inputtype="password"
                inputplaceholder="Password*"
                icon={faLock}
              />
              <RegistrationItem
                inputtype="text"
                inputplaceholder="City/Country*"
                icon={faGlobe}
              />
              {/* <FormGroup className="mb-0">
                <Select
                  className="text-muted form-control"
                  placeholder="Category"
                  options={[
                    {
                      value: 'Freelancer',
                      label: 'freelancer',
                    },
                    {
                      value: 'corporateProfessional',
                      label: 'Corporate Professional',
                    },
                    {
                      value: 'investor',
                      label: 'Investor',
                    },
                    {
                      value: 'mentor',
                      label: 'Mentor',
                    },
                    {
                      value: 'startup',
                      label: 'Startup SME',
                    },
                    {
                      value: 'student',
                      label: 'Student',
                    },
                  ]}
                />
              </FormGroup> */}

              <Input className="mb-3" type="select">
                <option value={0} defaultChecked>
                  I'm a
                </option>
                <option value="freelancer">Freelancer</option>
                <option value="Corporate Professional">
                  Corporate Professional
                </option>
                <option value="startupsme">Startup SME</option>
                <option value="mentor">Mentor</option>
                <option value="investor">Investor</option>
                <option value="Student">Student</option>
                <option value=""></option>
              </Input>

              <FormGroup>
                {/* <Label for="exampleSelect">Select</Label> */}
                <Input id="exampleSelect" name="select" type="select">
                  <option value="0">Select Specialization</option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="fullstack">Full-stack</option>
                  <option value="backend">Backend</option>
                  <option value="network">Network</option>
                  <option value="fintech">Fintech</option>
                </Input>
              </FormGroup>
              {/* {specialization.map((spl, index) => {
                return <p key={index}>{spl}</p>;
              })} */}
              <FormGroup className="py-5" check>
                <Label check className="text-muted">
                  <Input type="checkbox" /> Remember me ?
                  <Link to="#" className="">
                    {'  '} Forgot Password
                  </Link>
                </Label>
              </FormGroup>
              <Button block color="" className="btn-lg my-5 site-btn ">
                Sign Up
              </Button>
              <FormGroup>
                <Label className="text-muted">
                  Don’t have an acount ?
                  <Link to="#" className="">
                    {'  '} Log In
                  </Link>
                </Label>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default SignUp;
