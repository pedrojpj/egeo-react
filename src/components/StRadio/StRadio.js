import React, { Component } from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

import './StRadio.scss'

class StRadio extends Component {
  clickRadio() {
    this.props.onChange(this.props.value)
  }

  componentDidMount() {
    if (this.props.checked) {
      this.clickRadio()
    }
  }

  render() {
    let labelStyle = classNames({
      'st-radio': true,
      disabled: this.props.disabled
    })

    let customRadioClass = classNames({
      'sth-radio-custom': true,
      checked: this.props.checked
    })

    let customRadioStyle = classNames({
      'custom-radio': true,
      checked: this.props.checked
    })

    return (
      <label styleName={labelStyle} className="sth-radio" id={this.props.qaTag}>
        <input
          type="radio"
          name={this.props.name}
          style={{ display: 'none' }}
          checked={this.props.checked}
          disabled={this.props.disabled}
          value={this.props.value}
          onClick={this.clickRadio.bind(this)}
          onChange={() => {}}
        />

        <div styleName={customRadioStyle} className={customRadioClass} />
        {this.props.children}
      </label>
    )
  }
}

StRadio.propTypes = {
  checked: propTypes.bool,
  value: propTypes.string,
  name: propTypes.string,
  disabled: propTypes.bool,
  onChange: propTypes.func
}

StRadio.defaultProps = {
  checked: false,
  disabled: false,
  name: 'stRadio',
  onChange: () => {}
}

export default StRadio
