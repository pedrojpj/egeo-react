import React from 'react';
import propTypes from 'prop-types';
import './StInfoCard.scss';

const StInfoCard = props =>
  <section styleName="st-info-card" className="sth-info-card">
    {props.image
      ? <div className="sth-info-card__photo-div" styleName="image">
          <img className="img-responsive" src={props.image} />
        </div>
      : false}

    <div styleName="text">
      {props.title
        ? <h3 className="sth-info-card__title" styleName="title">
            {props.title}
          </h3>
        : false}

      <p className="sth-info-card__description" styleName="description">
        {props.children}
      </p>
    </div>
    <span styleName="arrow" className="sth-info-card__arrow" />
  </section>;

StInfoCard.propTypes = {
  image: propTypes.string,
  title: propTypes.string
};

export default StInfoCard;
