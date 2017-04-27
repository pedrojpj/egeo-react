import React from 'react'
import { shallow } from 'enzyme'

import StTooltip from './StTooltip'

describe('<StTooltip />', () => {
  it('renders without crashing', () => {
    shallow(<StTooltip text="Example" />)
  })
})
