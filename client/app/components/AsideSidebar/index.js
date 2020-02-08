/**
 *
 * AsideSidebar
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from "react-intl";
import messages from "./messages";

function AsideSidebar() {
  return (
    <aside className="control-sidebar control-sidebar-dark">
      <p><FormattedMessage {...messages.header} /></p>
    </aside>
  );
}

AsideSidebar.propTypes = {};

export default AsideSidebar;
