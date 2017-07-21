import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StDropdown } from 'egeo-react';

let items = [
  {
    label: 'Critical Error',
    value: 1
  },
  {
    label: 'Warning',
    value: 2
  },
  {
    label: 'Lorem Ipsum',
    value: 3
  }
];

let itemsWithIcon = [
  {
    label: 'Edit',
    icon: 'icon-edit2',
    value: 'edit'
  },
  {
    label: 'Duplicate',
    icon: 'icon-copy',
    value: 'duplicate'
  },
  {
    label: 'Add',
    icon: 'icon-copy',
    value: 'add'
  },
  {
    label: 'Delete',
    icon: 'icon-copy',
    value: 'delete'
  }
];

storiesOf('StDropdown', module)
  .addWithInfo('default with items and button', () =>
    <StDropdown
      onChange={action('select item')}
      items={items}
      button="Select one item"
    />
  )
  .addWithInfo('with custom width', () =>
    <StDropdown
      onChange={action('select item')}
      width={500}
      items={items}
      button="Select one item"
    />
  )
  .addWithInfo('with value check as default', () =>
    <StDropdown
      onChange={action('select item')}
      items={items}
      button="Choose one option of menu"
      default
    />
  )
  .addWithInfo('mark as disabled', () =>
    <StDropdown
      onChange={action('select item')}
      items={items}
      disabled
      button="Select one item"
    />
  )
  .addWithInfo('with items with icons', () =>
    <StDropdown
      onChange={action('select item')}
      items={itemsWithIcon}
      button="Select one item"
    />
  );
