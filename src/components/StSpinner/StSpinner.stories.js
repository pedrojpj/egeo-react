import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { StSpinner } from 'egeo-react';

storiesOf('StSpinner', module)
  .addWithInfo('default spinner', () => (
    <StSpinner imageUrl="https://stratio.github.io/egeo-web/1.3.1/assets/images/loading_spinner.gif" loading />
  ))

