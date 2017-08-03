import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import StHelp from './StHelp';

describe('<StHelp />', () => {
  it('render with content', () => {
    const wrapper = mount(<StHelp>Hello</StHelp>);
    expect(wrapper.find('p').text()).to.contain('Hello');
  });

  it('render with align vertical', () => {
    const wrapper = mount(<StHelp align="vertical">Hello</StHelp>);
    expect(wrapper.props().align).to.be.equal('vertical');
  });
});
