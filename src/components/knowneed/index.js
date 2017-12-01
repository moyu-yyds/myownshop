/**
   懂你喜欢页面
 */

 import React,{Component} from "react";
 import {connect} from "react-redux";

 import '../../asset/iconfont/iconfont.css';
 import "./index.scss";

 class KnowNeed extends Component{
     componentWillMount(){
         this.props.getKnowNeedInfo();
     }
     render(){
         const {knowNeedInfo} = this.props ;
         if(knowNeedInfo.length!=0){
            return (
                <section id="knowneed">
                    <div className="knowneed-title">
                       <i className="iconfont icon-favorites"></i>
                       <span>猜你喜欢</span>
                    </div>
                    <div className="knowneed-produce">
                        {
                            knowNeedInfo.map((item,index)=>
                                <div key={item.sku} className="knowneed-detail">
                                    <img src={'//img30.360buyimg.com/img/'+item.img} onClick={this.goToDetail.bind(this,{type:'knowneed',id:item.sku})}/>
                                    <p className="knowneed-detail-title">{item.t}</p>
                                    <div className="knowneed-last">
                                        <span className="knowneed-nowprice">￥{item.jp}</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </section>
            )
         }else{
             return (
                <section id="knowneed">
                    <div className="knowneed-title">
                        <i className="iconfont icon-favorites"></i>
                        <span>猜你喜欢</span>
                    </div>
            </section>
             )
         }
     }
     goToDetail(info){
        console.log(info);
        var data = JSON.stringify(info);
        this.props.history.push(`/detail/${data}`);
     }
 }

export default connect(
    (state)=>{
        return {
            knowNeedInfo:state.getKnowNeedInfo
        }
    },
    {
        getKnowNeedInfo(){
            return axios.get('/mobile/homePage/ajaxH5Youlike.do?p=619110&uuid=-1&lid=2&pin=&lim=150').then(res=>{
                return {
                     type:"getKnowNeedInfo",
                     payload:res.data
               }
            } 
        )
    }
 }
)(KnowNeed);