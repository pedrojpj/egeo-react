import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import StTip from './StTip';

describe('<StList />', () => {
  it('render with title', () => {
    const wrapper = mount(<StTip>Hello</StTip>);
    expect(wrapper.find('p').text()).to.contain('Hello');
  });
});
