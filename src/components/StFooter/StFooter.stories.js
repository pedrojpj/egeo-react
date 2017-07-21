import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StFooter } from 'egeo-react';

storiesOf('StFooter', module)
  .addWithInfo('with logo and right text', () =>
    <StFooter
      image="http://www.stratio.com/wp-content/uploads/2017/01/logo-stratio-white.png"
      rightsText="All Copyright Reserved"
    />
  )
  .addWithInfo('with links', () =>
    <StFooter
      image="http://www.stratio.com/wp-content/uploads/2017/01/logo-stratio-white.png"
      links={[
        { title: 'Home', url: 'home' },
        { title: 'Contact', url: 'contact' }
      ]}
      onLink={action('clicked')}
      rightsText="All Copyright Reserved"
    />
  );
