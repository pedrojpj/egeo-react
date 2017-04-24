import React from 'react';
import { shallow } from 'enzyme';

import StInput from './StInput';

describe('<StInput />', () => {
  it('renders without crashing', () => {
    shallow(<StInput />);
  });
});
