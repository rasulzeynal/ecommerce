import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart"
import { Redirect } from "react-router-dom";


function App() {
  const user = true;
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
           <Home/>
          </Route>
          <Route path="/login" exact >
          {user ? <Redirect to="/" /> : <Login/>}
          </Route>
          <Route path="/register" exact >
          {user ? <Redirect to="/" /> : <Register/>}
          </Route>
          <Route path="/products" exact >
            <ProductList/>
          </Route>
          <Route path="/product:id" exact>
            <Product/>
          </Route>
          <Route path="/cart" exact>
            <Cart/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
