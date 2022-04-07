import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/product" exact component={Product}/>
          <Route path="/productlist" exact component={ProductList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
