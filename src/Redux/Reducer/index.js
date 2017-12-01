const getLunboImgUrl = (state=[],info)=>{
    let {type,payload} = info ;
    switch(type){
        case 'lunboImgUrl' : return payload;
        default:return state ;
    }
}

const getSnapUpInfo = (state=[],info)=>{
    let {type,payload} = info ;
    switch(type){
        case 'getSnapUpInfo':return payload;
        default:return state ;
    }
}

const getKnowNeedInfo = (state=[],info)=>{
    let {type,payload} = info;
    switch(type){
        case 'getKnowNeedInfo': return payload.data;
        default:return state;
    }
}

const shopCart = (state=[],info)=>{
    let {type,payload} =info;
    switch(type){
        case 'shopCart':return payload;
        default:return state;
    }
}

const getPage = (state=1,info)=>{
    let {type,payload} = info;
    switch(type){
        case 'getPage':return payload;
        default:return state;
    }
}

const getSearchPage = (state=1,info)=>{
    let {type,payload} = info ;
    switch(type){
        case 'getSearchPage':return payload;
        default:return state;
    }
}

export {getLunboImgUrl,getSnapUpInfo,getKnowNeedInfo,shopCart,getPage,getSearchPage};