import {combineReducers} from "redux";
import {HYDRATE} from 'next-redux-wrapper';
import cookie from "cookie";

import currency from "./currencyReducer";
import listProduct from "./productReducer";

const rootReducer = combineReducers({
        currency, listProduct,
    }
)

/** \/ из документации \/ **/
// create your reducer
export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export  const parseCookies = (req) => cookie.parse(req ? req.header.cookie || "" : document.cookie)