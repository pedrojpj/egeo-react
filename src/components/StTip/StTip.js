import React from 'react';

import './StTip.scss';

const StTip = props =>
  <div className="sth-tip" styleName="st-tip">
    <i className="icon-pin sth-tip__icon" />
    <p className="sth-tip__text">
      {props.children}
    </p>
  </div>;

export default StTip;
