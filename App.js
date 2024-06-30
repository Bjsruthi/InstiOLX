import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SellProducts from './SellProducts';
import BuyProducts from './BuyProducts';
import Cart from './Cart';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SellProducts} />
        <Route path="/buy" component={BuyProducts} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
