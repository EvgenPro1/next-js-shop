import React from "react";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {createChangeCurrency} from "../../store/actionCreators";

export const CurrencySwitcher = () => {
    const currency = useSelector(({currency}) => currency, shallowEqual)
    const dispatch = useDispatch()
    const curr = currency.find(({active}) => active)
    const currencyList = currency.map(({abbr, id}) => <option key ={id} value={abbr}>{abbr}</option>)
    const changeCurrency = ({target}) => {dispatch(createChangeCurrency(target.value))}
    const switcher = <select value={curr.abbr} onChange={changeCurrency} className='position-absolute fixed-top pull-right'>{currencyList}</select>

      return (
        <>
            {switcher}
        </>
    );
}


