import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const HomePage = () => {
  const APP_ID = "64ded295";
  const APP_KEY = "9fd03c98074b8e61bbe2bc2ac8f9a1e8";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("spicy");
  useEffect(() => {
    const getRecipes = async () => {
      fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
        .then((response) => response.json())
        .then((apiData) => {
          const recipeData = apiData.hits;
          console.log(apiData.hits);
          setRecipes(recipeData);
        })
        .catch((err) => {
          console.log(err, "ERROR");
        });
    };

    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="wrapper">
      <h4 className="section-header">Home</h4>
      <div className="flex-container">
        <form onSubmit={getSearch} className="search-form">
          <input
            type="text"
            className="search-bar"
            value={search}
            onChange={updateSearch}
          ></input>
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
      <div className="flex-container">
        {recipes.map((recipe, index) => (
          <Product key={index} product={recipe.recipe}></Product>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
