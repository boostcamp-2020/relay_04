import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as Pages from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exac path="/mainPage" component={Pages.MainPage} />
        <Route exac path="/viewText" component={Pages.ViewPage} />
        <Route exac path="/signup" component={Pages.SignUpPage} />
        <Route exac path="/post" component={Pages.PostListPage} />
        <Route exac path="/write" component={Pages.WritePage} />
        <Route exac path="/" component={Pages.LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
