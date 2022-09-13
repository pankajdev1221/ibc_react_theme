import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Information = (props) => {
  const { icon, title, statusStep, statusAt, className } = props;
  return (
    <ListGroupItem className={`d-flex p-1 ${className}`} style={{border:'none'}}>
      <FontAwesomeIcon className="mt-2 " icon={icon} />
      <div className="ml-4 pb-4">
        <p className="m-0 d-block">{title}</p>
        <p className="m-0 d-block">
          {' '}
          <small>{statusAt}</small>{' '}
        </p>
        <span className="m-0 d-block text-muted">
          {' '}
          <small>{statusStep}</small>{' '}
        </span>
      </div>
    </ListGroupItem>
  );
};

export default Information;
