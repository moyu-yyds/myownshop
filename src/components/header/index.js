import React,{Component} from "react";

import "./index.scss";
import '../../asset/iconfont/iconfont.css';
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
                    <input type="text" placeholder="请输入关键字" ref="searchValue"/>
                    <b onClick={this.goToSearch.bind(this)}>搜索</b>
                </div>
                <i className="iconfont icon-cart" onClick={this.goToShopCart.bind(this)}></i>
            </header>
        )
    }
    goToShopCart(){
        this.props.history.push('/shopcart');
    }
    goToSearch(){
        this.props.history.push(`/search/${this.refs.searchValue.value}`);
    }
}

export default TopHeader;