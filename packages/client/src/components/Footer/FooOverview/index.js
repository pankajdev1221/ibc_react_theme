import React from 'react';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import fooLogo from 'src/assets/images/Footer/foo-logo.png';
import SocialLink from 'src/components/SocialLink';

const FooOverview = ({ to }) => {
  return (
    <Col
      className="text-center d-flex justify-content-center
"
    >
      <Card className=" foo-overview bg-transparent border-0 text-capitalize">
        <CardHeader className="bg-transparent m-0 border-0 d-flex justify-content-center align-items-center w-100">
          <Link to="/">
            <img
              src="https://ibcmedia2022.s3.ap-south-1.amazonaws.com/instance/logo/C5ZG5udUqyz67k/medium_IBC-2022-2023-latest.png"
              alt="logo"
              style={{ width: '230px' }}
            />
          </Link>
        </CardHeader>
        {/* <CardBody>
          <div className="d-flex">
            <FontAwesomeIcon
              className="mt-2 text-primary h4"
              icon={faMapMarkerAlt}
            />
            <CardText tag="p" className="m-0 text-muted ml-4 pb-5">
              123 City Avenue, Floor 10, Malbourne, Australia.
            </CardText>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon
              className="mt-2 text-primary h4"
              icon={faPhoneAlt}
            />
            <CardText tag="p" className="m-0 text-muted ml-4 pb-5">
              1 -234 -456 -7890
              <br /> 1 -234 -456 -7890
            </CardText>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon
              className="mt-2 text-primary h4"
              icon={faEnvelope}
            />
            <CardText tag="li" className="m-0 text-muted ml-4 pb-5">
              <Link className="text-muted" to={to || '#'}>
                info@Jbdesks.com
              </Link>
              <br />
              <Link className="text-muted" to={to || '#'}>
                support@Jbdesks.com
              </Link>
            </CardText>
          </div>
        </CardBody> */}
        <CardFooter className=" text-center bg-transparent m-0 border-0 pb-0 pt-0">
          <div className=" mt-4 d-flex justify-content-center">
            <SocialLink childClass="btn btn-icon btn-sm btn-outline-primary rounded-circle" />
          </div>
        </CardFooter>
        <CardFooter className="mt-4 text-center bg-transparent m-0 border-0 pb-0 pt-0">
          <div className="d-flex justify-content-center">
            <Link to="/privacy" className="mx-2" style={{ color: '#ccc' }}>
              Privacy Policy
            </Link>
            <Link to="/privacy" className="mx-2" style={{ color: '#ccc' }}>
              Terms & Conditions
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default FooOverview;
