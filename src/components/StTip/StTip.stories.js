import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StTip } from 'egeo-react';

storiesOf('StTip', module).addWithInfo('default', () =>
  <StTip>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
  </StTip>
);
