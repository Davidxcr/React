import React, { Component } from 'react';
import Food from './Food.js'
import Meal from './Meal.js'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import FoodSearch from './FoodSearch.js';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/food/:name'
            render={(routeProps) => <Food {...routeProps} />}
          />
          <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
          <Route exact path='/' render={(routeProps) => <FoodSearch {...routeProps} />} />
          <Route render={() => <h1>Error Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;