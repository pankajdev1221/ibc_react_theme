import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StickyContainer } from 'react-sticky';

import 'src/assets/scss/style.scss';

import { toggleTheme } from 'src/state/ducks/ui';

import Newsletter from 'src/components/Newsletter';
import Fallback from 'src/components/Fallback';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import withTitle from 'src/components/TitleComponent';
import Breadcrumb from 'src/components/Breadcrumb';
// import Setting from 'src/components/Setting';
// import MultiForm from 'src/views/MultiForm/components/version-one';

import Step1 from '../MultiForm/components/step/step-1';
import Step2 from '../MultiForm/components/step/step-2';
import Step3 from '../MultiForm/components/step/step-3';
import Step4 from '../MultiForm/components/step/step-4';
import Step5 from '../MultiForm/components/step/step-5';
import Step6 from '../MultiForm/components/step/step-6';

// Pages components
const LayoutThree = lazy(() => import('../LayoutThree'));
const LayoutTwo = lazy(() => import('../LayoutTwo'));
const LayoutOne = lazy(() => import('../LayoutOne'));
const Blog = lazy(() => import('../Blog'));
const Candidate = lazy(() => import('../Candidate'));
const Employer = lazy(() => import('../Employer'));
const About = lazy(() => import('../About'));
const ContactUs = lazy(() => import('../ContactUs'));
const NotFound = lazy(() => import('../NotFound'));
const Pricing = lazy(() => import('../Pricing'));
const Company = lazy(() => import('../Company'));
const CompanyDetails = lazy(() => import('../CompanyDetails'));
const Job = lazy(() => import('../Job'));
const Dashboard = lazy(() => import('../JobDetails'));
const Signup = lazy(() => import('../SignUp'));
const Signin = lazy(() => import('../Signin'));
const EventDetail = lazy(() => import('../EventDetail'));
const FormA = lazy(() => import('../MultiForm'));

const App = () => {
  const breadcrumb = useSelector((store) => store.breadcrumb);
  const theme = useSelector((store) => store.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleTheme(theme));
  }, [theme]);

  
  return (
    <Router>
      <StickyContainer>
        <Header />
        {breadcrumb && <Breadcrumb title={breadcrumb} />}
        <Suspense fallback={<Fallback />}>
          <Switch>
            {/* Home page routes */}
            <Route
              exact
              path="/"
              render={(props) =>
                withTitle({
                  component: LayoutOne,
                  ...props,
                })
              }
            />
            <Route      
              path="/step1"
              render={(props) =>
                withTitle({
                  component: Step1,
                  ...props,
                })
              }
            />
            <Route      
              path="/step2"
              render={(props) =>
                withTitle({
                  component: Step2,
                  ...props,
                })
              }
            />
            <Route      
              path="/step3"
              render={(props) =>
                withTitle({
                  component: Step3,
                  ...props,
                })
              }
            />
            <Route      
              path="/step4"
              render={(props) =>
                withTitle({
                  component: Step4,
                  ...props,
                })
              }
            />
            <Route      
              path="/step5"
              render={(props) =>
                withTitle({
                  component: Step5,
                  ...props,
                })
              }
            />
            <Route      
              path="/step6"
              render={(props) =>
                withTitle({
                  component: Step6,
                  ...props,
                })
              }
            />
            {/* <Route
              path="/home2"
              render={(props) =>
                withTitle({
                  component: LayoutTwo,
                  ...props,
                })
              }
            />
            <Route
              path="/home3"
              render={(props) =>
                withTitle({
                  component: LayoutThree,
                  ...props,
                })
              }
            /> */}
            <Route
              exact
              path="/contactus"
              render={(props) =>
                withTitle({
                  component: ContactUs,
                  title: 'Contact Us',
                  ...props,
                })
              }
            />
{/* 
            <Route
              exact
              path="/about"
              render={(props) =>
                withTitle({
                  component: About,
                  title: 'About Us',
                  ...props,
                })
              }
            /> */}
{/* 
            <Route
              exact
              path="/pricing"
              render={(props) =>
                withTitle({
                  component: Pricing,
                  title: 'Pricing Plan',
                  ...props,
                })
              }
            /> */}

            {/* <Route
              exact
              path="/company"
              render={(props) =>
                withTitle({
                  component: Company,
                  title: 'Company',
                  ...props,
                })
              }
            /> */}

            {/* <Route
              exact
              path="/company/details"
              render={(props) =>
                withTitle({
                  component: CompanyDetails,
                  title: 'Company Details',
                  ...props,
                })
              }
            /> */}

            {/* <Route
              exact
              path="/job"
              render={(props) =>
                withTitle({
                  component: Job,
                  title: 'Jobs',
                  ...props,
                })
              }
            /> */}

            <Route
              exact
              path="/dashboard"
              render={(props) =>
                withTitle({
                  component: Dashboard,
                  title: 'My Dashboard',
                  ...props,
                })
              }
            />

            <Route
              exact
              path="/signin"
              render={(props) =>
                withTitle({
                  component: Signin,
                  title: 'Login',
                  ...props,
                })
              }
            />

            <Route
              exact
              path="/signup"
              render={(props) =>
                withTitle({
                  component: Signup,
                  title: 'Sign Up',
                  ...props,
                })
              }
            />
            <Route
              exact
              path="/event"
              render={(props) =>
                withTitle({
                  component: EventDetail,
                  title: 'Event Detail',
                  ...props,
                })
              }
            />

            {/* Blog pages */}
            {/* <Route path="/blog" component={Blog} /> */}

            {/* Candidate pages */}
            {/* <Route path="/candidate" component={Candidate} /> */}

            {/* Candidate pages */}
            {/* <Route path="/employer" component={Employer} /> */}
            <Route path="/form" component={FormA} />

            {/* Default 404 */}
            <Route
              render={(props) =>
                withTitle({
                  component: NotFound,
                  title: '404 Error',
                  ...props,
                })
              }
            />
          </Switch>
        </Suspense>
        {/* <Newsletter /> */}
        {/* <Footer /> */}
        {/* <Setting /> */}
      </StickyContainer>
    </Router>
  );
};

export default withRouter(App);
