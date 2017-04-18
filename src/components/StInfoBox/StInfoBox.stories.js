import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { StInfoBox } from 'egeo-react';

storiesOf('StInfoBox', module)
  .addWithInfo('default with title and content', () => (
    <StInfoBox title="MAIN TITLE"><p>You can put any content here</p></StInfoBox>
  ))
  .addWithInfo('default with title and icon', () => (
    <StInfoBox title="Cassandra" icon="icon-cassandra"><p>You can put any content here</p></StInfoBox>
  ))

