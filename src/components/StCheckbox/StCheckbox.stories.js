import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { StCheckbox } from 'egeo-react';

const stories = storiesOf('StCheckbox', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('default', () =>
  <StCheckbox name="check" value="1" onChange={action('change')}>
    Checkbox
  </StCheckbox>
);
stories.addWithInfo('with checked default', () =>
  <StCheckbox name="check" value="1" checked onChange={action('change')}>
    Checkbox
  </StCheckbox>
);
stories.addWithInfo('with disabled', () =>
  <StCheckbox
    name="check"
    checked
    disabled
    value="1"
    onChange={action('change')}
  >
    Checkbox
  </StCheckbox>
);
