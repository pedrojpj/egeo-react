import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import StInfoCard from './StInfoCard';

describe('<StInfoCard />', () => {
  it('render with content', () => {
    const wrapper = mount(<StInfoCard>Hello</StInfoCard>);

    expect(wrapper.find('.sth-info-card__description').text()).to.contain(
      'Hello'
    );
  });

  it('render with image', () => {
    const wrapper = mount(<StInfoCard image="photo.png">Hello</StInfoCard>);

    expect(wrapper.find('img').prop('src')).to.equal('photo.png');
  });

  it('render with title', () => {
    const wrapper = mount(<StInfoCard title="Example">Hello</StInfoCard>);

    expect(wrapper.find('h3').text()).to.equal('Example');
  });
});
