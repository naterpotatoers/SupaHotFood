import React, { Component } from "react";
import Product from "../components/Product";

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
      return <div>No recipes found.</div>;
    }

    return (
      <div className="wrapper">
        <h4 className="section-header">Home</h4>
        <div className="flex-container">
          {this.state.food.map((food, index) => (
            <div key={index}>
              <Product product={food.recipe} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
