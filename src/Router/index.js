import React,{Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../Redux/Store";

import App from '../components/app';
import Main from '../components/main';
import Detail from '../components/detail';
import ShopCart from '../components/shopcart';
import Search from '../components/search';

export default (
    <Provider store={store}>
    <Router>
       <App>
           <Switch>
                   <Route path="/home" component={Main}/>
                   <Route path="/detail/:info" component={Detail} />
                   <Route path="/shopcart" component={ShopCart}/>
                   <Route path="/search/:info" component={Search}/>
                   <Redirect from='*' to="/home"/>
           </Switch>
       </App>
     </Router>
   </Provider>
)
       
