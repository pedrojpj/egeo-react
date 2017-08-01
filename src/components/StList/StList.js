import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import StSearch from '../StSearch/StSearch';

import './StList.scss';

class StListItem extends Component {
  render() {
    let itemClass = classNames({
      'sth-item-list__item': true,
      'sth-item-list__item--selected': this.props.selected
    });

    return (
      <li className={itemClass} styleName="item">
        {this.props.icon && this.props.align === 'left'
          ? <i styleName="icon left" className={this.props.icon} />
          : false}
        {this.props.children}
        {this.props.icon && this.props.align === 'right'
          ? <i styleName="icon right" className={this.props.icon} />
          : false}
      </li>
    );
  }
}

StListItem.propTypes = {
  icon: propTypes.string,
  align: propTypes.oneOf(['left', 'right']),
  selected: propTypes.bool
};

StListItem.defaultProps = {
  align: 'left'
};

class StList extends Component {
  onSearch(search) {
    this.props.onSearch(search);
  }

  render() {
    return (
      <section className="sth-item-list" styleName="list">
        {this.props.title
          ? <h3 className="sth-item-list__title" styleName="title">
              {this.props.title}
            </h3>
          : false}

        {this.props.options.search.enabled
          ? <div styleName="search">
              <StSearch
                placeholder={this.props.options.search.placeholder}
                onSearch={this.onSearch}
              />
            </div>
          : false}

        <ul>
          {this.props.children}
        </ul>
      </section>
    );
  }
}

StList.propTypes = {
  title: propTypes.string,
  options: propTypes.shape({
    search: propTypes.shape({
      enabled: propTypes.bool,
      placeholder: propTypes.string
    })
  }),
  onSearch: propTypes.func,
  children: function(props, propName, componentName) {
    const prop = props[propName];
    let error = null;
    React.Children.forEach(prop, function(child) {
      if (child.type !== StListItem) {
        error = new Error(
          '`' + componentName + '` children should be of type `St-List-Item`.'
        );
      }
    });
    return error;
  }
};

StList.defaultProps = {
  options: {
    search: {
      enabled: false
    }
  },
  onSearch: () => {}
};

export { StList, StListItem };
