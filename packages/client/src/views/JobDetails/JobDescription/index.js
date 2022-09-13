import React from 'react';
import { Card, CardFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight,
  faGlobeAsia,
  faFileDownload,
  faShare,
  faTruckMoving,
  faSearchLocation,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SocialLink from 'src/components/SocialLink';
import LocationMap from 'src/components/LocationMap';
import JobDescriptionItem from './JobDescriptionItem';

const JobDescription = () => {
  return (
    <>
      <Card className="mb-4">
        <JobDescriptionItem title="IBC Hack 1 ">
          <p className='mb-4 mt-n3'>is brought to you by IBC Media</p>

          <div className="steps-status">
            <div className="step p-3 mb-4">
              <div className="steppill px-2">
                <small>Person Details</small>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-2">
                <p className="mb-0">Personal Details</p>
                <p>Completed</p>
              </div>
            </div>

            <div className="step p-3 mb-4">
              <div className="steppill px-2">
                <small>Professional Details - Student</small>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-2">
                <p className="mb-0">Student</p>
                <Link to="#" className="text-underline">
                  Pending
                </Link>
              </div>
            </div>
          </div>

          <div className="people-intersted row mb-4  border-bottom border-top py-3">
            <Link className="text-center col-md-4 border-right">
              <p className="mb-1">People Intersted</p>
              <p>1176</p>
            </Link>
            <div className="text-center col-md-4 border-right">
              <p className="mb-1">End Date</p>
              <p>28-Sep-2022</p>
            </div>
            <div className="text-center col-md-4 ">
              <p className="mb-1">Place Program</p>
              <p>Online</p>
            </div>
          </div>
          <ul className="d-flex justify-content-between  p-0 flex-wrap">
            <Link className="mr-5 text-underline">
              <span>
                <FontAwesomeIcon icon={faGlobeAsia} className=" mr-1" />
              </span>
              View Application
            </Link>

            <li>
              <span>
                <FontAwesomeIcon icon={faFileDownload} className=" mr-1" />
              </span>
              Program Ends in <b>3</b> Days
            </li>
          </ul>

          <div className="text-center mt-4">
            <Link to="/event" className="mr-5">
              <FontAwesomeIcon icon={faCompass} className=" mr-1" />
              Explore
            </Link>
            <Link to="/event">
              <FontAwesomeIcon icon={faShare} className=" mr-1" /> Share
            </Link>
          </div>
        </JobDescriptionItem>
      </Card>
    </>
  );
};

export default JobDescription;
