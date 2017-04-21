import React from 'react'
import { shallow } from 'enzyme'

import StSearch from './StSearch'

describe('<StSearch />', () => {
  it('renders without crashing', () => {
    shallow(<StSearch />)
  })
})
