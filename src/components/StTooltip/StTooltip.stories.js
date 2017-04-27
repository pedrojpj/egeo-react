import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'

import { StTooltip } from 'egeo-react'

storiesOf('StTooltip', module)
  .addWithInfo('default', () => (
    <StTooltip text="Example">Click to show the tooltip</StTooltip>
  ))
  .addWithInfo('with click option', () => (
    <StTooltip text="Example" showOnClick={true}>
      Click to show the tooltip
    </StTooltip>
  ))
