/**
 *
 * TopNavbarLeft
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { Link } from 'react-router-dom';

function TopNavbarLeft() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/" className="nav-link"><FormattedMessage {...messages.home} /></Link>
      </li>
    </ul>
  );
}

TopNavbarLeft.propTypes = {};

export default TopNavbarLeft;
