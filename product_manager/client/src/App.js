import React, { useState } from "react";
import { useParams } from "react-router";

import AllProducts from "./components/AllProducts";
import NewProductForm from "./components/NewProductForm";
import ProductDetail from "./components/ProductDetail";
import { useHistory } from "react-router-dom";
import EditProductForm from "./components/EditProductForm";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <BrowserRouter>
      <div className="App container">
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
        <Switch>
          <Route exact path="/">
            <NewProductForm
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
            />
            <AllProducts formSubmitted={formSubmitted}></AllProducts>
          </Route>
          <Route exact path="/product/:id">
            <ProductDetail></ProductDetail>
          </Route>
          <Route exact path="/edit/:id">
            <EditProductForm></EditProductForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
