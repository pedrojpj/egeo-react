import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StHorizontalTabs } from 'egeo-react';

storiesOf('Horizontal Tabs', module)
  .addWithInfo('default with options', () =>
    <StHorizontalTabs
      onChange={action('changed')}
      options={[{ text: 'Tab1' }, { text: 'Tab2' }]}
    />
  )
  .addWithInfo('default with option selected', () =>
    <StHorizontalTabs
      onChange={action('changed')}
      options={[{ text: 'Tab1' }, { text: 'Tab2' }]}
      active="Tab2"
    />
  )
  .addWithInfo('with option disabled', () =>
    <StHorizontalTabs
      onChange={action('changed')}
      options={[
        { text: 'Tab1' },
        { text: 'Tab2' },
        { text: 'Tab3', isDisabled: true }
      ]}
      active="Tab2"
    />
  );
