import React, { Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import RollerSpinner from "./components/RollerSpinner";

import "./App.css";
import Homepage from "./pages/Homepage";
import Ticketpage from "./pages/Ticketpage";
import Navbar from "./components/Navbar";

// const Homepage = React.lazy(() => import("./pages/Homepage"));

function App() {
  const location = useLocation();
  return (
    <Suspense fallback={<RollerSpinner />}>
      <Navbar
        title="Highrise Festival"
        links={[
          "Home",
          "Line Up",
          "Travel",
          "FAQ's",
          "Events",
          "Account",
          "Contact",
          "Tickets",
        ]}
      />

      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            render={(routerProps) => <Homepage {...routerProps} />}
          />
          <Route
            exact
            path="/tickets"
            render={(routerProps) => <Ticketpage {...routerProps} />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;

// {/* <div className="App">
//     <header className="App-header">{/* <Navbar /> */}</header>
// </div> */}
