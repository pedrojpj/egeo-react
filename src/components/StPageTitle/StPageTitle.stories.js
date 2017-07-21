import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StPageTitle, StSearch } from 'egeo-react';

storiesOf('StPageTitle', module).addWithInfo('default with title', () =>
  <StPageTitle title="Page Title" />
);

storiesOf(
  'StPageTitle',
  module
).addWithInfo('default with title and pretitle', () =>
  <StPageTitle title="Egeo" preTitle="Project:" />
);

storiesOf(
  'StPageTitle',
  module
).addWithInfo('default with title and pretitle and button left', () =>
  <StPageTitle
    title="Egeo"
    preTitle="Project:"
    leftButton="icon-reply"
    onClickButton={action('click button')}
  />
);

storiesOf('StPageTitle', module).addWithInfo('with right content', () =>
  <StPageTitle
    title="Egeo"
    preTitle="Project:"
    leftButton="icon-reply"
    onClickButton={action('click button')}
  >
    <StSearch placeholder="Text for search" onSearch={action('search')} />
  </StPageTitle>
);
