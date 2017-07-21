import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { StSearch } from 'egeo-react';

const stories = storiesOf('StSearch', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('default with normal search', () =>
  <StSearch placeholder="Text for search" onSearch={action('search')} />
);
stories.addWithInfo('with clear button', () =>
  <StSearch
    placeholder="Text for search"
    hasClearButton={true}
    onSearch={action('search')}
  />
);
stories.addWithInfo('live search disabled', () =>
  <StSearch
    placeholder="Text for search"
    liveSearch={false}
    onSearch={action('search')}
  />
);
stories.addWithInfo(
  'default with normal search and minlength of 3 characters',
  () =>
    <StSearch
      placeholder="Text for search"
      onSearch={action('search')}
      minLength={3}
    />
);

stories.add('default with normal search and custom minlength', () =>
  <StSearch
    placeholder="Text for search"
    onSearch={action('search')}
    minLength={number('minLength', 3)}
  />
);
