import React from 'react';
import propTypes from 'prop-types';

import './StInfoBox.scss';

const StInfoBox = props =>
  <section className="sth-info-box" styleName="st-info-box">
    {props.title
      ? <h3 styleName="header" className="sth-info-box__header">
          <span styleName="text" className="sth-info-box__header__text">
            {props.icon
              ? <i className={'sth-info-box__header__icon ' + props.icon} />
              : false}
            {props.title}
          </span>
        </h3>
      : false}
    <div styleName="content" className="sth-info-box__content">
      {props.children}
    </div>
  </section>;

StInfoBox.propTypes = {
  icon: propTypes.string,
  title: propTypes.string
};

export default StInfoBox;
