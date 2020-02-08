/**
 *
 * TopNavbarRight
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";

function TopNavbarRight() {
  return (
    <ul className="navbar-nav ml-auto">

      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell"></i>
          <span className="badge badge-warning navbar-badge">1</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">1 Notification</span>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            <i className="fas fa-file mr-2"></i> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item dropdown-footer"><FormattedMessage {...messages.header} /></a>
        </div>
      </li>

      <li className="nav-item">
        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
          <i className="fas fa-th-large"></i>
        </a>
      </li>

    </ul>
  );
}

TopNavbarRight.propTypes = {};

export default TopNavbarRight;
