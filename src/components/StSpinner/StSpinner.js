import React, { Component } from 'react'
import { string, bool } from 'prop-types'
import styles from './StSpinner.scss'

class StSpinner extends Component {
  render() {
    return (
      <div styleName="st-spinner">
        {this.props.loading
          ? <img src={this.props.imageUrl} alt="loading" />
          : false}
      </div>
    )
  }
}

StSpinner.propTypes = {
  imageUrl: string,
  loading: bool
}

export default StSpinner
