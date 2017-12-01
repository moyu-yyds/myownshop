import React,{Component} from "react";
import ReactSwipe from "react-swipe";
import {connect} from "react-redux";

import "./index.scss";

class Swiper extends Component{
    componentDidMount(){
        this.props.sendLunboImgUrl();
    }
    render(){
        if(this.props.lunboImgUrl.lunboImgUrl!=0){
            return (
                <div id="swiper">
                    <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:1,speed:2000}}>
                           {
    
                                this.props.lunboImgUrl.map(item=>
                                    <div key={item.src}><img src={item.src}/></div>)
                           }
                    </ReactSwipe>     
                    <img src="//img30.360buyimg.com/img/jfs/t11890/141/2661940139/83750/4298b9ca/5a1bd4b5N99d782d3.png"/>
            </div>
            )
        }else{
            return <div id="empty">数据正在加载中.........</div>
        }
       
    }
}

export default connect(
    (state)=>{
        return {
            lunboImgUrl:state.getLunboImgUrl
        }
    },
    {
        sendLunboImgUrl:()=>{
            return axios.get('/images').then(res=>{
                return {
                    type:'lunboImgUrl',
                    payload:res.data
                }
            });
        }
    }
)(Swiper);