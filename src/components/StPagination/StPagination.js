import React, { Component } from 'react'
import { string, number, arrayOf, bool, func, shape, oneOf } from 'prop-types'

import StButton from '../StButton/StButton'
import StDropdown from '../StDropdown/StDropdown'

import './StPagination.scss'

class StPagination extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstItem: 1,
      lastItem: 1,
      disablePrevButton: false,
      disableNextButton: false,
      currentPage: 1,
      perPage: props.perPage,
      items: []
    }
  }

  componentDidMount() {
    this.updatePages()
    this.generateItems()
  }
  nextPage() {
    this.setState(
      {
        currentPage: this.state.currentPage + 1
      },
      () => {
        this.updatePages()
      }
    )
  }

  generateItems() {
    let items = []

    this.props.perPageOptions.forEach(option => {
      items.push(this.generateItem(option))
    })

    this.setState({
      items: items
    })
  }

  generateItem(n) {
    return {
      label: `${this.props.label.display} ${n} ${this.props.label.element} ${this.props.label.perPage}`,
      value: n,
      selected: this.checkSelected(n)
    }
  }

  updateSelected(item) {
    let items = Object.assign([], this.state.items)

    items.map(i => {
      if (i.label === item.label) {
        i.selected = item.selected
      } else {
        i.selected = false
      }
    })

    this.setState({
      items: items
    })
  }

  checkSelected(value) {
    if (this.props.perPage === value) {
      return true
    }
    return false
  }

  prevPage() {
    this.setState(
      {
        currentPage: this.state.currentPage - 1
      },
      () => {
        this.updatePages()
      }
    )
  }

  updatePages(emit = true) {
    let lastItem = this.state.perPage * this.state.currentPage
    let firstItem
    let disableNextButton
    let disablePrevButton

    if (this.state.currentPage === 1) {
      firstItem = this.state.currentPage
      disablePrevButton = true
    } else {
      firstItem = this.state.perPage * (this.state.currentPage - 1) + 1
      disablePrevButton = false
    }

    if (lastItem >= this.props.total) {
      lastItem = this.props.total
      disableNextButton = true
    } else {
      disableNextButton = false
    }

    this.setState((prevState, props) => {
      return {
        lastItem: lastItem,
        disableNextButton: disableNextButton,
        firstItem: firstItem,
        disablePrevButton: disablePrevButton
      }
    })

    if (emit) {
      this.props.onChange({
        currentPage: this.state.currentPage,
        perPage: this.state.perPage
      })
    }
  }

  onChangePerPage(item) {
    this.setState(
      {
        currentPage: 1,
        perPage: item.value
      },
      () => this.updatePages()
    )
    this.updateSelected(item)
  }

  showItemsPerPage() {
    if (this.props.showPerPage) {
      return true
    }

    if (this.props.hidePerPage) {
      return false
    }

    if (this.props.total <= 50) {
      return false
    }

    return true
  }

  getThemeDropdown() {
    if (this.props.theme === 'themeA') {
      return 'themeB'
    }

    return 'themeA'
  }

  render() {
    return (
      <div className={'sth-pagination pagination ' + this.props.theme}>
        {this.showItemsPerPage()
          ? <div className="selector">
              <StDropdown
                items={this.state.items}
                theme={this.getThemeDropdown()}
                id={'dropdown' + this.props.qaTag}
                onChange={item => this.onChangePerPage(item)}
              />
            </div>
          : false}

        <div className="navigator sth-pagination-navigator">
          <p className="sth-pagination-pages">
            {this.state.firstItem} - {this.state.lastItem} of {this.props.total}
          </p>

          <div className="buttons">

            <StButton
              typeClass="btnTool"
              subtypeClass="subtype4"
              id={'buttonPrev' + this.props.qaTag}
              leftIcon="icon-arrow2_left"
              onClick={this.prevPage.bind(this)}
              disabled={this.state.disablePrevButton}
            />

            <StButton
              typeClass="btnTool"
              subtypeClass="subtype4"
              id={'buttonNext' + this.props.qaTag}
              leftIcon="icon-arrow2_right"
              onClick={this.nextPage.bind(this)}
              disabled={this.state.disableNextButton}
            />

          </div>
        </div>
      </div>
    )
  }
}

StPagination.propTypes = {
  total: number,
  perPage: number,
  perPageOptions: arrayOf(number),
  currentPage: number,
  qaTag: string,
  showPerPage: bool,
  hidePerPage: bool,
  theme: oneOf(['themeA', 'themeB']),
  onChange: func,
  label: shape({
    display: string,
    element: string,
    perPage: string,
    of: string
  })
}

StPagination.defaultProps = {
  perPage: 20,
  perPageOptions: [20, 50, 100],
  currentPage: 1,
  theme: 'themeA',
  showPerPage: false,
  hidePerPage: false,
  onChange: () => {},
  label: {
    display: 'Display',
    element: 'elements',
    perPage: 'per page',
    of: 'of'
  }
}

export default StPagination
