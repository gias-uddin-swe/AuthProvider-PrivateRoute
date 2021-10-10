import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Shipping from "./components/Shipping/Shipping";
import Checkout from "./components/Checkout/Checkout";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route exact path="/checkout">
              <Checkout></Checkout>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
