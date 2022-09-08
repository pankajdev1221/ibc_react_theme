import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import TrendingKeyword from 'src/components/TrendingKeyword';
import JobLisingItem from './JobLisingItem';

const JobsOverview = () => {
  return (
    <>
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center  card-header text-black">
          Persnol Details
        </CardHeader>
        <CardBody className="text-center">
          <img
            src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/overview.png"
            alt="Cardcap"
            className="image-fluid"
          />
          <h6 className="align-self-center pt-4">John Wick</h6>
          <p className="align-self-center ">Student</p>
          <p className="align-self-center text-muted">
            <small>
              Arts & Humanities, Bachelor of Science, Blockchain/ Web 3.0,
              Business Administration, Branding Strategy,
            </small>
          </p>
          {/* <Button outline color="primary" className="btn-icon btn-sm mr-4">
            <FontAwesomeIcon icon={faHeart} />
          </Button> */}
          <Button color="" className="btn btn-sm site-btn rounded">
            Add Basic Info
          </Button>
        </CardBody>

        {/* <CardBody className="p-5">
          <JobLisingItem />
          <Button block color="primary" className="btn  btn-md ">
            Apply Now!
          </Button>
        </CardBody> */}
        {/* <CardFooter className="d-flex justify-content-between align-items-center bg-white card-header p-5">
          <TrendingKeyword />
        </CardFooter> */}
      </Card>
    </>
  );
};

export default JobsOverview;
