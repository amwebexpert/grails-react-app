import LocaleToggle from 'containers/LocaleToggle';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


function Footer() {
  return (
    <footer className="main-footer">
      <FormattedMessage {...messages.licenseMessage} />
      <div className="float-right d-none d-sm-inline-block">
        <LocaleToggle />
      </div>
    </footer>
  );
}

export default Footer;
