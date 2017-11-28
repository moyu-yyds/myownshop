import React from "react";
import {
    BrowerRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../Redux/Store";

import App from '../components/App';
import Main from '../components/main';

export default (
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                        <Route path="/home" component={Main}/>
                </Switch>
            </App>
        </Router>
    </Provider>
)