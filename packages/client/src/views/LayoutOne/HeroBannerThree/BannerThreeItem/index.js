import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';

import ContentIcon from '../ContentIcon';

const BannerThreeItem = (props) => {
  const { to } = props;
  return (
    <Container>
      <Row>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className="hero-banner--content">
            <div className="bubble bubble-2">
              <img
                src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/bubble.png"
                alt="bubble"
                className="img-fluid"
              />
            </div>
            <h4 className="mb-3">IBC MEDIA</h4>
            <h1 className="heading animated fadeInUp m-0">
              A global confluence of the best in blockchain technology
            </h1>
            <p className="animated fadeInUp m-0">
              The most complete field service software for IT & Mobile Support,
              Fire Services, Electrical, Maintenance, HVAC & Security Industries
            </p>
            <Button className="animated fadeInUp border-0 text-capitalize site-button">
              <Link to={'/event'}>Apply Program</Link>
            </Button>
            <ContentIcon />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className="bubble bubble-3">
            <img
              src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/bubble.png"
              alt="bubble"
              className="img-fluid"
            />
          </div>
          <div className="banner-img">
            <img
              src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/slider_img.png"
              alt="banner img"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BannerThreeItem;
