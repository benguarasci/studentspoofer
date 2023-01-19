

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Home, Catalog, Dunks, Goose, Essentials, EE, Topstoney, CommonProjects, Shoes, Clothes, Moncler, Goyard, NB550, AF1, TNF, Crocs} from "./components";
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
          <Route path="/catalog" exact component={() => <Page.Catalog />} />
          <Route path="/instructions" exact component={() => <Page.Instructions />} />
          <Route path="/catalog/dunks" exact component={() => <Page.Dunks />} />
          <Route path="/catalog/goose" exact component={() => <Page.Goose />} />
          <Route path="/catalog/essentials" exact component={() => <Page.Essentials />} />
          <Route path="/catalog/EE" exact component={() => <Page.EE />} />
          <Route path="/catalog/topstoney" exact component={() => <Page.Topstoney />} />
          <Route path="/catalog/commonprojects" exact component={() => <Page.CommonProjects />} />
          <Route path="/catalog/shoes" exact component={() => <Page.Shoes />} />
          <Route path="/catalog/clothes" exact component={() => <Page.Clothes />} />
          <Route path="/catalog/moncler" exact component={() => <Page.Moncler />} />
          <Route path="/catalog/goyard" exact component={() => <Page.Goyard />} />
          <Route path="/catalog/tnf" exact component={() => <Page.TNF />} />
          <Route path="/catalog/NB550" exact component={() => <Page.NB550 />} />
          <Route path="/catalog/AF1" exact component={() => <Page.AF1 />} />
          <Route path="/catalog/crocs" exact component={() => <Page.Crocs />} />
          <Route path="/catalog/NB99X" exact component={() => <Page.NB99X />} />
          <Route path="/catalog/tees" exact component={() => <Page.Tees />} />
          <Route path="/catalog/cplow" exact component={() => <Page.CPLow />} />
          





      </Router>
    </div>
  );
}

export default App;
