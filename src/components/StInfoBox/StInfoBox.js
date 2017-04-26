import React, { Component } from 'react'
import { string } from 'prop-types'
import CSSModules from 'react-css-modules'

import styles from './StInfoBox.scss'

class StInfoBox extends Component {
  render() {
    return (
      <section styleName="st-info-box">
        <div styleName="st-info-box__header">
          <label styleName="st-info-box__header__text">
            {this.props.icon
              ? <i
                  styleName="st-info-box__header__icon"
                  className={this.props.icon}
                />
              : false}
            {this.props.title}
          </label>
        </div>
        <div styleName="st-info-box__content">
          {this.props.children}
        </div>
      </section>
    )
  }
}

StInfoBox.propTypes = {
  icon: string,
  title: string
}

export default CSSModules(StInfoBox, styles)
