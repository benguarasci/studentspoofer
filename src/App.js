

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Catelogue, Dunks, Goose, Essentials} from "./components";

function App() {

  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/catelogue" exact component={() => <Catelogue />} />
          <Route path="/catelogue/dunks" exact component={() => <Dunks />} />
          <Route path="/catelogue/goose" exact component={() => <Goose />} />
          <Route path="/catelogue/essentials" exact component={() => <Essentials />} />

      </Router>
    </div>
  );
}

export default App;
