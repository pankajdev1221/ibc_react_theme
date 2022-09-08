import React from 'react';
import { ListGroup } from 'reactstrap';
import {
  faCalendar,
  faInfo,
  faMapMarkerAlt,
  faUserTie,
  faEnvelope,
  faGlobeAsia,
} from '@fortawesome/free-solid-svg-icons';

import Information from 'src/components/Information';

const overviewdata = [
  {
    icon: faCalendar,
    title: 'IBC EMERGE',
    statusAt: 'Corporate Details',
    statusStep: 'Professional Details is pending.',
  },
  {
    icon: faCalendar,
    title: 'IBC EMERGE',
    statusAt: 'Professional Details - Student',
    statusStep: 'Student is pending.',
  },
];

const JobLisingItem = () => {
  return (
    <ListGroup>
      {overviewdata &&
        overviewdata.map((item, i) => <Information key={i} {...item} />)}
    </ListGroup>
  );
};

export default JobLisingItem;
