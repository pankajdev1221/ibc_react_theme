import React from 'react';
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
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import RegistrationItem from 'src/components/RegistrationItem';
import LoginItem from 'src/components/LoginItem';

const EventDetail = () => {
  return (
    <div className="event-page">
      <div className="py-13 ">
        <Row className="back-white">
          <Col sm={12} md={7}>
            <img
              slt="bannne"
              className="w-100"
              src="https://ibcmedia2022.s3.ap-south-1.amazonaws.com/program/banner/C9QThMfMFHCPzO/Incubatehub_website_banner_-_700_x_500.jpeg"
            />
          </Col>
          <Col sm={12} md={5} className="mt-4 ">
            <h4>IBC HACK-1</h4>
            <p>is brought to you by IBC Media</p>

            <p className="text-muted">
              <b>Ends in 4 days</b>
            </p>

            <div className="event-desc">
              <p>For Startup SME, Student, Corporate Professional</p>
              <div className="pills">
                <div className="pill">#Web3 (Metaverse. NFT. Blockchain)</div>
                <div className="pill">#Blockchain. Metaverse. Web3</div>
                <div className="pill">#IBC - HACK</div>
                <div className="pill">Fintech</div>
              </div>
            </div>

            <div className="target-sec">
              <p className="text-bold">
                <b>Target Geography</b>
              </p>
              <p className="text-muted">Global</p>
              <a href="#" className=" mt-4 btn site-btn rounded">
                Apply Now
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EventDetail;
