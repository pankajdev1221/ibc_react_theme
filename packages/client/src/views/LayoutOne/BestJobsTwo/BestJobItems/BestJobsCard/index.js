import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Media, Button } from 'reactstrap';
import {
  faDollarSign,
  faMapMarkerAlt,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ButtonGroup from 'reactstrap/lib/ButtonGroup';

const BestJobsCard = (props) => {
  const { jobimg, programName, peopleIntersted, viewDetail, tags } = props;
  return (
    <Link to="#">
      <Card className="my-3 bestjob-two-item text-left">
        <CardBody>
          <Media className="align-items-center d-block d-sm-flex text-center text-sm-left">
            <Media
              left
              href="#"
              className="border-right py-4 pr-0 pr-sm-5 mr-0 mr-sm-5"
            >
              <Media object src={jobimg} alt="Generic placeholder image" />
            </Media>
            <Media body className="mt-5 mt-sm-0">
              <Media heading>{programName}</Media>
              <p className="mb-2 text-dark">
                <FontAwesomeIcon icon={faUserAlt} /> {peopleIntersted} intersted
                <span className="ml-3"> </span>
                {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> {location} */}
              </p>
              <p className="mb-0"></p>
              {tags.map((tag, index) => {
                return (
                  <span className="pill" key={index}>
                    {tag}
                  </span>
                );
              })}
              {/* <a
                href={viewDetail}
                className="rounded-pill  border btn btn-outline site-button mt-4"
              >
                View Detail
              </a> */}
              <div>
                <Link to="/event" className="btn site-btn rounded py-1 mt-4">
                  View Details
                </Link>
              </div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BestJobsCard;
