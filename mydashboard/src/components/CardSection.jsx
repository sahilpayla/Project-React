import React, { Component } from 'react'

export class CardSection extends Component {
  render() {
    return (
      <div>
         <h1>{this.props.coinName}</h1>
      </div>
    )
  }
}

export default CardSection