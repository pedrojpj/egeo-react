import React, { Component } from 'react';
import { string, isRequired, func } from 'prop-types';

import StButton from '../StButton/StButton';
import './StPageTitle.scss';

class StPageTitle extends Component {
  render() {
    return (
      <div className="st-page-title sth-page-title">
        {this.props.leftButton
          ? <div className="button-box sth-page-title-button-box">
              <StButton
                text="Tool subtype4"
                typeClass="btnTool"
                subtypeClass="subtype4"
                id={this.props.qaTag + '-left-button'}
                leftIcon={this.props.leftButton}
                className="button-box sth-page-title-button-box"
                input="button"
                onClick={this.props.onClickButton}
              />
            </div>
          : false}
        <div className="main-title sth-page-title-main-title">
          {this.props.preTitle
            ? <span className="sth-page-title-pre-title">
                {this.props.preTitle}
              </span>
            : false}
          <span className="sth-page-title-title">{this.props.title}</span>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

StPageTitle.propTypes = {
  title: string.isRequired,
  preTitle: string,
  onClickButton: func
};

StPageTitle.defaultProps = {
  onClickButton: () => {}
};

export default StPageTitle;
