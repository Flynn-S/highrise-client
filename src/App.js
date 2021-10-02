import React, { Suspense } from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import "./App.css";
import Landing from "./pages/registration/LandingFunction";
import Login from "./pages/registration/Login";
import Register from "./pages/registration/Register";
import Homepage from "./pages/Homepage";

import FAQs from "./pages/FAQs";
import Lineup from "./components/Lineup";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import EventDetails from "./containers/EventDetails";

import Footer from "./components/Footer";

import CircularProgress from "@material-ui/core/CircularProgress";

// const Homepage = React.lazy(() => import("./pages/Homepage"));

function App() {
  const { url } = useRouteMatch();
  const location = useLocation();
  return (
    <Suspense fallback={<CircularProgress />}>
      {location.pathname === "/" ? null : location.pathname ===
        "/login" ? null : location.pathname === "/register" ? null : (
        <Navbar
          title="Highrise Festival"
          links={["home", "line-up", "faqs", "events", "account", "contact"]}
        />
      )}

      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route
          exact
          path="/home"
          render={(routerProps) => <Homepage {...routerProps} />}
        />
        <Route
          exact
          path="/faqs"
          render={(routerProps) => <FAQs {...routerProps} />}
        />
        <Route
          exact
          path="/line-up"
          render={(routerProps) => <Lineup {...routerProps} />}
        />
        <Route
          exact
          path="/events"
          render={(routerProps) => <Events {...routerProps} />}
        />

        <Route
          exact
          path="/Contact"
          render={(routerProps) => <Contact {...routerProps} />}
        />
      </Switch>
      <Route path="/events/:eventId" component={EventDetails} />
      {location.pathname === "/" ? null : location.pathname ===
        "/login" ? null : location.pathname === "/register" ? null : (
        <Footer />
      )}
    </Suspense>
  );
}

export default App;

// {/* <div className="App">
//     <header className="App-header">{/* <Navbar /> */}</header>
// </div> */}

// <Navbar
//         title="Highrise Festival"
//         links={["home", "line-up", "faqs", "events", "account", "contact"]}
//       />

//       {/* <AnimatePresence exitBeforeEnter initial={false}> */}
//       <Switch location={location} key={location.pathname}>
//         <Route path="/" exact component={Landing} />
//         <Route path="/login" exact component={Login} />
//         <Route path="/register" exact component={Register} />
//         <Route
//           exact
//           path="/home"
//           render={(routerProps) => <Homepage {...routerProps} />}
//         />
//         <Route
//           exact
//           path="/faqs"
//           render={(routerProps) => <FAQs {...routerProps} />}
//         />
//         <Route
//           exact
//           path="/line-up"
//           render={(routerProps) => <Lineup {...routerProps} />}
//         />
//         <Route
//           exact
//           path="/events"
//           render={(routerProps) => <Events {...routerProps} />}
//         />

//         <Route
//           exact
//           path="/Contact"
//           render={(routerProps) => <Contact {...routerProps} />}
//         />
//       </Switch>
//       <Route path="/events/:eventId" component={EventDetails} />
//       <Footer />
//       {/* </AnimatePresence> */}
