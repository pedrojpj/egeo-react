import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StInfoCard } from 'egeo-react';

storiesOf('Info Card', module)
  .addWithInfo('default with title', () =>
    <StInfoCard title="MAIN TITLE">
      <p>You can put any content here</p>
    </StInfoCard>
  )
  .addWithInfo('default with title and image', () =>
    <StInfoCard
      title="Cassandra"
      image="https://stratio.github.io/egeo-web/1.3.1/assets/images/stratio.png"
    >
      <p>You can put any content here</p>
    </StInfoCard>
  );
