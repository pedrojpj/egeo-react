import React, { Component } from 'react'
import { string } from 'prop-types'
import styles from './StInfoCard.scss'

class StInfoCard extends Component {
  render() {
    return (
      <section styleName="st-info-card" className="sth-info-card">
        {this.props.image
          ? <div
              styleName="st-info-card__photo-div"
              className="sth-info-card__photo-div"
            >
              <img
                styleName="st-info-card__photo"
                className="img-responsive"
                src={this.props.image}
                alt=""
              />
            </div>
          : false}
        <div styleName="st-info-card__text-div">
          {this.props.title
            ? <h1
                styleName="st-info-card__title"
                className="sth-info-card__title"
              >
                {this.props.title}
              </h1>
            : false}
          <div
            styleName="st-info-card__description"
            className="sth-info-card__description"
          >
            {this.props.children}
          </div>
        </div>
        <p styleName="st-info-card__arrow" className="sth-info-card__arrow" />
      </section>
    )
  }
}

StInfoCard.propTypes = {
  image: string,
  title: string
}

export default StInfoCard
