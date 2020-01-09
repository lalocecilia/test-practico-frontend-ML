import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBox from '../components/search-box/SearchBox';
import SearchResult from '../components/search-results/SearchResult';
import ProductDetail from '../components/product-detail/ProductDetail';
import '../scss/style.scss';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <SearchBox />
        </Route>
        <Route exact path="/items/:id">
          <ProductDetail />
        </Route>
        <Route path="/items">
          <SearchResult />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
