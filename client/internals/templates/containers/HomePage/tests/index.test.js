import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import GithubRepos from '../index';

describe('<GithubRepos />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <GithubRepos />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
