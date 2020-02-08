import React from 'react';
import TopNavbarLeft from './TopNavbarLeft/index';
import TopNavbarRight from './TopNavbarRight/index';
import TopNavbarSearchForm from './TopNavbarSearchForm/index';

function TopNavbar() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">

      <TopNavbarLeft />

      <TopNavbarSearchForm />

      <TopNavbarRight />

    </nav>
  );
}

export default TopNavbar;

