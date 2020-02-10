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
import styled from 'styled-components';
import { useInjectReducer } from "utils/injectReducer";
import { useInjectSaga } from "utils/injectSaga";
import LoadingIndicator from '../../components/LoadingIndicator/index';
import Logo from '../../images/icon-512x512.png';
import { loadAboutInfo } from "./actions";
import messages from "./messages";
import reducer from "./reducer";
import saga from "./saga";
import { makeSelectAboutInfo, makeSelectError, makeSelectLoading } from "./selectors";

const RowAbout = styled.div`
  margin-top: 50px;
`;

const UlAbout = styled.ul`
  margin-top: 10px;
`;

const DivAbout = styled.div`
  margin-left: 80px;
`;

const SpanVersion = styled.span`
  padding-top: 0;
  padding-bottom: 0;
`;

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
    <div>
      <RowAbout className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-widget widget-user-2">
            <div className="widget-user-header bg-warning">
              <div className="widget-user-image">
                <img src={Logo} alt="Cloud File Manager" />
              </div>
              <DivAbout>
                <h3>Cloud File Manager {info.appversion}</h3>
                <p><a href="https://adminlte.io/" target="_blank" rel="noopener noreferrer"><FormattedMessage {...messages.poweredBy} /></a></p>
              </DivAbout>
            </div>
            <div className="card-footer p-0">
              <UlAbout className="nav flex-column">
                <li className="nav-item">
                  <SpanVersion className="nav-link">JVM <span className="float-right badge bg-secondary">{info.jvmversion}</span></SpanVersion>
                  <SpanVersion className="nav-link">Environment <span className="float-right badge bg-secondary">{info.environment}</span></SpanVersion>
                  <SpanVersion className="nav-link">Profile <span className="float-right badge bg-secondary">{info.appprofile}</span></SpanVersion>
                  <SpanVersion className="nav-link">Grails <span className="float-right badge bg-secondary">{info.grailsversion}</span></SpanVersion>
                </li>
              </UlAbout>
            </div>
          </div>
        </div>
      </RowAbout>

      <RowAbout className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-widget widget-user-2">
            <div className="widget-user-header">
              <h3>Backend plugins</h3>
            </div>
            <div className="card-footer p-0">
              <UlAbout className="nav flex-column">
                <li className="nav-item">
                  {info.plugins.map(plugin => (
                    <SpanVersion className="nav-link">{plugin.name} <span className="float-right badge bg-secondary">{plugin.version}</span></SpanVersion>
                  ))}
                </li>
              </UlAbout>
            </div>
          </div>
        </div>
      </RowAbout>
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
