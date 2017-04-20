import React, { Component } from 'react'
import { arrayOf, bool, shape, string, func } from 'prop-types'
import classNames from 'classnames'

import './StHorizontalTabs.scss'

class StHorizontalItem extends Component {
  render() {
    let classItem = classNames({
      'st-horizontal-tabs__option': true,
      'sth-horizontal-tabs__option': true,
      'sth-horizontal-tabs__option--active': this.props.active,
      'sth-horizontal-tabs__option--disabled': this.props.option.isDisabled
    })

    return (
      <li className={classItem}>
        <a
          className="st-horizontal-tabs__option__text sth-horizontal-tabs__option__text"
          onClick={() => this.props.onChange(this.props.option)}
          id={this.props.qaTag + '-tab-' + this.props.i}
        >
          {this.props.option.text}
        </a>
      </li>
    )
  }
}

class StHorizontalTabs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeOption: props.active
    }
  }

  componentWillMount() {
    if (!this.props.active) this.activeOption(this.props.options[0])
  }

  activeOption(option) {
    if (option.isDisabled) {
      return
    }

    this.setState({
      activeOption: option.text
    })

    this.props.onChange(option.text)
  }

  checkedActiveOption(option) {
    if (option.text === this.state.activeOption) {
      return true
    }

    return false
  }

  render() {
    let linkTab = classNames({
      'st-horizontal-tabs__option__text sth-horizontal-tabs__option__text': true,
      'sth-horizontal-tabs__option--active': true
    })

    return (
      <section className="st-horizontal-tabs">
        <ul className="st-horizontal-tabs__list sth-horizontal-tabs__list">
          {this.props.options.map((option, i) => {
            return (
              <StHorizontalItem
                option={option}
                key={i}
                qaTag={this.props.qaTag}
                i={i}
                active={this.checkedActiveOption(option)}
                onChange={option => this.activeOption(option)}
              />
            )
          })}
        </ul>
      </section>
    )
  }
}

StHorizontalTabs.propTypes = {
  options: arrayOf(
    shape({
      text: string,
      isDisabled: bool
    })
  ),
  qaTag: string,
  active: string,
  onChange: func
}

StHorizontalTabs.defaultProps = {
  options: [],
  onChange: () => {},
  qaTag: 'horizontal-tab'
}

export default StHorizontalTabs
