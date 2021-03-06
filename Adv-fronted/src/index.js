import React from "react";
import ReactDom from "react-dom";
import { Router } from "react-router-dom";
import App from "./App";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();



ReactDom.render(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById("root")
);
