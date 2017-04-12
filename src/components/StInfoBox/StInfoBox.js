import React, { Component } from 'react';
import { string } from 'prop-types';

import './StInfoBox.scss';

class StInfoBox extends Component {

  render() {
    return (
      <section className="st-info-box">
        <div className="st-info-box__header">
          <label className="st-info-box__header__text">
            {this.props.icon ? <i className={this.props.icon + ' st-info-box__header__icon'}></i> : false}
            {this.props.title}
          </label>
        </div>
        <div className="st-info-box__content">
          {this.props.children}
        </div>
      </section>
    )
  }

}

StInfoBox.propTypes = {
  icon: string,
  title: string
}

export default StInfoBox;
