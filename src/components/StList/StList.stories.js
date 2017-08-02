import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StList, StListItem } from 'egeo-react';

storiesOf('StList', module)
  .addWithInfo('default', () =>
    <StList>
      <StListItem onClick={action('click')}>Item 1</StListItem>
      <StListItem onClick={action('click')}>Item 2</StListItem>
      <StListItem onClick={action('click')}>Item 3</StListItem>
    </StList>
  )
  .addWithInfo('default with icons', () =>
    <StList>
      <StListItem icon="icon-arrow-right">Item 1</StListItem>
      <StListItem icon="icon-arrow-right">Item 2</StListItem>
      <StListItem icon="icon-arrow-right">Item 3</StListItem>
    </StList>
  )
  .addWithInfo('with title', () =>
    <StList title="This is the title">
      <StListItem onClick={action('click')}>Item 1</StListItem>
      <StListItem onClick={action('click')}>Item 2</StListItem>
      <StListItem onClick={action('click')}>Item 3</StListItem>
    </StList>
  )
  .addWithInfo('with align right', () =>
    <StList>
      <StListItem onClick={action('click')} align="right">
        Item 1
      </StListItem>
      <StListItem onClick={action('click')} align="right">
        Item 2
      </StListItem>
      <StListItem onClick={action('click')} align="right">
        Item 3
      </StListItem>
    </StList>
  )
  .addWithInfo('with search', () =>
    <StList
      onSearch={action('search')}
      options={{ search: { enabled: true, placeholder: 'Enter your search' } }}
    >
      <StListItem onClick={action('click')}>Item 1</StListItem>
      <StListItem onClick={action('click')}>Item 2</StListItem>
      <StListItem onClick={action('click')}>Item 3</StListItem>
    </StList>
  );
