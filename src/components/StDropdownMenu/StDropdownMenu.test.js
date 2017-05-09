import React from 'react'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import StDropdownMenu from './StDropdownMenu'

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

describe('<StDropdownMenu />', () => {
  it('renders without crashing', () => {
    shallow(<StDropdownMenu items={items} />)
  })
})
