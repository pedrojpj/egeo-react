import React, { Component } from 'react'
import classNames from 'classnames'

import './StInput.scss'

class StInput extends Component {
  render() {
    let classInputContainer = classNames({
      'st-input': true,
      'sth-input': true,
      disabled: this.props.isDisabled,
      error: this.showError()
    })

    return (
      <div className="st-input sth-input">
        <div className={classInputContainer}>
          Input
        </div>
      </div>
    )
  }
}

export default StInput
