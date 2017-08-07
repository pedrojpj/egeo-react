import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { StInput } from 'egeo-react';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('default', () =>
  <StInput placeholder="Project name" label="Name" onChange={action('input')} />
);
stories.add('with value change', () =>
  <StInput
    placeholder="Project name"
    label="Name"
    onChange={action('input')}
    value={text('value', 'egeo')}
  />
);
stories.addWithInfo('with error', () =>
  <StInput
    placeholder="Project name"
    label="Name"
    onChange={action('input')}
    error
  />
);
stories.addWithInfo('with error and custom error Message', () =>
  <StInput
    placeholder="Project name"
    label="Name"
    onChange={action('input')}
    error
    errorMessage="This field is required"
  />
);
stories.addWithInfo('with validation required', () =>
  <StInput
    placeholder="Project name"
    label="Name"
    onChange={action('input')}
    validate
    required
  />
);
stories.addWithInfo('with validation custom', () =>
  <StInput
    placeholder="Project name"
    label="Name"
    onChange={action('input')}
    validate
    required={boolean('required', true)}
    minLength={number('minLength', 0)}
    maxLength={number('maxLength', 40)}
    pattern={text('pattern', '')}
  />
);
stories.addWithInfo('disabled', () =>
  <StInput
    placeholder="Project name"
    label="Name"
    onChange={action('input')}
    disabled
  />
);
stories.addWithInfo('readonly', () =>
  <StInput
    placeholder="Project name"
    label="Name"
    onChange={action('input')}
    value="Egeo"
    readOnly
  />
);
