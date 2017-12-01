import React,{Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import "./index.scss";
import '../../asset/iconfont/iconfont.css';

/*
    抢购页面
*/

class SnapUp extends Component{
    componentWillMount(){
       this.props.getSnapUpInfo();
    }
    render(){
        if(this.props.snapUpInfo.length!=0){
        return (
            <section id="snapup">
                <div className="snapup-title">
                    <i className="iconfont icon-clock"></i>
                    <span>欢迎抢购！！！</span>
                </div>
                <div className="snapup-produce">
                    {
                        this.props.snapUpInfo.map(item=>
                            <div key={item.id} className="snapup-detail">
                                <img src={item.src} onClick={this.gotoDetail.bind(this,{type:"snapup",id:item.id})}/>
                                <p className="snapup-detail-title">{item.title}</p>
                                <div className="snapup-price">
                                    <p className="snapup-nowprice">
                                    ￥<span>{item.nowprice}</span>
                                    </p>
                                    <p className="snapup-preprice">
                                        <s>原价{item.preprice}</s>
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        )
    }else{
           return (
            <section id="snapup">
                <div className="title">
                    <i className="iconfont icon-clock"></i>
                    <span>欢迎抢购！！！</span>
                </div>
                <p>数据正在加载中</p>
            </section>
           )
      }
    }   
    gotoDetail(info){
        var data = JSON.stringify(info);
        this.props.history.push(`/detail/${data}`);
    }
}



export default connect(
    (state)=>{
        return {
            snapUpInfo:state.getSnapUpInfo
        }
    },
    {
        getSnapUpInfo(){
            return axios.get('/snapuproduce').then(res=>{
                return {
                    type:'getSnapUpInfo',
                    payload:res.data
                }
            }
        
            )
        }
    }
)(SnapUp);
