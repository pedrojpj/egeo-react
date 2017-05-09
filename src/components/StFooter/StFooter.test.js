import React from 'react'
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import StFooter from './StFooter'

describe('<StFooter />', () => {
  it('renders without crashing', () => {
    shallow(<StFooter />)
  })
})
