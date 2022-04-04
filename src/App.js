import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
//import Dashboard from "./Component/Dashboard/Dashboard";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
//import PrivetRoute from "./Component/Login/PrivateRoute/PrivateRoute";
import Navigation from "./Component/Navigation/Navigation";
//import NotFound from "./Component/NotFound/NotFound";
//import OrderPlaced from "./Component/OrderPlaced/OrderPlaced";
//import Services from "./Component/Services/Services";
import AuthProvider from "./Context/AuthProvider";



function App() {
  return (
    <AuthProvider>
      <Router>
          <Navigation />
            <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                {/* <Route path="/explore">
                  <Services></Services>
                </Route> */}
                {/* <PrivetRoute path="/orderPlaced/:id">
                  <OrderPlaced></OrderPlaced>
                </PrivetRoute> */}
                {/* <Route path="/dashboard">
                  <Dashboard></Dashboard>
                </Route> */}
                <Route path="/login">
                  <Login />
                </Route>
                {/* <Route path="*">
                  <NotFound></NotFound>
                </Route> */}
            </Switch>
          <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
