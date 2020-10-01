import React, { Component } from "react";

export class Food extends Component {
  state = {
    id: null,
  };
  // Grabs the url endpoint and saves it to state.id
  async componentDidMount() {
    let id = this.props.match.params.food_id;
    this.setState({
      id: id,
    });
  }

  render() {
    return (
      <div className="container">
        <h4 className="section-header">{this.state.id}</h4>
        <p>
          This page should have more details about the param passed in. Might be
          a little too ambitious so maybe we keep it to one page ?
        </p>
      </div>
    );
  }
}

export default Food;
