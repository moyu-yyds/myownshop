import React,{Component} from "react";
import ReactSwipe from "react-swipe";
import {connect} from "react-redux"

import "./index.scss";

class Swiper extends Component{
    componentDidMount(){
    }
    render(){
        return (
            <div id="swiper">
                <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:1,speed:1000}}>
                        <div><img src='//img30.360buyimg.com/img/jfs/t11695/201/2636204258/64800/195fd1c/5a1bddefN1a8cfa02.jpg'/></div>
                        <div><img src='//img30.360buyimg.com/img/jfs/t12163/99/1140113988/132652/4da42284/5a1bab03N9f120733.jpg'/></div>
                        <div><img src='//img30.360buyimg.com/img/jfs/t12514/231/1195202857/180845/31c810c1/5a1cb561N8bde84be.jpg'/></div>
                        <div><img src='///img30.360buyimg.com/img/jfs/t11014/240/2479610120/66548/5d7c2ea5/5a17e9f2Nfc4c0ceb.jpg'/></div>
                </ReactSwipe>       
                <img src="//img30.360buyimg.com/img/jfs/t11890/141/2661940139/83750/4298b9ca/5a1bd4b5N99d782d3.png"/>
        </div>
        )
    }
}

export default Swiper;