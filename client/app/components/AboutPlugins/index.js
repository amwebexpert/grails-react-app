/**
 *
 * AboutPlugins
 *
 */

import PropTypes from 'prop-types';
import React from "react";
import { FormattedMessage } from "react-intl";
import styled from 'styled-components';
import messages from "./messages";


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

function AboutPlugins(props) {
  const plugins = props.plugins;

  if (!plugins) {
    return null;
  }

  return (
    <div className="col-md-4">
      <div className="card card-widget widget-user-2">
        <div className="widget-user-header bg-warning">
          <h3><FormattedMessage {...messages.header} /></h3>
        </div>
        <div className="card-footer p-0">
          <UlAbout className="nav flex-column">
            <li className="nav-item">
              {plugins.map(plugin => (
                <SpanVersion key={plugin.name} className="nav-link">{plugin.name} <span className="float-right badge bg-secondary">{plugin.version}</span></SpanVersion>
              ))}
            </li>
          </UlAbout>
        </div>
      </div>
    </div>
  );
}

AboutPlugins.propTypes = {
  items: PropTypes.array,
};

export default AboutPlugins;
