import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext";

import "./style.css";
import SearchResult from "./views/search-result";
import Home from "./views/home";
import Artist from "./views/artist";

const App = () => {
  return (
    <Router>
      <div>
        <Route component={SearchResult} exact path="/search-result" />
        <Route component={Home} exact path="/" />
        <Route component={Artist} exact path="/artist" />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById("app")
);
