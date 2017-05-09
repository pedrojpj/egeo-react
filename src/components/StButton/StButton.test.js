import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { expect } from 'chai'

import StButton from './StButton'

describe('<StButton />', () => {
  it('renders without crashing', () => {
    shallow(<StButton />)
  })

  it('should have props text and render its', () => {
    const wrapper = shallow(<StButton text="Hello World" />)
    expect(wrapper.find('span').text()).to.equal('Hello World')
  })

  it('should contains same texts that props children', () => {
    const wrapper = shallow(<StButton>Button</StButton>)
    expect(wrapper.find('span').text()).to.equal('Button')
  })

  it('should disabled the button', () => {
    const wrapper = shallow(<StButton disabled>Button</StButton>)
    expect(wrapper.find('button').props()).to.have.property('disabled')
  })

  it('should render button as type submit', () => {
    const wrapper = shallow(<StButton type="submit">Button</StButton>)
    expect(wrapper.find('button').props()).to.have.property('type', 'submit')
  })

  it('should render button with left icon', () => {
    const wrapper = shallow(
      <StButton leftIcon="icon-circle-check">Button</StButton>
    )
    expect(wrapper.find('i.icon-circle-check')).to.be.defined
  })

  it('should render button with right icon', () => {
    const wrapper = mount(
      <StButton rightIcon="icon-circle-check">Button</StButton>
    )
    expect(wrapper.props().rightIcon).to.be.equal('icon-circle-check')
  })

  it('should simulate button click and send out event', () => {
    const onButtonClick = sinon.spy()
    const wrapper = mount(<StButton onClick={onButtonClick}>Button</StButton>)
    wrapper.find('button').simulate('click')
    expect(onButtonClick).to.be.defined
  })

  it('should add class type btnLink to button', () => {
    const wrapper = shallow(<StButton typeClass="btnLink">Button</StButton>)
    expect(wrapper.find('button').hasClass('st-button--btnLink')).to.equal(true)
  })
})
