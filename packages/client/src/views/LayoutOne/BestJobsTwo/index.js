import React, { useState } from 'react';
import {
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import classnames from 'classnames';
import SectionHeading from 'src/components/SectionHeading';
import BestJobItems from './BestJobItems';
import RoundShapeAnimation from 'src/components/RoundShapeAnimation';

const BestJobsTwo = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <section className="best-jobs-two bg-white position-relative pb-6 pb-md-13 mt-6 mt-md-13">
      <div
        className="overview-section"
        style={{
          maxWidth: '70rem',
          margin: '1.2rem auto',
          marginBottom: '3rem',
        }}
      >
        <h1 className="mb-4">OVERVIEW</h1>
        <p style={{ lineHeight: 1.7 }}>
          IBC Media is a web 3.0 innovation company that aims to pave the way
          for innovation in web 3.0 in collaboration with the Government of
          India. Our history has been studded with some rewarding milestones
          such as IBC 2018, The Genesis Developer programme, partnerships with
          multiple state governments and the prime minister’s office, an
          association with the Policy Think Tank, such as Niti Aayog, of the
          Government of India, 60 engineering schools and top technology
          services companies like Tech Mahindra.
        </p>

        <p style={{ lineHeight: 1.7 }}>
          We are leaders in managing partnerships and establishing grass root
          efforts in the Indian market.
        </p>
        <p style={{ lineHeight: 1.7 }}>
          This year, we are proud to present the 2nd edition of the IBC in
          association with the Indian State Government. This second edition will
          be bigger, better and will kick start the massive 5 year consecutive
          editions which we have envisioned. IBC 2.0 intends to set benchmarks
          in the blockchain industry and position itself as the converging
          platform of choice for all things blockchain and raise the bar for
          attracting key stakeholders in the space - prospective investors for
          companies/projects/startups, VCs, regulators & policy makers and bring
          in top-line blockchain talent on a common platform.
        </p>
      </div>

      <figure className="line-shape position-absolute d-none d-xl-block">
        <img
          src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/line.png"
          alt="line-shape"
        />
      </figure>
      <SectionHeading
        title="Programs"
        description="Choose you prefered program"
      />
      <Container>
        <Row>
          <Col lg={12} className="best-jobs-tabs text-center">
            {/* <Nav
              tabs
              className="d-inline-block border-0 justify-content-center  mb-6"
            >
              <NavItem role="button" className=" bg-transparent d-inline-block">
                <NavLink
                  className={`first-nav text-uppercase text-dark ${classnames({
                    active: activeTab === '1',
                  })}`}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  Latest Program
                </NavLink>
              </NavItem>
              <NavItem role="button" className="bg-transparent d-inline-block">
                <NavLink
                  className={`last-nav text-uppercase text-dark ${classnames({
                    active: activeTab === '2',
                  })}`}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  Popular Program
                </NavLink>
              </NavItem>
            </Nav> */}

            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                {/* latest */}
                <BestJobItems />
              </TabPane>
              <TabPane tabId="2">
                {/* Popular */}
                <BestJobItems />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
      <RoundShapeAnimation />
    </section>
  );
};

export default BestJobsTwo;
