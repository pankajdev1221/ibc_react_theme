import React from 'react';
import { Row, Col } from 'reactstrap';

import DashboardCard from 'src/components/DashboardCard';
import Pagination from 'src/components/Pagination';
import ApplicationPageOne from './ApplicationPageOne';

const Applications = () => {
  return (
    <>
      <DashboardCard title="Recent Applications" className="mb-4" />
      <ApplicationPageOne />
      <Row>
        <Col>
          <Pagination />
        </Col>
      </Row>
    </>
  );
};

export default Applications;
