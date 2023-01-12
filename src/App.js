

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Catelogue, Dunks, Goose, Essentials, EE, Topstoney, CommonProjects, Shoes, Clothes, Moncler, Goyard, NB550, AF1, TNF} from "./components";


function App() {

  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/catelogue" exact component={() => <Catelogue />} />
          <Route path="/catelogue/dunks" exact component={() => <Dunks />} />
          <Route path="/catelogue/goose" exact component={() => <Goose />} />
          <Route path="/catelogue/essentials" exact component={() => <Essentials />} />
          <Route path="/catelogue/EE" exact component={() => <EE />} />
          <Route path="/catelogue/topstoney" exact component={() => <Topstoney />} />
          <Route path="/catelogue/commonprojects" exact component={() => <CommonProjects />} />
          <Route path="/catelogue/shoes" exact component={() => <Shoes />} />
          <Route path="/catelogue/clothes" exact component={() => <Clothes />} />
          <Route path="/catelogue/moncler" exact component={() => <Moncler />} />
          <Route path="/catelogue/goyard" exact component={() => <Goyard />} />
          <Route path="/catelogue/tnf" exact component={() => <TNF />} />
          <Route path="/catelogue/NB550" exact component={() => <NB550 />} />
          <Route path="/catelogue/AF1" exact component={() => <AF1 />} />



      </Router>
    </div>
  );
}

export default App;
