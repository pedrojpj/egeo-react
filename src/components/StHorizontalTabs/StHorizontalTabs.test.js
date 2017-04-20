import React from 'react'
import { shallow } from 'enzyme'

import StHorizontalTabs from './StHorizontalTabs'

describe('<StHorizontalTabs />', () => {
  it('renders without crashing', () => {
    shallow(<StHorizontalTabs />)
  })
})
