import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  string,
  number,
  arrayOf,
  bool,
  func,
  shape,
  oneOf,
  node
} from 'prop-types'
import enhanceWithClickOutside from 'react-click-outside'
import StDropdownmenu from '../StDropdownMenu/StDropdownMenu'
import styles from './StDropdown.scss'

class StDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
      widthMenu: 0,
      value: props.button
    }
  }

  clickButton() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  handleClickOutside() {
    this.setState({
      isActive: false
    })
  }

  changeOption(item) {
    let value

    if (!this.props.default) {
      value = item.label
    } else {
      value = this.props.button
    }

    this.setState({
      isActive: false,
      value: value
    })

    this.props.onChange(item)
  }

  componentDidMount() {
    this.setState({
      widthMenu: ReactDOM.findDOMNode(this.buttonDropdown).offsetWidth
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items) {
      this.findSelected(nextProps.items)
    }
  }

  findSelected(items) {
    let item = items.find(object => object.selected === true)

    if (item) {
      this.setState({
        value: item.label
      })
    }
  }

  render() {
    const stylesMenu = {
      minWidth: this.state.widthMenu + 'px'
    }

    const stylesButton = {
      width: this.props.width + 'px'
    }

    return (
      <div styleName="sth-dropdown-container">
        <button
          tabIndex="0"
          style={stylesButton}
          styleName="button"
          aria-expanded={this.state.isActive}
          id={this.props.qaTag + ' button'}
          aria-haspopup="true"
          className={'button sth-dropdown-button ' + this.props.theme}
          onClick={this.clickButton.bind(this)}
          disabled={this.props.disabled}
          ref={button => {
            this.buttonDropdown = button
          }}
        >
          <span>{this.state.value}</span>
          <i className="icon-arrow4_down" />
        </button>
        <div
          className={'sth-dropdown-menu ' + this.props.theme}
          styleName="menu"
          style={stylesMenu}
        >
          <StDropdownmenu
            items={this.props.items}
            id={this.props.qaTag + 'menu'}
            className={this.props.themeClass}
            onChange={item => this.changeOption(item)}
            ref={dropdown => {
              this.dropdownMenu = dropdown
            }}
            active={this.state.isActive}
          />
        </div>
      </div>
    )
  }
}

StDropdown.propTypes = {
  width: number,
  default: bool,
  disabled: bool,
  theme: oneOf(['themeA', 'themeB']),
  items: arrayOf(
    shape({
      label: string,
      value: node,
      icon: string,
      selected: bool
    })
  ),
  onChange: func,
  qaTag: string
}

StDropdown.defaultProps = {
  default: false,
  items: [],
  theme: 'themeA',
  onChange: () => {},
  qaTag: 'dropdown'
}

export default enhanceWithClickOutside(StDropdown)
