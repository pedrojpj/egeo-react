import React, { Component } from 'react'
import { string, bool, oneOf } from 'prop-types'
import classNames from 'classnames'
import enhanceWithClickOutside from 'react-click-outside'

import { Manager, Target, Popper, Arrow } from 'react-popper'

import './StTooltip.scss'

class StTooltip extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  onClick() {
    if (this.props.showOnClick) {
      this.setState({
        isActive: true
      })
    }
  }

  handleClickOutside() {
    if (this.props.showOnClick) {
      this.setState({
        isActive: false
      })
    }
  }

  onMouseEnter() {
    if (!this.props.showOnClick) {
      this.setState({
        isActive: true
      })
    }
  }

  onMouseLeave() {
    if (!this.props.showOnClick) {
      this.setState({
        isActive: false
      })
    }
  }

  stylePop() {
    let styles = {}

    if (this.state.isActive) {
      styles.display = 'block'
    } else {
      styles.display = 'none'
    }

    return styles
  }

  render() {
    return (
      <Manager>
        <span className="st-tooltip">
          <span
            styleName="st-tooltip-content"
            className="sth-tooltip-content"
            onClick={this.onClick.bind(this)}
            onMouseEnter={this.onMouseEnter.bind(this)}
            onMouseLeave={this.onMouseLeave.bind(this)}
          >
            <Target>
              <span id={this.props.qaTag} className="sth-tooltip-content-link">
                {this.props.children}
              </span>
            </Target>

            <Popper placement={this.props.placement} className="popper">
              <span
                style={this.stylePop()}
                className="sth-tooltip-content-text"
                styleName="st-tooltip-content-text"
              >
                {this.props.text}
                <Arrow
                  className="popper__arrow"
                  styleName={'st-tooltip-arrow ' + this.props.placement}
                />

              </span>
            </Popper>
          </span>
        </span>
      </Manager>
    )
  }
}

StTooltip.propTypes = {
  text: string,
  qaTag: string,
  showOnClick: bool,
  placement: oneOf(['top', 'bottom', 'right', 'left'])
}

StTooltip.defaultProps = {
  qaTag: 'tooltip',
  placement: 'top'
}

export default enhanceWithClickOutside(StTooltip)
