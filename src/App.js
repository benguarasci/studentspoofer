

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
          <Route path="/catalogue" exact component={() => <Page.catalogue />} />
          <Route path="/instructions" exact component={() => <Page.Instructions />} />
          <Route path="/catalogue/dunks" exact component={() => <Page.Dunks />} />
          <Route path="/catalogue/goose" exact component={() => <Page.Goose />} />
          <Route path="/catalogue/essentials" exact component={() => <Page.Essentials />} />
          <Route path="/catalogue/EE" exact component={() => <Page.EE />} />
          <Route path="/catalogue/topstoney" exact component={() => <Page.Topstoney />} />
          <Route path="/catalogue/commonprojects" exact component={() => <Page.CommonProjects />} />
          <Route path="/catalogue/shoes" exact component={() => <Page.Shoes />} />
          <Route path="/catalogue/clothes" exact component={() => <Page.Clothes />} />
          <Route path="/catalogue/moncler" exact component={() => <Page.Moncler />} />
          <Route path="/catalogue/goyard" exact component={() => <Page.Goyard />} />
          <Route path="/catalogue/tnf" exact component={() => <Page.TNF />} />
          <Route path="/catalogue/NB550" exact component={() => <Page.NB550 />} />
          <Route path="/catalogue/AF1" exact component={() => <Page.AF1 />} />
          <Route path="/catalogue/crocs" exact component={() => <Page.Crocs />} />
          <Route path="/catalogue/NB99X" exact component={() => <Page.NB99X />} />
          <Route path="/catalogue/tees" exact component={() => <Page.Tees />} />
          <Route path="/catalogue/cplow" exact component={() => <Page.CPLow />} />
          <Route path="/catalogue/maison" exact component={() => <Page.Maison />} />

          





      </Router>
    </div>
  );
}

export default App;
