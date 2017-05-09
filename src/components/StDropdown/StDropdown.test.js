import React from 'react'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import StDropdown from './StDropdown'

let items = [
  {
    label: 'Critical Error',
    value: 1
  },
  {
    label: 'Warning',
    value: 2
  },
  {
    label: 'Lorem Ipsum',
    value: 3
  }
]

describe('<StDropdown />', () => {
  it('renders without crashing', () => {
    shallow(<StDropdown />)
  })

  it('should the dropdown button have a fixed width', () => {
    const wrapper = mount(
      <StDropdown width={400} items={items} button="Dropdown" />
    )

    expect(wrapper.find('button')).to.have.style('width', '400px')
  })

  it('should the dropdown is in state active true', () => {
    const wrapper = mount(<StDropdown button="button" default items={items} />)

    wrapper.find('button').simulate('click')
    wrapper.update()
    expect(wrapper.find('.sth-dropdown-menu-item')).to.be.defined
  })
})
