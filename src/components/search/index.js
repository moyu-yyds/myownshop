import React,{Component} from "react";
import {connect} from 'react-redux';


import './index.scss';

class Search extends Component{
    render(){
        const {snapUpInfo,knowNeedInfo,page} = this.props;
        console.log(knowNeedInfo);
        var getinfo = this.props.match.params.info;
        var regExp = new RegExp(getinfo);
        var matchData = [];
        for(var i = 0 ; i < snapUpInfo.length ; i++){
            if(regExp.test(snapUpInfo[i].title)){
                matchData.push(Object.assign({},snapUpInfo[i],{type:'snapup'}));
            }
        }
        for(var i = 0 ; i < knowNeedInfo.length ; i++){
            if(regExp.test(knowNeedInfo[i].t)){
                matchData.push({"id":knowNeedInfo[i].sku,
                "src":"//img30.360buyimg.com/img/"+knowNeedInfo[i].img,
                "title":knowNeedInfo[i].t,
                "nowprice":knowNeedInfo[i].jp,
                "type":"knowneed"
            });
            }
        }
        var totalPage =  [];
        var totalNum = matchData.length;
        for(var i = 0 ; i < Math.ceil(matchData.length / 5) ; i++){
            totalPage.push(i+1);
        }
        var realData = [];
        function findRenderData(page){
            for(var i = (page-1)*5 ; i < page * 5 ; i++){
                if(matchData[i]){
                    realData.push(matchData[i]);
                }
            }
        }
       findRenderData(this.props.page);
        if(matchData != 0){
            return (
                <section id="search">
                    <div className="search-title">
                        <i className="iconfont icon-back" onClick={this.goToHome.bind(this)}></i>
                        <span className="shopcart-title-name">你搜索到了<b>{totalNum}</b>件商品</span>    
                    </div>
                    <div className="search-list">
                        <div className="search-tabletitle">
                            <p className='search-listpic search-common'>图片</p>
                            <p className="search-name search-common">名称</p>
                            <p className="search-price search-common">价钱</p>
                        </div>
                        {
                            realData.map(item=>
                                <div key={item.id} className="search-produce" onClick={this.goToDetail.bind(this,{type:item.type,id:item.id})}>
                                    <p className='search-listpic search-common'><img src={item.src}/></p>
                                    <p className="search-name search-common">{item.title}</p>
                                    <p className="search-price search-common">￥{item.nowprice}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="shopcart-pagination">
                        {
                            totalPage.map(item=>
                                <span className="shopcart-pagenum" key={item} onClick={this.changePage.bind(this,item)}>{item}</span>
                            )
                        }
                    </div>
                </section>
            )
        }else{
            return (
                <section id="search">
                    <div className="search-title">
                        <i className="iconfont icon-back" onClick={this.goToHome.bind(this)}></i>
                        <span className="shopcart-title-name">你搜索到了....</span>    
                    </div>
                    <p>搜索不到该类商品，要不试试换个关键词</p>
                </section>
            )
        }
    }
    goToHome(){
        this.props.history.push('/home');
    }
    changePage(page){
        this.props.getSearchPage(page);
    }
    goToDetail(info){
        var data = JSON.stringify(info);
        this.props.history.push(`/detail/${data}`);
    }
}

export default connect(
    (state)=>{
        return {
            snapUpInfo:state.getSnapUpInfo,
            knowNeedInfo:state.getKnowNeedInfo,
            page:state.getSearchPage
        }
    },
    {
        getSearchPage(page){
            return {
                type:'getSearchPage',
                payload:page
            }
        }
    }
)(Search);