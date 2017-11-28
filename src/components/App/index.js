import React,{Component} from "react";


import "./index.scss";

import TopHeader from "../header";
import Swiper from "../swiper";

class App extends Component{
    render(){
        return (
            <div id="app">
                <TopHeader></TopHeader>
                <Swiper></Swiper>
            </div>
        )
    }
}

export default App;