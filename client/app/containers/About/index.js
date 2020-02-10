/**
 *
 * About
 *
 */

import PropTypes from "prop-types";
import React, { useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";
import LoadingIndicator from '../../components/LoadingIndicator/index';
import Logo from '../../images/icon-512x512.png';
import { loadAboutInfo } from "./actions";
import messages from "./messages";
import reducer from "./reducer";
import saga from "./saga";
import { makeSelectAboutInfo, makeSelectError, makeSelectLoading } from "./selectors";

const key = 'about';

function About(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    props.fetchAboutInfo();
  }, []);

  if (props.loading) {
    return <LoadingIndicator />;
  }

  if (props.error) {
    return <p>Something went wrong, please try again!</p>;
  }

  const info = props.info;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card card-widget widget-user-2">
          <div className="widget-user-header bg-warning">
            <div className="widget-user-image">
              <img src={Logo} alt="Cloud File Manager" />
            </div>
            <h3>Cloud File Manager App</h3>
            <h5><a href="https://adminlte.io/" target="_blank" rel="noopener noreferrer"><FormattedMessage {...messages.poweredBy} /></a></h5>
          </div>
          <div className="card-footer p-0">
            <ul className="nav flex-column">
              <li className="nav-item">
                <span className="nav-link">Backend <span className="float-right badge bg-secondary">{info.appversion}</span></span>
                <span className="nav-link">Grails <span className="float-right badge bg-secondary">{info.grailsversion}</span></span>
                <span className="nav-link">JVM <span className="float-right badge bg-secondary">{info.jvmversion}</span></span>
                <span className="nav-link">Environment <span className="float-right badge bg-secondary">{info.environment}</span></span>
                <span className="nav-link">Profile <span className="float-right badge bg-secondary">{info.appprofile}</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  info: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  fetchAboutInfo: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  info: makeSelectAboutInfo(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchAboutInfo: () => dispatch(loadAboutInfo())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
