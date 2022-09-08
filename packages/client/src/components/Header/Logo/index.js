// External components
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Logo = () => {
  const theme = useSelector((store) => store.theme);

  return (
    <Link to="/" className="">
      <img
        style={{
          width: '250px',
        }}
        src={
          (theme === 'default' &&
            'https://webstrot.com/html/jbdesk/main_version/main_pages/images/logo.png') ||
          (theme === 'green' &&
            'https://webstrot.com/html/jbdesk/main_version/main_pages/images/logo3.png') ||
          (theme === 'violet' &&
            'https://ibcmedia2022.s3.ap-south-1.amazonaws.com/instance/logo/C5ZG5udUqyz67k/medium_IBC-2022-2023-latest.png')
        }
        alt="logo"
        className="image-fluid"
      />
    </Link>
  );
};

export default Logo;
