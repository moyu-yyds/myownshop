import React,{Component} from "react";

import "./index.scss";
require("../../asset/iconfont/iconfont.css");

/*
头部设计
*/

class TopHeader extends Component{
    render(){
        return (
            <header>
                <i className="iconfont icon-hot"></i>
                <p className="shop">myownshop</p>
                <div className="search">
                    <input type="text" placeholder="请输入关键字"/>
                    <b>搜索</b>
                </div>
            </header>
        )
    }
}

export default TopHeader;