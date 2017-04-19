import React, { Component } from 'react';
import { arrayOf, bool, shape, string } from 'prop-types';
import classNames from 'classnames';

import './StHorizontalTabs.scss';

class StHorizontalItem extends Component {
  render() {
    return (
      <li className="st-horizontal-tabs__option sth-horizontal-tabs__option">
        <a onClick={() => this.props.activeOption()}>
          {this.props.option.text}
        </a>
      </li>
    );
  }
}

class StHorizontalTabs extends Component {
  activeOption(option) {
    console.log(option);
  }

  render() {
    let linkTab = classNames({
      'st-horizontal-tabs__option__text sth-horizontal-tabs__option__text': true,
      'sth-horizontal-tabs__option--active': true
    });

    return (
      <section className="st-horizontal-tabs">
        <ul className="st-horizontal-tabs__list sth-horizontal-tabs__list">
          {this.props.options.map((option, i) => {
            return <StHorizontalItem option={option} key={i} />;
          })}
        </ul>
      </section>
    );
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
  activeOption: string
};

StHorizontalTabs.defaultProps = {
  options: []
};

export default StHorizontalTabs;
