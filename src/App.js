

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Home, catalogue, Dunks, Goose, Essentials, EE, Topstoney, CommonProjects, Shoes, Clothes, Moncler, Goyard, NB550, AF1, TNF, Crocs} from "./components";
import * as Page from './components'

import ReactGA from 'react-ga';

function App() {

  const trackingid = "UA-254534994-1"
  ReactGA.initialize(trackingid);

  useEffect(() =>{
    ReactGA.pageview(window.location.pathname + window.location.search)
  })

  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={() => <Page.Home />} />
          <Route path="/schedule" exact component={() => <Page.Schedule />} />
      </Router>
    </div>
  );
}

export default App;
