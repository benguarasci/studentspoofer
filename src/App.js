

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Home, Catelogue, Dunks, Goose, Essentials, EE, Topstoney, CommonProjects, Shoes, Clothes, Moncler, Goyard, NB550, AF1, TNF, Crocs} from "./components";
import * as Page from './components'

function App() {

  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={() => <Page.Home />} />
          <Route path="/catelogue" exact component={() => <Page.Catelogue />} />
          <Route path="/catelogue/dunks" exact component={() => <Page.Dunks />} />
          <Route path="/catelogue/goose" exact component={() => <Page.Goose />} />
          <Route path="/catelogue/essentials" exact component={() => <Page.Essentials />} />
          <Route path="/catelogue/EE" exact component={() => <Page.EE />} />
          <Route path="/catelogue/topstoney" exact component={() => <Page.Topstoney />} />
          <Route path="/catelogue/commonprojects" exact component={() => <Page.CommonProjects />} />
          <Route path="/catelogue/shoes" exact component={() => <Page.Shoes />} />
          <Route path="/catelogue/clothes" exact component={() => <Page.Clothes />} />
          <Route path="/catelogue/moncler" exact component={() => <Page.Moncler />} />
          <Route path="/catelogue/goyard" exact component={() => <Page.Goyard />} />
          <Route path="/catelogue/tnf" exact component={() => <Page.TNF />} />
          <Route path="/catelogue/NB550" exact component={() => <Page.NB550 />} />
          <Route path="/catelogue/AF1" exact component={() => <Page.AF1 />} />
          <Route path="/catelogue/crocs" exact component={() => <Page.Crocs />} />
          <Route path="/catelogue/NB99X" exact component={() => <Page.NB99X />} />
          <Route path="/catelogue/tees" exact component={() => <Page.Tees />} />
          <Route path="/catelogue/cplow" exact component={() => <Page.CPLow />} />






      </Router>
    </div>
  );
}

export default App;
