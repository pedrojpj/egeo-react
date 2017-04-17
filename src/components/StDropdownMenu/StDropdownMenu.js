import React, { Component } from "react";
import { string, number, arrayOf, bool, func, shape, node } from "prop-types";

import "./StDropdownMenu.scss";

const StDropdownMenuItem = props => (
  <li
    tabindex="0"
    id={props.qaTag + "item" + props.item.value}
    className="sth-dropdown-menu-item"
  >
    {props.item.icon ? <i className={props.item.icon} /> : false}
    {props.item.label}
  </li>
);

class StDropdownMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.active
          ? <div className="sth-dropdown-menu dropdown-menu">

              <ul aria-hidden={!this.props.active} aria-label="submenu">
                {this.props.items.map(item => {
                  return <StDropdownMenuItem item={item} />;
                })}
              </ul>

            </div>
          : false}
      </div>
    );
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
  )
};

StDropdownMenu.defaultProps = {
  items: []
};

export default StDropdownMenu;
