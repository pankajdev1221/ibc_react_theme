import './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap-datepicker.css';
import './assets/css/fontawesome-all.css';
import './assets/css/animate.min.css';
//main css
import './assets/scss/style.scss';

import 'bootstrap';

import './assets/js/bootstrap-datepicker.min.js';
import './assets/js/jquery.validate.min.js';
import './assets/js/main.js';
// module.hot.accept();
import React from 'react'
import VersionOne from './components/version-one';
import Step1 from './components/step/step-1';

const index = () => {
  return (
    <Step1 />
  )
}

export default index