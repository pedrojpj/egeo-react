import React, { Component } from "react";
import { string, number, arrayOf, bool, func } from "prop-types";

import StButton from "../StButton/StButton";

import "./StPagination.scss";

class StPagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstItem: 1,
      lastItem: 1,
      disablePrevButton: false,
      disableNextButton: false,
      currentPage: 1
    };
  }

  componentDidMount() {
    this.updatePages();
  }
  nextPage() {
    this.setState(
      {
        currentPage: this.state.currentPage + 1
      },
      () => {
        this.updatePages();
      }
    );
  }

  prevPage() {
    this.setState(
      {
        currentPage: this.state.currentPage - 1
      },
      () => {
        this.updatePages();
      }
    );
  }

  updatePages(emit = true) {
    let lastItem = this.props.perPage * this.state.currentPage;
    let firstItem;
    let disableNextButton;
    let disablePrevButton;

    if (this.state.currentPage === 1) {
      firstItem = this.state.currentPage;
      disablePrevButton = true;
    } else {
      firstItem = this.props.perPage * (this.state.currentPage - 1) + 1;
      disablePrevButton = false;
    }

    if (lastItem >= this.props.total) {
      lastItem = this.props.total;
      disableNextButton = true;
    } else {
      disableNextButton = false;
    }

    this.setState((prevState, props) => {
      return {
        lastItem: lastItem,
        disableNextButton: disableNextButton,
        firstItem: firstItem,
        disablePrevButton: disablePrevButton
      };
    });
  }

  showItemsPerPage() {
    if (this.props.showPerPage) {
      return true;
    }

    if (this.props.hidePerPage) {
      return false;
    }

    if (this.props.total <= 50) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div className={"sth-pagination pagination " + this.props.theme}>
        {this.showItemsPerPage() ? <div className="selector" /> : false}

        <div className="navigator sth-pagination-navigator">
          <p className="sth-pagination-pages">
            {this.state.firstItem} - {this.state.lastItem} of {this.props.total}
          </p>

          <div className="buttons">

            <StButton
              typeClass="btnTool"
              subtypeClass="subtype4"
              id={"buttonPrev" + this.props.qaTag}
              leftIcon="icon-arrow2_left"
              onClick={this.prevPage.bind(this)}
              disabled={this.state.disablePrevButton}
            />

            <StButton
              typeClass="btnTool"
              subtypeClass="subtype4"
              id={"buttonNext" + this.props.qaTag}
              leftIcon="icon-arrow2_right"
              onClick={this.nextPage.bind(this)}
              disabled={this.state.disableNextButton}
            />

          </div>
        </div>
      </div>
    );
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
  theme: string,
  change: func
};

StPagination.defaultProps = {
  perPage: 20,
  perPageOptions: [20, 50, 100],
  currentPage: 1,
  theme: "themaA",
  showPerPage: false,
  hidePerPage: false
};

export default StPagination;
