import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { expect } from 'chai'

import StInput from './StInput'

describe('<StInput />', () => {
  it('renders without crashing', () => {
    shallow(<StInput />)
  })

  it('should have props label and render its', () => {
    const wrapper = shallow(<StInput label="Hello World" />)
    expect(wrapper.find('label').text()).to.be.equal('Hello World')
  })

  it('should disabled the input', () => {
    const wrapper = shallow(<StInput disabled />)
    expect(wrapper.find('input').props()).to.have.property('disabled')
  })

  it('should show as readonly the input', () => {
    const wrapper = shallow(<StInput readOnly />)
    expect(wrapper.find('input').props()).to.have.property('readOnly')
  })

  it('should show the name of the input', () => {
    const wrapper = shallow(<StInput name="example" />)
    expect(wrapper.find('input').props().name).to.be.equal('example')
  })

  it('should have the state error', () => {
    const wrapper = mount(<StInput name="example" error />)
    expect(wrapper.state('error')).to.be.true
  })

  it('should show the error message', () => {
    const wrapper = mount(<StInput name="example" error errorMessage="Error" />)
    expect(wrapper.find('.sth-input-error-message')).to.be.defined
  })

  it('should be a field input invalid', () => {
    const wrapper = mount(<StInput name="example" validate required />)
    expect(wrapper.state('error')).to.be.true
  })

  it('should be a field input invalid for maxlength', () => {
    const wrapper = mount(
      <StInput name="example" validate maxLength={5} value="Hello World" />
    )
    expect(wrapper.state('error')).to.be.true
  })

  it('should be a field input invalid for minlength', () => {
    const wrapper = mount(
      <StInput name="example" validate minLength={10} value="Hello" />
    )
    expect(wrapper.state('error')).to.be.true
  })

  it('should be a field input invalid for pattern', () => {
    const wrapper = mount(
      <StInput
        name="example"
        validate
        pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
        value="Hello"
      />
    )
    expect(wrapper.state('error')).to.be.true
  })

  it('should be state focus true to simulate focus in input', () => {
    const wrapper = mount(<StInput name="example" />)
    wrapper.find('input').simulate('focus')
    wrapper.update()
    expect(wrapper.state('focus')).to.be.true
  })

  it('should be state focus false to simulate blur in input', () => {
    const wrapper = mount(<StInput name="example" />)
    wrapper.find('input').simulate('focus')
    wrapper.update()
    wrapper.find('input').simulate('blur')
    expect(wrapper.state('focus')).to.be.false
  })
})
