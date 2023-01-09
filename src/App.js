

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Catelogue, Dunks, Goose, Essentials, EE, Topstoney, CommonProjects} from "./components";

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

          

      </Router>
    </div>
  );
}

export default App;
