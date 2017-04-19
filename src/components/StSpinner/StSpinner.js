import React, { Component } from 'react';
import { string, bool } from 'prop-types';

class StSpinner extends Component {

  render() {
    return (
      <div className="st-spinner">
        {this.props.loading ? <img src={this.props.imageUrl} alt="loading" /> : false}
      </div>
    )
  }

}

StSpinner.propTypes = {
  imageUrl: string,
  loading: bool
}

export default StSpinner;
