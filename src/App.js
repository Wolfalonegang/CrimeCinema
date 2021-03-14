import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Latest from './pages/latest';
import TopRated from './pages/topRated';
import UpComing from './pages/upcoming';
import PopularTv from './pages/popularTv';
import SingleMovie from './pages/SingleMovie';
import Home from './pages/Home';

import Header from './containers/header'

function App() {
  return (
      <Router>
        <div className="app">

          <Header />

          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/Latest" component={ Latest } />
            <Route exact path="/TopRated" component={ TopRated } />
            <Route exact path="/UpComing" component={ UpComing } />
            <Route exact path="/PopularTv" component={ PopularTv } />
            <Route exact path="/movie/:id" component={SingleMovie} />
          </Switch>

        </div>
      </Router>
  );
}

export default App;