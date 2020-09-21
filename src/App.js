import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Food } from "./pages/Food";
import { About } from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>SupaHotFood</h1>
      </div>
      {/* Components outside switch (like Navbar) render on everypage */}
      <Navbar />
      {/* Renders the following components according to the listed path */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/:food_id" component={Food} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
