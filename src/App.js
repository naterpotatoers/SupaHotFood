import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      {/* Components outside switch (like Navbar & Footer) render on everypage */}
      <Navbar />
      {/* Renders the following components according to the listed path */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
