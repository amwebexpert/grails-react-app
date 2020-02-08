/**
 *
 * TopNavbarSearchForm
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";

function TopNavbarSearchForm() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

TopNavbarSearchForm.propTypes = {};

export default TopNavbarSearchForm;
