/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import React from 'react';

addDecorator(story =>
  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
    {story()}
  </div>
);

setAddon(infoAddon);

const req = require.context('../src/components', true, /^\.\/.*\.stories.js$/);

setOptions({
  name: 'Egeo React',
  url: 'https://github.com/kadirahq/storybook-addon-options',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true
});

function loadStories() {
  require('../stories');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
