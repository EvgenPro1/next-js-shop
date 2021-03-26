import React from "react";
import {shallowEqual, useSelector} from "react-redux";

export const TotalPrice = () => {
    const currency = useSelector(({currency}) => currency, shallowEqual)
    const listProduct = useSelector(({listProduct}) => listProduct)

    const arrTotalPrice = listProduct.map(({price = 0, quantity = 0}) => {
        return price * quantity
    })
    const totalPrice = listProduct.length ? arrTotalPrice.reduce((a, b) => a + b) : 0
    const {name, value} = currency.find(({active}) => active)

    return (<div className='d-flex'>
        Total price: {Math.floor(totalPrice / value)} {name}.</div>)
}

