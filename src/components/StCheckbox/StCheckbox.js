import React, { Component } from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

import './StCheckbox.scss'

class StCheckbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: this.props.checked
    }
  }

  handleClick() {
    this.setState({
      checked: !this.state.checked
    })
  }

  handleChange() {
    this.props.onChange({
      checked: this.state.checked,
      value: this.props.value
    })
  }

  render() {
    let classCustom = classNames({
      'sth-checkbox-custom': true,
      'icon-check2': this.state.checked
    })

    let styleCheckbox = classNames({
      'sth-checkbox': true,
      disabled: this.props.disabled
    })

    return (
      <label className={styleCheckbox} styleName="st-checkbox">
        <div className="sth-checkbox-container">
          <input
            type="checkbox"
            ref={input => this.input}
            name={this.props.name}
            required={this.props.required}
            checked={this.props.checked}
            disabled={this.props.disabled}
            value={this.props.value}
            style={{ display: 'none' }}
            readOnly={this.props.readOnly}
            onClick={this.handleClick.bind(this)}
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <div styleName="custom-checkbox" className={classCustom} />

        {this.props.children
          ? <span className="sth-checkbox-label" styleName="label">
              {this.props.children}
            </span>
          : false}

      </label>
    )
  }
}

StCheckbox.propTypes = {
  onChange: propTypes.func,
  disabled: propTypes.bool,
  value: propTypes.node,
  name: propTypes.string,
  checked: propTypes.bool,
  required: propTypes.bool,
  readOnly: propTypes.bool
}

StCheckbox.defaultProps = {
  onChange: () => {},
  disabled: false
}

export default StCheckbox
