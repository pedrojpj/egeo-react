import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, number } from '@kadira/storybook-addon-knobs'

import { StTextarea } from 'egeo-react'

const stories = storiesOf('StTextarea', module)

stories.addDecorator(withKnobs)

stories.addWithInfo('default', () => (
  <StTextarea name="example" onChange={action('input')} label="Comment" />
))

stories.addWithInfo('with placeholder', () => (
  <StTextarea
    name="example"
    label="Comment"
    onChange={action('input')}
    placeholder="Enter your comment"
  />
))

stories.addWithInfo('disabled', () => (
  <StTextarea
    name="example"
    disabled
    label="Comment"
    onChange={action('input')}
    placeholder="Enter your comment"
  />
))

stories.addWithInfo('with value', () => (
  <StTextarea
    name="example"
    onChange={action('input')}
    placeholder="Enter your comment"
    label="comment"
    value="My comment"
  />
))

stories.addWithInfo('readOnly', () => (
  <StTextarea
    name="example"
    readOnly
    onChange={action('input')}
    placeholder="Enter your comment"
  >
    My comment
  </StTextarea>
))

stories.addWithInfo('with validation required', () => (
  <StTextarea
    placeholder="Project name"
    label="Name"
    onChange={action('input')}
    validate
    required
  />
))

stories.addWithInfo('with error and custom error Message', () => (
  <StTextarea
    placeholder="Project name"
    label="Name"
    onChange={action('input')}
    error
    errorMessage="This field is required"
  />
))
