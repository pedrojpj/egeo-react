import { configure, setAddon, addDecorator } from '@kadira/storybook'
import { setOptions } from '@kadira/storybook-addon-options'

import infoAddon from '@kadira/react-storybook-addon-info'
import React from 'react'

addDecorator(story => (
  <div style={{ textAlign: 'center', padding: 20 }}>
    {story()}
  </div>
))

setAddon(infoAddon)

setOptions({
  name: 'Egeo React',
  url: 'https://github.com/kadirahq/storybook-addon-options',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true
})

const req = require.context('../src/components', true, /^\.\/.*\.stories.js$/)

function loadStories() {
  require('../stories')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
