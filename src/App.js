import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  Checkout,
  Error,
  About,
  Private,
  Cart,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/products/:id' children={<SingleProduct />}></Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route route='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
