import React from "react";
import Dashboard from "./screen/dashboard";
import GoogleLogin from "react-google-login";
import axios from "axios";
import Login from "./screen/Login"
import Registration from "./screen/registration"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
const App = () => {
  
  return (
    <div>
      

      <Router >
			<Switch>
      <Route exact path="/" component={Login} />
				<Route exact path="/dash" component={Dashboard} />
        <Route exact path="/regi" component={Registration} />
      </Switch>
      </Router>
    </div>
  );
};

export default App;
