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

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <hr />
      <pre>
        {JSON.stringify(props.info)}
      </pre>
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
