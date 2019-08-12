import './style.css';

import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { render } from 'react-dom';

import { NavigationModel } from "./Models/NavigationModel";
import { Helper } from "./Models/Helper";
import { NavMenue } from './Components/NavMenue';

import Home from './Components/Home';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import NotFound from './Components/NotFound';

import rawNavigationData from './navData.json';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="navBar">
            <NavMenue navigationData={Helper.createNavigationHierarchy(rawNavigationData.data, NavigationModel)} />
          </div>

          <div className="outlet">
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/page1" exact={true} component={Page1} />
              <Route path="/page2" exact={true} component={Page2} />
              <Route path="/page3" exact={true} component={Page3} />
              <Route path="/page3/:code" exact={true} component={Page3} />
              <Route path="/page3/:code/:sub1" exact={true} component={Page3} />
              <Route path="/page3/:code/:sub1/:sub2" exact={true} component={Page3} />
              <Route path="/page5" exact={true} component={Page5} />
              <Route path="/page5/:code" exact={true} component={Page5} />
              <Route path="/page5/:code/:sub1" exact={true} component={Page5} />
              <Route path="/page5/:code/:sub1/:sub2" exact={true} component={Page5} />
              <Route path="/page4" exact={true} component={Page4} />
              <Route exact={true} component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let container = document.getElementById('root');
render(<App />, container);