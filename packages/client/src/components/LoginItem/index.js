import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardImgOverlay,
  Button,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';
const LoginItem = () => {
  return (
    <Card className="text-center border-0">
      <CardImg
        width="100%"
        src="https://ibcmedia2022.s3.ap-south-1.amazonaws.com/program/banner/C9QThMfMFHCPzO/Incubatehub_website_banner_-_700_x_500.jpeg"
        alt="Card image cap"
      />
      <CardImgOverlay>
        <CardBody className="text-center pt-6"></CardBody>
        {/* <div className="login-or-register position-absolute font-18 d-none d-lg-block">
          <h6 className="text-white font-weight-bold">OR</h6>
        </div> */}
      </CardImgOverlay>
    </Card>
  );
};

export default LoginItem;
