import React, { Component } from 'react';
import { func, string, arrayOf, shape } from 'prop-types';
import './StFooter.scss';

class StFooter extends Component {

  goToLink(link) {
    this.props.onLink(link);
  }

  render() {
    return (
      <footer className="footer sth-footer">
        <div className="content">

          {this.props.rightsText ? <p className="text sth-footer-text">{this.props.rightsText}</p> : false}

          {this.props.links.length ?
            <ul className="sth-footer-links links">

              {this.props.links.map((link, i) => (
                <li key={i}>
                  <span className="separator">|</span>
                  <span className="link" onClick={this.goToLink.bind(this, link)} id={this.props.qaTag + '-link-' + i}>{link.title}</span>
                </li>
              ))}

            </ul>

            : false
          }

          {
            this.props.image ?
              <div className="logo sth-footer-logo">
                <img src={this.props.image} alt="logo" />
              </div>

              : false

          }

        </div>

      </footer>
    )
  }

}

StFooter.propTypes = {
  links: arrayOf(shape({
    title: string,
    url: string
  })),
  rightsText: string,
  qaTag: string,
  image: string,
  onLink: func
}

StFooter.defaultProps = {
  links: [],
  onLink: function () {

  },
  qaTag: ''
}


export default StFooter;
