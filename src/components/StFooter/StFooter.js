import React, { Component } from 'react'
import { func, string, arrayOf, shape } from 'prop-types'
import CssModules from 'react-css-modules'

import styles from './StFooter.scss'

class StFooter extends Component {
  goToLink(link) {
    this.props.onLink(link)
  }

  render() {
    return (
      <footer styleName="footer" className="sth-footer">
        <div styleName="content">

          {this.props.rightsText
            ? <p styleName="text" className="sth-footer-text">
                {this.props.rightsText}
              </p>
            : false}

          {this.props.links.length
            ? <ul styleName="links" className="sth-footer-links">

                {this.props.links.map((link, i) => (
                  <li key={i}>
                    <span styleName="separator">|</span>
                    <span
                      onClick={this.goToLink.bind(this, link)}
                      id={this.props.qaTag + '-link-' + i}
                    >
                      {link.title}
                    </span>
                  </li>
                ))}

              </ul>
            : false}

          {this.props.image
            ? <div styleName="logo" className="sth-footer-logo">
                <img src={this.props.image} alt="logo" />
              </div>
            : false}

        </div>

      </footer>
    )
  }
}

StFooter.propTypes = {
  links: arrayOf(
    shape({
      title: string,
      url: string
    })
  ),
  rightsText: string,
  qaTag: string,
  image: string,
  onLink: func
}

StFooter.defaultProps = {
  links: [],
  onLink: function() {},
  qaTag: ''
}

export default CssModules(StFooter, styles)
