import React, { Component } from 'react'
import { func, bool, string, number } from 'prop-types'

import './StSearch.scss'

class StSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      focus: false
    }
  }

  onFocus() {
    this.setState({
      focus: true
    })
  }

  onBlur() {
    this.setState({
      focus: false
    })
  }

  clearInput() {
    this.searchBox.value = ''
    this.setState({
      focus: false
    })
  }

  onKeyPress(event) {
    let key = event.keyCode || event.which
    if (key === 13) {
      this.launchSearch(true)
    }

    if (!this.props.searchOnlyOnClick && this.props.liveSearch) {
      this.launchSearch(true, false)
    }
  }

  launchSearch(force = false, isFromButton = false) {
    if (this.searchBox.value.length >= this.props.minLength) {
      this.props.onSearch(this.searchBox.value)
    }
  }

  render() {
    return (
      <div styleName="st-search" className="sth-search">
        <input
          id={this.props.qaTag}
          placeholder={this.props.placeholder}
          onKeyPress={this.onKeyPress.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          ref={input => {
            this.searchBox = input
          }}
          value={this.props.value}
          styleName="st-search-input"
          className="sth-search-input"
        />

        {!this.state.focus || !this.props.hasClearButton
          ? <i
              styleName="st-search-icon"
              className="sth-search-icon icon-search"
              onMouseDown={() => this.launchSearch(true, true)}
              tabIndex="0"
            />
          : <div>
              {this.props.hasClearButton
                ? <i
                    styleName="st-search-icon"
                    className="sth-search-icon icon-cross"
                    onMouseDown={this.clearInput.bind(this)}
                    tabIndex="0"
                  />
                : false}

            </div>}
      </div>
    )
  }
}

StSearch.propTypes = {
  onSearch: func,
  searchOnlyOnClick: bool,
  value: string,
  debounce: number,
  qaTag: string,
  minLength: number,
  hasClearButton: bool,
  liveSearch: bool
}

StSearch.defaultProps = {
  onSearch: () => {},
  searchOnlyOnClick: false,
  debounce: 0,
  minLength: 0,
  qaTag: 'search',
  hasClearButton: false,
  liveSearch: true
}

export default StSearch
