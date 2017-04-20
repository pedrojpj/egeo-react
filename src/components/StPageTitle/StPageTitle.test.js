import React from 'react';
import { shallow } from 'enzyme';

import StPageTitle from './StPageTitle';

describe('<StPageTitle />', () => {
  it('renders without crashing', () => {
    shallow(<StPageTitle title="Example" />);
  });
});
