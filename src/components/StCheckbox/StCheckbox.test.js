import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import { expect } from 'chai'

import StCheckbox from './StCheckbox'

describe('<StCheckbox />', () => {
  it('renders without crashing', () => {
    shallow(<StCheckbox />)
  })

  it('should disabled the input', () => {
    const wrapper = shallow(<StCheckbox disabled>Option</StCheckbox>)
    expect(wrapper.find('input').props()).to.have.property('disabled')
  })

  it('should add checked class to custom checkbox', () => {
    const wrapper = shallow(<StCheckbox checked>Option</StCheckbox>)
    expect(wrapper.find('.icon-check2')).to.be.defined
  })

  it('should mark the input as checked', () => {
    const wrapper = shallow(<StCheckbox checked>Option</StCheckbox>)
    expect(wrapper.find('input').props()).to.have.property('checked')
  })

  it('should add the label span with this text', () => {
    const wrapper = shallow(<StCheckbox>Option</StCheckbox>)
    expect(wrapper.find('.sth-checkbox-label').text()).to.be.equal('Option')
  })

  it('should simulate click input and the checkbox will be checked', () => {
    const wrapper = mount(<StCheckbox name="option" value={1} />)

    wrapper.find('input').simulate('click')
    expect(wrapper.state().checked).to.be.equal(true)
  })

  it('should simulate change input and dispatch the change event', () => {
    const onChangeEvent = sinon.spy()
    const wrapper = shallow(
      <StCheckbox onChange={onChangeEvent} name="option" value={1} />
    )

    wrapper.find('input').simulate('change')
    wrapper.update()

    expect(onChangeEvent.calledOnce).to.be.true
  })
})
