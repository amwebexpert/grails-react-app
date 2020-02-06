import React from 'react';
import { FormattedMessage } from 'react-intl';
import HeaderLink from './HeaderLink';
import messages from './messages';


function Header() {
  return (
    <div>
      <HeaderLink to="/">
        <FormattedMessage {...messages.home} />
      </HeaderLink>
      <HeaderLink to="/features">
        <FormattedMessage {...messages.features} />
      </HeaderLink>
    </div>
  );
}

export default Header;
