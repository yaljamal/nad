import React, { Component } from 'react'
import './style/card.css'
export default class Card extends Component {
  render() {
    return (
      <div className='cardContanier col-xs-12 col-sm-12 col-md-12 col-lg-12 card' key={this.props.title}>
        <label>
          {this.props.title}
        </label>
        <a href={this.props.link}
          className='col-xs-12 col-sm-12 col-md-12 col-lg-12 link'
          target="_blank"
        >
          {this.props.link}

        </a>
        <label>

        </label>

      </div>
    )
  }
}
