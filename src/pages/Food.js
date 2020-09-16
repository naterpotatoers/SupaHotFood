import React, { Component } from "react";

export class Food extends Component {
  state = {
    id: null,
  };
  // Grabs the url endpoint and saves it to state.id
  componentDidMount() {
    let id = this.props.match.params.food_id;
    this.setState({
      id: id,
    });
  }

  render() {
    return (
      <div>
        <h4>Food</h4>
        <p>{this.state.id}</p>
      </div>
    );
  }
}

export default Food;
