import React from 'react';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

import FooOverview from './FooOverview';
import FooNav from './FooNav';
import FooBottom from './FooBottom';

const Footer = () => {
  return (
    <footer className="text-white pt-11 pb-11">
      <Container>
        <Row>
          <FooOverview />
          <FooNav />
        </Row>
        <div className="copyright pt-2 d-block text-center p text-capitalize">
          <FontAwesomeIcon icon={faCopyright} /> 2019
          <Link to="/"> IBC Media. </Link>
          All Rights Reserved.
        </div>
      </Container>
      <FooBottom />
    </footer>
  );
};

export default Footer;
