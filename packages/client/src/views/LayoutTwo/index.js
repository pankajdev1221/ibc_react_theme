import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { toggleTheme } from 'src/state/ducks/ui';

import HeroBannerTwo from './HeroBannerTwo';
import JobAgency from 'src/components/JobAgency';
import OurServices from './OurServices';
import BestJobs from './BestJobs';
import JobsCategoryTwo from './JobsCategoryTwo';
import StatisticsBannerTwo from './StatisticsBannerTwo';
import ClientCarousel from './ClientCarousel';
import Testimonial from './Testimonial';
import OurBlogTwo from './OurBlogTwo';
import PricingPlan from './PricingPlan';

const HomeTwo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleTheme('green'));
  });
  return (
    <>
      <HeroBannerTwo />
      <JobAgency />
      <BestJobs />
      <OurServices />
      <StatisticsBannerTwo />
      <JobsCategoryTwo />
      <Testimonial />
      <PricingPlan />
      <OurBlogTwo />
      <ClientCarousel />
    </>
  );
};

export default HomeTwo;
