import React, { Component } from 'react'
import { string } from 'prop-types'

import './StInfoCard.scss'

class StInfoCard extends Component {
  render() {
    return (
      <section className="st-info-card sth-info-card">
        {this.props.image
          ? <div className="st-info-card__photo-div sth-info-card__photo-div">
              <img
                className="st-info-card__photo img-responsive"
                src={this.props.image}
                alt=""
              />
            </div>
          : false}
        <div className="st-info-card__text-div">
          {this.props.title
            ? <h1 className="st-info-card__title sth-info-card__title">
                {this.props.title}
              </h1>
            : false}
          <div className="st-info-card__description sth-info-card__description">
            {this.props.children}
          </div>
        </div>
        <p className="st-info-card__arrow sth-info-card__arrow" />
      </section>
    )
  }
}

StInfoCard.propTypes = {
  image: string,
  title: string
}

export default StInfoCard
