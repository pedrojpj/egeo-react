import React, { Component } from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

import './StTextarea.scss'

class StTextarea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focus: props.focus,
      error: props.error,
      value: props.value
    }
  }

  componentDidMount() {
    if (this.props.validate) this.checkValidation()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.validate) this.checkValidation(nextProps)
  }

  onFocusHandler() {
    this.setState({
      focus: true
    })
  }

  onBlurHandler() {
    this.setState({
      focus: false
    })
  }

  checkValidation(props = this.props) {
    let error = false
    let value = this.textarea.value

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
      let pattern = new RegExp(props.pattern)

      if (!pattern.test(value)) {
        error = true
      }
    }

    this.setState({
      error: error
    })
  }

  onInputChange(event) {
    if (this.props.validate) {
      this.checkValidation()
    }

    this.setState(
      {
        value: event.target.value
      },
      () => {
        this.props.onChange(this.state.value)
      }
    )
  }

  render() {
    let classContainer = classNames({
      'sth-textarea-container': true,
      disabled: this.props.disabled,
      error: this.state.error
    })

    let classLabel = classNames({
      'sth-textarea-title': true,
      error: this.state.error,
      active: this.state.focus,
      disabled: this.props.disabled
    })

    let classTextarea = classNames({
      'sth-textarea-remove-default': true,
      disabled: this.props.disabled
    })

    let styleBar = classNames({
      'st-textarea-bar': true,
      'st-textarea-error-bar': this.state.error,
      'st-textarea-normal-bar': !this.state.error
    })

    let classBar = classNames({
      'sth-textarea-error-bar': this.state.error,
      'sth-textarea-normal-bar': !this.state.error
    })

    return (
      <div styleName="st-textarea" className="sth-textarea">
        <div styleName="st-textarea-container" className={classContainer}>
          {this.props.label
            ? <label
                styleName="st-textarea-title"
                className={classLabel}
                htmlFor={this.props.name}
              >
                {this.props.label}
              </label>
            : false}

          <textarea
            ref={textarea => this.textarea = textarea}
            onFocus={this.onFocusHandler.bind(this)}
            onBlur={this.onBlurHandler.bind(this)}
            onKeyUp={this.onInputChange.bind(this)}
            styleName="st-textarea-remove-default"
            className={classTextarea}
            placeholder={this.props.placeholder}
            name={this.props.name}
            disabled={this.props.disabled}
            readOnly={this.props.readOnly}
            cols={this.props.cols}
            rows={this.props.rows}
            wrap={this.props.wrap}
            maxLength={this.props.maxLength}
            minLength={this.props.minLength}
            id={this.props.qaTag}
            required={this.props.required}
            defaultValue={this.state.value}
          />
          <span className={classBar} styleName={styleBar} />
        </div>
        {this.state.error
          ? <div styleName="st-textarea-error-layout">
              <span className="sth-textarea-error-message">
                {this.props.errorMessage}
              </span>
            </div>
          : false}
      </div>
    )
  }
}

StTextarea.propTypes = {
  onChange: propTypes.func,
  focus: propTypes.bool,
  name: propTypes.string,
  maxLength: propTypes.number,
  minLength: propTypes.number,
  placeholder: propTypes.string,
  cols: propTypes.number,
  rows: propTypes.number,
  wrap: propTypes.number,
  qaTag: propTypes.string,
  pattern: propTypes.string,
  validate: propTypes.bool,
  error: propTypes.bool,
  errorMessage: propTypes.string,
  disabled: propTypes.bool,
  readOnly: propTypes.bool,
  label: propTypes.string,
  required: propTypes.bool,
  value: propTypes.node
}

StTextarea.defaultProps = {
  onChange: () => {},
  focus: false
}

export default StTextarea
