import React from 'react';
import propTypes from 'prop-types';

import './Sthelp.scss';

const StHelp = props =>
  <div className="sth-help" styleName={'st-help ' + props.align}>
    <i className="icon-info1 sth-help__icon" />
    <p className="sth-help__text" styleName={props.align}>
      {props.children}
    </p>
  </div>;

StHelp.propTypes = {
  align: propTypes.oneOf(['vertical', 'horizontal'])
};

StHelp.defaultProps = {
  align: 'horizontal'
};

export default StHelp;
