import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';

function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link"><FormattedMessage {...messages.home} /></Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/features" className="nav-link"><FormattedMessage {...messages.features} /></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

