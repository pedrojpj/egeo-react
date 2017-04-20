import React, { Component } from 'react';
import { func, string, oneOf, bool } from 'prop-types';
import './StButton.scss';

class StButton extends Component {
  getButtonTypeClass() {
    let cssClass = '';

    if (this.props.typeClass) {
      cssClass +=
        'st-button--' +
        this.props.typeClass +
        ' sth-button--' +
        this.props.typeClass;
    }

    if (this.props.subtypeClass) {
      cssClass +=
        cssClass +
        ' ' +
        'st-button--' +
        this.props.typeClass +
        '-' +
        this.props.subtypeClass +
        ' sth-button--' +
        this.props.typeClass +
        '-' +
        this.props.subtypeClass;
    }

    if (this.props.themeClass) {
      cssClass +=
        cssClass +
        ' ' +
        'st-button--' +
        this.props.themeClass +
        ' sth-button--' +
        this.props.themeClass;
    }

    return cssClass;
  }

  render() {
    return (
      <button
        id={this.props.qaTag}
        type={this.props.type}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        className={'st-button sth-button ' + this.getButtonTypeClass()}
      >
        {this.props.leftIcon
          ? <i className={'st-button__icon ' + this.props.leftIcon} />
          : false}

        <span className="st-button__text">
          {this.props.text ? this.props.text : this.props.children}
        </span>

        {this.props.rightIcon
          ? <i className={'st-button__icon ' + this.props.rightIcon} />
          : false}
      </button>
    );
  }
}

StButton.propTypes = {
  click: func,
  leftIcon: string,
  rightIcon: string,
  qaTag: string,
  type: oneOf(['button', 'submit']),
  disabled: bool,
  themeClass: string,
  typeClass: string,
  subtypeClass: string,
  text: string
};

StButton.defaultProps = {
  type: 'button',
  subtypeClass: 'default',
  typeClass: 'btnMain',
  qaTag: 'button'
};

export default StButton;
