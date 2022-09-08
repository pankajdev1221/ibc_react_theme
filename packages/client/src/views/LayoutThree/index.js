import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { toggleTheme } from 'src/state/ducks/ui';

import JobsCategory from 'src/components/JobsCategory';
import LatestJob from 'src/components/LatestJob';
import JobReview from 'src/components/JobReview';
import StatisticsBanner from 'src/components/StatisticsBanner';
import HiringCompany from 'src/components/HiringCompany';
import JobCover from 'src/components/JobCover';
import AppBanner from 'src/components/AppBanner';
import OurBlog from 'src/components/OurBlog';
import TopJobs from './TopJobs';
import HeroBanner from './HeroBanner';
import PricingPlan from './PricingPlan';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleTheme('default'));
  });
  return (
    <>
      <HeroBanner />
      <TopJobs />
      <JobsCategory />
      <JobCover />
      <LatestJob />
      <StatisticsBanner banner1 />
      <HiringCompany />
      <PricingPlan />
      <JobReview />
      <AppBanner />
      <OurBlog />
    </>
  );
};

export default Home;
