import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import StInfoBox from './StInfoBox';

describe('<StInfoBox />', () => {
  it('render with content', () => {
    const wrapper = mount(<StInfoBox>Hello</StInfoBox>);

    expect(wrapper.find('.sth-info-box__content').text()).to.contain('Hello');
  });

  it('render with title', () => {
    const wrapper = mount(<StInfoBox title="Example">Hello</StInfoBox>);
    expect(wrapper.find('h3')).to.have.length(1);
  });

  it('render with title and icon', () => {
    const wrapper = mount(
      <StInfoBox icon="icon-alarm" title="Example">
        Hello
      </StInfoBox>
    );
    expect(wrapper.find('i')).to.have.length(1);
    expect(wrapper.find('h3')).to.have.length(1);
  });
});
