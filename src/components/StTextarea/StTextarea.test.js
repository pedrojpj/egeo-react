import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { expect } from 'chai'

import StTextarea from './StTextarea'

describe('<StTextarea />', () => {
  it('renders without crashing', () => {
    shallow(<StTextarea />)
  })

  it('should have props label and render its', () => {
    const wrapper = shallow(<StTextarea label="Hello World" />)
    expect(wrapper.find('label').text()).to.be.equal('Hello World')
  })

  it('should disabled the textarea', () => {
    const wrapper = shallow(<StTextarea disabled />)
    expect(wrapper.find('textarea').props()).to.have.property('disabled')
  })

  it('should show as readonly the textarea', () => {
    const wrapper = shallow(<StTextarea readOnly />)
    expect(wrapper.find('textarea').props()).to.have.property('readOnly')
  })

  it('should show the name of the textarea', () => {
    const wrapper = shallow(<StTextarea name="example" />)
    expect(wrapper.find('textarea').props().name).to.be.equal('example')
  })

  it('should have the state error', () => {
    const wrapper = mount(<StTextarea name="example" error />)
    expect(wrapper.state('error')).to.be.true
  })

  it('should show the error message', () => {
    const wrapper = mount(
      <StTextarea name="example" error errorMessage="Error" />
    )
    expect(wrapper.find('.sth-textarea-error-message')).to.be.defined
  })

  it('should be a field textarea invalid', () => {
    const wrapper = mount(<StTextarea name="example" validate required />)
    expect(wrapper.state('error')).to.be.true
  })

  it('should be a field textarea invalid for maxlength', () => {
    const wrapper = mount(
      <StTextarea name="example" validate maxLength={5} value="Hello World" />
    )
    expect(wrapper.state('error')).to.be.true
  })
})
