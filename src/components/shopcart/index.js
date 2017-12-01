import React,{Component} from "react";
import {connect} from "react-redux";

var lodash = require('lodash');

/*
购物车页面
*/
import './index.scss';

class ShopCart extends Component{
    componentWillMount(){

    }
    render(){
        const {shopCart} = this.props;
        if(shopCart.length != 0){
            var cart = lodash.uniq(shopCart);
            function getNumber(id){
                var num = 0 ;      
                for(var i = 0 ; i < shopCart.length ; i++){
                    if(id == JSON.parse(shopCart[i]).id){
                        num++;
                    }
                }
                return num;
            }
            var shopCartInfo = [];
            var realData = [];
            var totalprice = 0;
            for(var i = 0 ; i < cart.length ; i++){     
               var shopCartInfomation = JSON.parse(cart[i]);
               shopCartInfomation.num = getNumber(JSON.parse(cart[i]).id);
               shopCartInfo.push(shopCartInfomation);
               totalprice += shopCartInfomation.nowprice * shopCartInfomation.num;
            }
            var totalpage = [];
            for(var i = 0 ; i < Math.ceil(cart.length / 5); i++){
                totalpage.push(i+1);
            }
            function findRenderData(page){
                for(var i = (page-1)*5 ; i < page * 5 ; i++){
                    if(shopCartInfo[i]){
                        console.log(shopCartInfo[i]);
                        realData.push(shopCartInfo[i]);
                    }
                    
                }
            }
            findRenderData(this.props.page);
            console.log(realData);
            return (
                <section id="shopcart">
                    <div className="shopcart-title">
                       <i className="iconfont icon-back" onClick={this.goToHome.bind(this)}></i>
                       <span className="shopcart-title-name">购物车</span>
                    </div>
                    <div className="shopcart-topinfo">
                        <p className='shopcart-totalnum'>总共有<span>{shopCartInfo.length}</span>件商品</p>
                        <p className="shopcart-totalprice">总价为<span>￥{totalprice}</span></p>
                    </div>
                    <div className="shopcart-list">
                        <div className="shopcart-tabletitle">
                            <p className='shopcart-listpic shopcart-common'>图片</p>
                            <p className="shopcart-name shopcart-common">名称</p>
                            <p className="shopcart-price shopcart-common">价钱</p>
                            <p className="shopcart-num shopcart-common">数量</p>
                            <p className="shopcart-smalltotalprice shopcart-common">总价</p>
                        </div>
                        {
                            realData.map(item=>
                                <div key={item.id} className="shopcart-produce">
                                    <p className='shopcart-listpic shopcart-common'><img src={item.src}/></p>
                                    <p className="shopcart-name shopcart-common">{item.title}</p>
                                    <p className="shopcart-price shopcart-common">￥{item.nowprice}</p>
                                    <p className="shopcart-num shopcart-common">{item.num}</p>
                                    <p className="shopcart-smalltotalprice shopcart-common">￥{item.nowprice*item.num}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="shopcart-pagination">
                        {/* <span className="shopcart-pagenum">1</span> */}
                        {
                            totalpage.map(item=>
                                <span className="shopcart-pagenum" key={item} onClick={this.getList.bind(this,item)}>{item}</span>
                            )
                        }
                    </div>
                </section>
            )
        } else{
            return (
                <section id="shopcart">
                    <div className="shopcart-title">
                       <i className="iconfont icon-back"></i>
                       <span className="shopcart-title-name">购物车</span>
                    </div>
                    <p>购物车是空的，快去添加商品吧</p>
                </section>
            )
        }
    }
    getList(page){
        this.props.getPage(page);
    }
    goToHome(){
        this.props.history.push('/home');
    }
}

export default connect(
    (state)=>{
        return {
            shopCart:state.shopCart,
            page:state.getPage
        }
    },
    {
        getPage(page){
            return {
                type:'getPage',
                payload:page
            }
        }
    }
)(ShopCart);