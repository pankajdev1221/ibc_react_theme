import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
} from 'reactstrap';
import JobLisingItem from '../JobDetails/JobsOverview/JobLisingItem';
import TrendingKeyword from 'src/components/TrendingKeyword';
const DashboardRightSide = () => {
  return (
    <>
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center  card-header text-black">
          Program Details
        </CardHeader>
        {/* <CardBody className="text-center">
          <Button outline color="primary" className="btn-icon btn-sm mr-4">
            <FontAwesomeIcon icon={faHeart} />
          </Button>
        </CardBody> */}

        <CardBody className="p-3">
          <JobLisingItem />
          <Button block color="" className="btn  btn-md site-btn rounded py-2">
            Apply Now!
          </Button>
        </CardBody>
        <CardFooter className="d-flex justify-content-between align-items-center bg-white card-header p-3">
          <TrendingKeyword />
        </CardFooter>
      </Card>
    </>
  );
};

export default DashboardRightSide;
