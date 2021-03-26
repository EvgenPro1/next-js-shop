import jsCookie from "js-cookie"

import {initialCurrencyState} from "../initialCurrencyState";
import {CHANGE_CURRENCY} from "../actions";


const currencyReducer = (state = initialCurrencyState, {type, payload} ) => {
    switch (type) {
        case CHANGE_CURRENCY:
            const newCurrency = state.map(item => ({...item, active: item.abbr === payload}))
            jsCookie.set("currency", newCurrency)
            return (newCurrency)
        default:
             return jsCookie.get("currency") ? JSON.parse(jsCookie.get("currency")) : [...state]
    }
}

export default currencyReducer





