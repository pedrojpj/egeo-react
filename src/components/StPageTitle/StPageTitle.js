import React, { Component } from 'react'
import PropTypes from 'prop-types'

import StButton from '../StButton/StButton'
import styles from './StPageTitle.scss'

class StPageTitle extends Component {
  render() {
    return (
      <div styleName="st-page-title" className="sth-page-title">
        {this.props.leftButton
          ? <div styleName="button-box" className="sth-page-title-button-box">
              <StButton
                text="Tool subtype4"
                typeClass="btnTool"
                subtypeClass="subtype4"
                id={this.props.qaTag + '-left-button'}
                leftIcon={this.props.leftButton}
                styleName="button-box"
                className="sth-page-title-button-box"
                input="button"
                onClick={this.props.onClickButton}
              />
            </div>
          : false}
        <div styleName="main-title" className="sth-page-title-main-title">
          {this.props.preTitle
            ? <span className="sth-page-title-pre-title">
                {this.props.preTitle}
              </span>
            : false}
          <span className="sth-page-title-title">{this.props.title}</span>
        </div>
        <div styleName="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

StPageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  preTitle: PropTypes.string,
  onClickButton: PropTypes.func
}

StPageTitle.defaultProps = {
  onClickButton: () => {}
}

export default StPageTitle
