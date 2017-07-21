import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import { StPagination } from 'egeo-react';

storiesOf('StPagination', module)
  .addWithInfo('default with total 200', () =>
    <StPagination onChange={action('change pagination')} total={200} />
  )
  .addWithInfo('default with themeB', () =>
    <StPagination total={200} theme="themeB" />
  )
  .addWithInfo('with perPage 50 and total 1000', () =>
    <StPagination total={1000} perPage={50} />
  )
  .addWithInfo('with hidePerPage option', () =>
    <StPagination total={1000} hidePerPage />
  )
  .addWithInfo('with total less than 200 to hide PerPage', () =>
    <StPagination total={50} />
  )
  .addWithInfo('with total less than 200 and showPerPage option enabled', () =>
    <StPagination total={50} showPerPage />
  )
  .addWithInfo('change currentPage', () =>
    <StPagination currentPage={3} total={200} />
  )
  .addWithInfo('change perPageOptions', () =>
    <StPagination perPageOptions={[5, 10, 20]} perPage={5} total={200} />
  );
