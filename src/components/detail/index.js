import React,{Component} from "react";
import {connect} from "react-redux";

import '../../asset/iconfont/iconfont.css';
import './index.scss';

class Detail extends Component{
    componentWillMount(){
        var info = JSON.parse(this.props.match.params.info);
        var data = {};
        if(info.type == "snapup"){
            for(var i = 0 ; i < this.props.snapupInfo.length ; i++){
                if(info.id == this.props.snapupInfo[i].id){
                    data =this.props.snapupInfo[i];
                }
            }
        }else if(info.type == "knowneed"){
            for(var i = 0 ; i < this.props.knowNeedInfo.length ; i++){
                if(info.id == this.props.knowNeedInfo[i].sku){
                    data.id = this.props.knowNeedInfo[i].sku;
                    data.title = this.props.knowNeedInfo[i].t;
                    data.src='//img30.360buyimg.com/img/'+this.props.knowNeedInfo[i].img;
                    data.nowprice = this.props.knowNeedInfo[i].jp;
                }
            }
        }
        localStorage.setItem('data',JSON.stringify(data));
    }
    render(){
        const {snapupInfo,knowNeedInfo} = this.props;
        console.log(localStorage.getItem('data'));
        var data = JSON.parse(localStorage.getItem('data'));
        if(data != undefined){
            return (
                <section id="detail">
                    <div className="detail-title">
                        <i className="iconfont icon-back" onClick={this.goBackToHome.bind(this)}></i>
                        <p className="detail-title-name">{data.title}</p>
                    </div>
                    <div className="detail-img">
                        <img src={data.src}/>
                    </div>
                    <div className="detail-name">
                        {data.title}
                    </div>
                    <div className="detail-price">
                        <p className="detail-nowprice">惊爆价：&nbsp;&nbsp;&nbsp;&nbsp;<span>￥{data.nowprice}</span></p>
                        {
                            data.preprice?
                            <p className="detail-preprice">原价：&nbsp;&nbsp;&nbsp;&nbsp;<s>{data.preprice}</s></p>
                            :null
                        }
                    </div>
                    <div className="btnToCart">
                        <b onClick={this.addToShopCart.bind(this)}>加入购物车</b>
                    </div>
                </section>
            )
        }else{
            return (
                <div>数据正在加载中....</div>
            )
        }
    }
    goBackToHome(){
        this.props.history.push('/home');
    }
    addToShopCart(){
        var data = this.props.shopCart;
        data.push(localStorage.getItem("data"));
        this.props.addToShopCart(data);
    }
}

export default connect(
    (state)=>{
        return {
            snapupInfo: state.getSnapUpInfo,
            knowNeedInfo:state.getKnowNeedInfo,
            shopCart:state.shopCart
        }
    },
 {
     addToShopCart(data){
            return {
                type:'shopCart',
                payload:data
            }
     }
 }
)(Detail);