const getLunboImgUrl = (state=[],info)=>{
    let {type,payload} = info ;
    switch(type){
        case 'lunboImgUrl' : return payload;
        default:return state ;
    }
}

export default getLunboImgUrl;