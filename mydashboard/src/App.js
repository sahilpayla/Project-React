import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      Id: "bitcoin",
      Data: {}
    }
  }

  fetchData = async () => {
    let data = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
    let jsonData = await data.json()
    this.setState({ Id: this.state.Id, Data: jsonData })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <h1>{this.state.Id}</h1>
        <h2>{this.state.Data.name}</h2>
        <h2>{this.state.Data.sentiment_votes_up_percentage}</h2>
      </div>
    )
  }
}
