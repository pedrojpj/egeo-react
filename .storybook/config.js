import { configure, setAddon, addDecorator } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import React from 'react';


addDecorator((story) => (
  <div style={{textAlign: 'center', padding: 20}}>
      {story()}
  </div>
));


setAddon(infoAddon);

const req = require.context('../src/components', true, /^\.\/.*\.stories.js$/)

function loadStories() {
  require('../stories');
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
