import React, { Component } from 'react'
import propTypes from 'prop-types'

import StRadio from './StRadio'

class StRadioGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.value
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    this.setState(
      {
        value: value
      },
      () => {
        this.props.onChange(this.state.value)
      }
    )
  }

  checked(value) {
    if (this.state.value === value) {
      return true
    }
  }

  render() {
    const { childContainer } = this.props

    return (
      <div>
        {this.props.children.map((child, index) => {
          const clonedChild = React.cloneElement(child, {
            checked: this.state.value
              ? this.state.value === child.props.value
              : child.props.checked,
            key: index,
            onChange: this.onChange.bind(this),
            value: child.props.value,
            name: this.props.name,
            disabled: this.props.disabled
          })

          return childContainer
            ? React.createElement(childContainer, {}, clonedChild)
            : clonedChild
        })}
      </div>
    )
  }
}

StRadioGroup.propTypes = {
  children: propTypes.arrayOf((props, propName, componentName) => {
    const prop = props[propName]
    return (
      prop.type !== StRadio &&
      new Error(`'${componentName}' only accepts 'StRadio' as children.`)
    )
  }),
  onChange: propTypes.func,
  name: propTypes.string.isRequired,
  disabled: propTypes.bool
}

StRadioGroup.defaultProps = {
  onChange: () => {}
}

export default StRadioGroup
