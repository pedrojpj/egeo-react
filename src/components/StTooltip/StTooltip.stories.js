import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { StTooltip } from 'egeo-react';

const stories = storiesOf('StTooltip', module);

stories.addDecorator(withKnobs);

const placements = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};

stories
  .addWithInfo('default', () =>
    <StTooltip text="Example">Click to show the tooltip</StTooltip>
  )
  .addWithInfo('with click option', () =>
    <StTooltip text="Example" showOnClick={true}>
      Click to show the tooltip
    </StTooltip>
  )
  .addWithInfo('with position bottom', () =>
    <StTooltip text="Example" placement="bottom">
      Click to show the tooltip
    </StTooltip>
  )
  .addWithInfo('with position custom', () =>
    <StTooltip
      text="Example"
      placement={select('Placements', placements, 'top')}
    >
      Click to show the tooltip
    </StTooltip>
  );
