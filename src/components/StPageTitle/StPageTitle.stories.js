import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { StPageTitle } from 'egeo-react';

storiesOf('StPageTitle', module).addWithInfo('default with title', () => (
  <StPageTitle title="Page Title" />
));

storiesOf(
  'StPageTitle',
  module
).addWithInfo('default with title and pretitle', () => (
  <StPageTitle title="Egeo" preTitle="Project:" />
));

storiesOf(
  'StPageTitle',
  module
).addWithInfo('default with title and pretitle and button left', () => (
  <StPageTitle
    title="Egeo"
    preTitle="Project:"
    leftButton="icon-reply"
    onClickButton={action('click button')}
  />
));
