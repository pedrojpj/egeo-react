import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import StSpinner from './StSpinner';

describe('<StSpinner />', () => {
  it('render with image', () => {
    const wrapper = mount(<StSpinner image="example.png" loading={true} />);
    expect(wrapper.find('img').prop('src')).to.equal('example.png');
  });

  it('render with loading', () => {
    const wrapper = mount(<StSpinner />);
    expect(wrapper.find('.sth-spinner').text()).to.have.equal('');
  });
});
