import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { StRadio, StRadioGroup } from 'egeo-react';

const stories = storiesOf('StRadio', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('default', () =>
  <StRadioGroup name="group" onChange={action('change')}>
    <StRadio value="1">Option 1</StRadio>
    <StRadio value="2">Option 2</StRadio>
    <StRadio value="3">Option 3</StRadio>
  </StRadioGroup>
);
stories.addWithInfo('with option checked', () =>
  <StRadioGroup name="group" onChange={action('change')}>
    <StRadio value="1">Option 1</StRadio>
    <StRadio value="2" checked>
      Option 2
    </StRadio>
    <StRadio value="3">Option 3</StRadio>
  </StRadioGroup>
);
stories.addWithInfo('disabled', () =>
  <StRadioGroup name="group" onChange={action('change')} disabled>
    <StRadio value="1">Option 1</StRadio>
    <StRadio value="2">Option 2</StRadio>
    <StRadio value="3">Option 3</StRadio>
  </StRadioGroup>
);
