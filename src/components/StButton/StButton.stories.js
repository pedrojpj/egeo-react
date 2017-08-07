import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StButton } from 'egeo-react';

storiesOf('Button', module)
  .addWithInfo('with text', () =>
    <StButton onClick={action('clicked')}>Hello Button</StButton>
  )
  .addWithInfo('with icon in the left', () =>
    <StButton onClick={action('clicked')} leftIcon="icon-circle-check">
      Button with Icon left
    </StButton>
  )
  .addWithInfo('with icon in the right', () =>
    <StButton onClick={action('clicked')} rightIcon="icon-arrow-right">
      Button with Icon Right
    </StButton>
  )
  .addWithInfo('with disable option activate', () =>
    <StButton onClick={action('clicked')} disabled>
      Button Disabled
    </StButton>
  )
  .addWithInfo('with type class btnLink', () =>
    <StButton
      onClick={action('clicked')}
      typeClass="btnLink"
      leftIcon="icon-circle-check"
    >
      Button Link
    </StButton>
  )
  .addWithInfo('with type class btnTool', () =>
    <StButton
      onClick={action('clicked')}
      typeClass="btnTool"
      leftIcon="icon-circle-check"
    />
  );
