import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'

import { StDropdown } from 'egeo-react'

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
]

storiesOf('StDropdown', module)
    .addWithInfo('default with items and button', () => (
        <StDropdown onChange={action('change pagination')} items={items} button="Select one item" />
    ))

