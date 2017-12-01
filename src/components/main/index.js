import React,{Component} from "react";

import TopHeader from "../header";
import Swiper from "../swiper";
import SnapUp from "../snapup";
import KnowNeed from "../knowneed";

class Main extends Component{
    render(){
       return (
            <div id="main">
                <TopHeader {...this.props}></TopHeader>
                <Swiper></Swiper>
                <SnapUp {...this.props}></SnapUp>
                <KnowNeed {...this.props}></KnowNeed>
            </div> 
       )
    }
}

export default Main;