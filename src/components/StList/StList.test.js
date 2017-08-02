import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { StList, StListItem } from './StList';

describe('<StList />', () => {
  it('render with title', () => {
    const wrapper = mount(
      <StList title="Title">
        <StListItem>Item 1</StListItem>
      </StList>
    );
    expect(wrapper.props().title).to.be.defined;
  });

  it('render with search', () => {
    const wrapper = mount(
      <StList options={{ search: { enabled: true } }}>
        <StListItem>Item 1</StListItem>
      </StList>
    );

    expect(wrapper.find('.sth-search')).to.have.length(1);
  });
});

describe('StListItem />', () => {
  it('render with icon', () => {
    const wrapper = mount(<StListItem icon="icon-home">Item</StListItem>);

    expect(wrapper.props().icon).to.be.defined;
    expect(wrapper.find('i')).to.have.length(1);
  });

  it('render with class selected', () => {
    const wrapper = mount(
      <StListItem icon="icon-home" selected={true}>
        Item
      </StListItem>
    );

    expect(wrapper.find('.sth-item-list__item--selected')).to.have.length(1);
  });
});
