import React, { Component } from 'react'
import { string } from 'prop-types'

import './StInfoBox.scss'

class StInfoBox extends Component {
  render() {
    return (
      <section styleName="st-info-box">
        <div>
          <label>
            {this.props.icon ? <i className={this.props.icon} /> : false}
            {this.props.title}
          </label>
        </div>
        <div>
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

export default StInfoBox
