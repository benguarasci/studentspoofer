

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About, Footer, Home, Subscribe } from "./components";
import ReactGA from "react-ga";

function App() {

const trackingid = "UA-205501217-1"
ReactGA.initialize(trackingid);

useEffect(() =>{
  ReactGA.pageview(window.location.pathname + window.location.search)
})


  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/subscribe" exact component={() => <Subscribe />} />

      </Router>
    </div>
  );
}

export default App;



// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = React.useState(null);
  
//   React.useEffect(() => {
//     fetch("/get_users")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//       <h1>Welcome to RentSimple</h1>
//         <p>{!data ? "Loading..." : data.map(data => <div>{data.id}</div>)}</p>
//         <p>{!data ? "Loading..." : data.map(data => <div>{data.name}</div>)}</p>
//         <p>{!data ? "Loading..." : data.map(data => <div>{data.email}</div>)}</p>
//       </header>
//     </div>
//   );
// }

// export default App;
