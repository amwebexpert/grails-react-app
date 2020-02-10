/**
 *
 * Sidebar
 *
 */

import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../images/icon-512x512.png';

function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-yellow elevation-4">

      <Link to="/" className="brand-link">
        <img src={Logo} alt="Cloud Files Manager" className="brand-image img-circle elevation-3" />
        <span className="brand-text font-weight-light">Cloud Files Manager</span>
      </Link>

      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li className="nav-item has-treeview menu-open">
              { /** We can add 'active' class here if required like so: nav-link active */}
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>React Boilerplate  <i className="right fas fa-angle-left"></i></p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  { /** We can add 'active' class here if required like so: nav-link active */}
                  <Link to="/repos" className="nav-link active">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Github fetch demo</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/features" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Features</p>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-calendar"></i>
                <p>Another menu  <i className="right fas fa-angle-left"></i></p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>About this app...</p>
                  </Link>
                </li>
              </ul>
            </li>

          </ul>
        </nav>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
