import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'

import { StSearch } from 'egeo-react'

storiesOf('StSearch', module).addWithInfo('default with normal search', () => (
  <StSearch placeholder="Text for search" onSearch={action('search')} />
))
storiesOf('StSearch', module).addWithInfo('with clear button', () => (
  <StSearch
    placeholder="Text for search"
    hasClearButton={true}
    onSearch={action('search')}
  />
))
storiesOf('StSearch', module).addWithInfo('live search disabled', () => (
  <StSearch
    placeholder="Text for search"
    liveSearch={false}
    onSearch={action('search')}
  />
))
storiesOf(
  'StSearch',
  module
).addWithInfo(
  'default with normal search and minlength of 3 characters',
  () => (
    <StSearch
      placeholder="Text for search"
      onSearch={action('search')}
      minLength={3}
    />
  )
)
