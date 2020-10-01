import React, { Component } from "react";

const APP_ID = "64ded295";
const APP_KEY = "9fd03c98074b8e61bbe2bc2ac8f9a1e8";

export class Home extends Component {
  state = {
    loading: true,
    food: [],
  };

  componentDidMount() {
    fetch(
      `https://api.edamam.com/search?q=spicy&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);
        this.setState({ food: data.hits, loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.food.length) {
      return <div>No foods</div>;
    }

    return (
      <div className="container">
        <h4 className="section-header">Home</h4>
        <p>
          Needs some better styling and internal/external links. Maybe make
          seperate component. Might need a local json file for testing purposes
          since api is limited to 5 calls per minute
        </p>
        {this.state.food.map((food, index) => (
          <div key={index}>
            <img src={food.recipe.image} />
            <p>{food.recipe.label}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
