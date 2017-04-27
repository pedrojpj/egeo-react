import React, { Component } from 'react'
import classNames from 'classnames'
import { string, bool, oneOf, number, func } from 'prop-types'

import './StInput.scss'

class StInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focus: props.isFocused,
      error: props.error
    }
  }

  componentDidMount() {
    if (this.props.validate) this.checkValidation()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.validate) this.checkValidation(nextProps)
  }

  checkValidation(props = this.props) {
    let error = false
    let value = this.input.value

    if (props.required && !value) {
      error = true
    }

    if (value.length < props.minLength) {
      error = true
    }

    if (value.length > props.maxLength) {
      error = true
    }

    if (props.pattern) {
      let patter = new RegExp(props.pattern)

      if (!patter.test(value)) {
        error = true
      }
    }

    this.setState({
      error: error
    })
  }

  onInputBlur() {
    this.setState({
      focus: false
    })
  }

  onInputFocus() {
    this.setState({
      focus: true
    })
  }

  onInputChange(event) {
    if (this.props.validate) {
      this.checkValidation()
    }

    this.props.onChange(event.target.value)
  }

  getClassBarType() {
    return this.state.error ? 'sth-input-error-bar' : 'sth-input-normal-bar'
  }

  getStyleBarType() {
    return this.state.error ? 'st-input-error-bar' : 'st-input-normal-bar'
  }

  render() {
    let classInputContainer = classNames({
      'sth-input-container': true,
      disabled: this.props.disabled,
      error: this.state.error
    })

    let classLabel = classNames({
      'sth-input-title': true,
      error: this.state.error,
      active: this.props.focus,
      disabled: this.props.disabled
    })

    let classInput = classNames({
      'sth-input-remove-default': true,
      disabled: this.props.disabled
    })

    return (
      <div styleName="st-input" className="sth-input">
        <div className={classInputContainer} styleName="st-input-container">
          <label
            className={classLabel}
            htmlFor={this.props.name}
            styleName="st-input-title"
          >
            <span>{this.props.label}</span>
          </label>
          <input
            ref={input => this.input = input}
            onFocus={this.onInputFocus.bind(this)}
            onBlur={this.onInputBlur.bind(this)}
            onKeyUp={this.onInputChange.bind(this)}
            className={classInput}
            styleName="st-input-remove-default"
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
            readOnly={this.props.readOnly}
            name={this.props.name}
            type={this.props.type}
            value={this.props.value}
            maxLength={this.props.maxLength}
            minLength={this.props.minLength}
            id={this.props.qaTag}
          />

          <span
            className={this.getClassBarType()}
            styleName={'st-input-bar ' + this.getStyleBarType()}
          />
        </div>
        <div className="st-input-error-layout">
          {this.state.error
            ? <span className="sth-input-error-message">
                {this.props.errorMessage}
              </span>
            : false}
        </div>
      </div>
    )
  }
}

StInput.propTypes = {
  label: string,
  disabled: bool,
  readOnly: bool,
  placeholder: string,
  name: string,
  type: oneOf(['text', 'number', 'password']),
  qaTag: string,
  required: bool,
  maxLength: number,
  minLength: number,
  pattern: string,
  isFocused: bool,
  validate: bool,
  error: bool,
  errorMessage: string,
  onChange: func,
  value: string
}

StInput.defaultProps = {
  type: 'text',
  qaTag: 'input',
  isFocused: false,
  validate: false,
  error: false,
  onChange: () => {},
  errorMessage: 'This field have errors'
}

export default StInput
