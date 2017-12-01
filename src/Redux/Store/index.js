import {createStore,combineReducers} from "redux";
import {applyMiddleware} from "redux";
import reduxpromise from "redux-promise";

import {getLunboImgUrl,getSnapUpInfo,getKnowNeedInfo,shopCart,getPage, getSearchPage} from "../Reducer";

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(
applyMiddleware(reduxpromise),
// other store enhancers if any
); //开发阶段 调试redux 工具要加的话

const store = createStore(combineReducers({
    getLunboImgUrl,
    getSnapUpInfo,
    getKnowNeedInfo,
    shopCart,
    getPage,
    getSearchPage
}),enhancer);

export default store;