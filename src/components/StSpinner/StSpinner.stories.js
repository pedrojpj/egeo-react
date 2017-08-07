import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StSpinner } from 'egeo-react';

storiesOf('Spinner', module).addWithInfo('default spinner', () =>
  <StSpinner
    imageUrl="https://stratio.github.io/egeo-web/1.3.1/assets/images/loading_spinner.gif"
    loading
  />
);
