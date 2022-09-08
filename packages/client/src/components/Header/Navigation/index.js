import React, { useState } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';

import SearchButton from '../SearchButton';
import NavBox from './NavBox';
import MegaDropdown from './MegaDropdown';
import MenuItem from './MenuItem';

const menuBoxItems = {
  homePage: [
    {
      id: 1,
      title: 'home',
      path: '/',
    },
    {
      id: 2,
      title: 'home2',
      path: '/home2',
    },
    {
      id: 3,
      title: 'home3',
      path: '/home3',
    },
  ],
  jobPage: [
    {
      id: 1,
      title: 'Jobs',
      path: '/job',
    },
    {
      id: 2,
      title: 'Job Single',
      path: '/job/details',
    },
  ],
  pageList: [
    {
      id: 1,
      title: 'About Us',
      path: '/about',
    },
    {
      id: 2,
      title: 'Companies',
      path: '/company',
    },
    {
      id: 3,
      title: 'Company Single',
      path: '/company/details',
    },
    {
      id: 4,
      title: 'Error Page',
      path: 'err',
    },
    {
      id: 5,
      title: 'Login',
      path: '/signin',
    },
    {
      id: 6,
      title: 'Pricing Table',
      path: '/pricing',
    },
    {
      id: 7,
      title: 'Sign Up',
      path: '/signup',
    },
  ],
  dashboardPage: [
    {
      id: 1,
      title: 'Candidate',
      path: '/candidate',
    },
    {
      id: 2,
      title: 'Company',
      path: '/employer',
    },
  ],
};

const animatedMenu = [
  { id: 1, component: () => <MenuItem items={menuBoxItems.homePage} /> },
  { id: 2, component: () => <MenuItem items={menuBoxItems.jobPage} /> },
  { id: 3, component: MegaDropdown },
  { id: 4, component: () => <MenuItem items={menuBoxItems.pageList} /> },
  { id: 5, component: () => <MenuItem items={menuBoxItems.dashboardPage} /> },
];

const Navigation = () => {
  const [visable, setVisable] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const el = document.getElementById('menu-con');

  const onMouseEnter = (e, i, size) => {
    const offset =
      -1 *
      (window.innerWidth / 2 -
        (e.target.getBoundingClientRect().left + e.target.offsetWidth / 2));
    el.style.setProperty('--siteMenuArrowOffset', `${offset}px`);
    if (size) {
      el.style.setProperty('--siteMenuBoxHeight', `${size[0]}px`);
      el.style.setProperty('--siteMenuBoxWidth', `${size[1]}px`);
    }

    setActiveIndex(i);
    setVisable(true);
  };

  const resetNavBoc = () => {
    setVisable(false);
  };

  return (
    <div
      className={classnames('navigation position-relative', {
        'menu-container-visable': visable,
      })}
      onMouseLeave={resetNavBoc}
    >
      <Navbar className="p-0 border-right d-lg-block d-xl-block d-none">
        <Nav>
          <NavItem className="">
            <Link
              className="nav-link position-relative main-nav text-dark"
              to="/programs"
              // onMouseEnter={(e) => onMouseEnter(e, 1, [145, 220])}
            >
              Programs
            </Link>
          </NavItem>

          <NavItem className="">
            <Link
              // onMouseEnter={(e) => onMouseEnter(e, 2, [100, 220])}
              className="nav-link position-relative main-nav text-dark"
              to="/community"
            >
              Community Members
            </Link>
          </NavItem>

          {/* <NavItem className="dropdown position-static mega-dropdown">
            <Link
              onMouseEnter={(e) => onMouseEnter(e, 3, [360, 0])}
              className="nav-link main-nav position-relative text-dark"
              to="#"
            >
              Candidates
            </Link>
          </NavItem> */}
          {/* <NavItem className="dropdown">
            <Link
              onMouseEnter={(e) => onMouseEnter(e, 4, [330, 220])}
              className="nav-link position-relative main-nav text-dark"
              to="#"
            >
              Pages
            </Link>
          </NavItem> */}
          {/* <NavItem className="dropdown">
            <Link
              onMouseEnter={(e) => onMouseEnter(e, 5, [100, 220])}
              className="nav-link position-relative main-nav text-dark"
              to="#"
            >
              Dashboard
            </Link>
          </NavItem> */}
          {/* <NavItem>
            <NavLink
              exact
              onMouseEnter={resetNavBoc}
              className="nav-link position-relative main-nav text-dark"
              to="/blog"
            >
              blog
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              exact
              onMouseEnter={resetNavBoc}
              className="nav-link position-relative main-nav text-dark"
              to="/contactus"
            >
              Contact
            </NavLink>
          </NavItem>
          <SearchButton />
        </Nav>
      </Navbar>

      <div
        className={classnames('menu-container', {
          'full-menu-content': [3].includes(activeIndex),
        })}
        id="menu-con"
      >
        <div className="site-arrow bg-primary"></div>
        <div className="menu-area" hidden={!visable}>
          <div className="menu-card">
            {animatedMenu.map(({ id, component: Component }) => (
              <NavBox key={id} id={id} activeIndex={activeIndex}>
                <Component />
              </NavBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
