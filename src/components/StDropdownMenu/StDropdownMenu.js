import React, { Component } from 'react'
import { string, arrayOf, bool, func, shape, node } from 'prop-types'
import CSSModules from 'react-css-modules'

import styles from './StDropdownMenu.scss'

const StDropdownMenuItem = props => (
  <li
    tabIndex="0"
    id={props.qaTag + 'item' + props.item.value}
    className="sth-dropdown-menu-item"
    onClick={props.onClick}
  >
    {props.item.icon ? <i styleName={props.item.icon} /> : false}
    {props.item.label}
  </li>
)

class StDropdownMenu extends Component {
  selectItem(item) {
    this.props.onChange(item)
  }

  render() {
    return (
      <div>
        {this.props.active
          ? <div styleName="dropdown-menu" className="sth-dropdown-menu">

              <ul aria-hidden={!this.props.active} aria-label="submenu">
                {this.props.items.map((item, i) => {
                  return (
                    <StDropdownMenuItem
                      item={item}
                      key={i}
                      onClick={() => this.selectItem(item)}
                    />
                  )
                })}
              </ul>

            </div>
          : false}
      </div>
    )
  }
}

StDropdownMenu.propTypes = {
  active: bool,
  items: arrayOf(
    shape({
      label: string,
      value: node,
      icon: string,
      selected: bool
    })
  ),
  onChange: func
}

StDropdownMenu.defaultProps = {
  items: [],
  onChange: () => {}
}

export default CSSModules(StDropdownMenu, styles, { allowMultiple: true })
