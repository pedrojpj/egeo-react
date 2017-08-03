import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StHelp } from 'egeo-react';

storiesOf('Help', module)
  .addWithInfo('default', () =>
    <StHelp>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
    </StHelp>
  )
  .addWithInfo('with align vertical', () =>
    <StHelp align="vertical">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
    </StHelp>
  );
