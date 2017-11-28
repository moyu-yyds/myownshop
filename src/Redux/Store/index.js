import {createStore,applyMiddleware} from "redux";
import reduxpromise from "redux-promise";

import getLunboImgUrl from "../Reducer";

const store = createStore(getLunboImgUrl,applyMiddleware(reduxpromise));

export default store;