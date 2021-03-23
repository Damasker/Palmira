import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import ExportTea from "./ExportTea";
import TeaCup from "./TeaCup";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/exporttea" exact component={ExportTea} />
            <Route path="/teacup" exact component={TeaCup} />
        </Switch>
    </Router>

);
