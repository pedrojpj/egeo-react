import React from 'react';
import propTypes from 'prop-types';
import './StSpinner.scss';

const StSpinner = props =>
  <div styleName="st-spinner" className="sth-spinner">
    {props.loading ? <img src={props.image} alt="Loading" /> : false}
  </div>;

StSpinner.propTypes = {
  image: propTypes.string,
  loading: propTypes.bool
};

export default StSpinner;
