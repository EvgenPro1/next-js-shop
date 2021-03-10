

const initialState = [];

export const productReducer = (state = initialState, {type, payload}) => { //приходит криейтор и целый обект товара
    const newState = {...state}
    switch (type) {
       /* case "BUY_PRODUCT":
            const newStateBuy = state.map((item) => ({...item})) // зная уровень вложенности копируем стейт, чтоб не мутировать
            const productBuy = newStateBuy.find(({id}) => payload.id === id) //определяем есть ли продукт в корзине
            const indexBuy = newStateBuy.findIndex(({id}) => id === payload.id) // находим индекс товара или -1
            if (productBuy) {  // если товар есть но жмакаем "купить товар" а не "+"...
                ((() => {
                    newStateBuy[indexBuy].quantity++ //добавляем 1
                })())
            }
            return productBuy ? [...newStateBuy] : [...newStateBuy, payload] //если товара нет добавляем его

        case "INCREMENT_PRODUCT":
            const newStateInc = state.map((item) => ({...item}))
            const productInc = newStateInc.find(({id}) => payload.id === id) // нашли в корзине присланый товар
            productInc.quantity++
            return [...newStateInc]

        case "DECREMENT_PRODUCT":
            const newStateDec = state.map((item) => ({...item}))
            const productDec = newStateDec.find(({id}) => payload.id === id)  //копипаста предыдущего
            if (productDec.quantity) {
                productDec.quantity--
            }
            if (!productDec.quantity) { //обязательно проверили остался ли товар
                const indexDec = newStateDec.findIndex(({id}) => id === payload.id)
                newStateDec.splice(indexDec, 1) // если нет, удалили со списка объект
            }
            return [...newStateDec]

        case "DELETE_PRODUCT": // тут просто нашли индекс товара в корзине и удалили товар
            const newStateDel = state.map((item) => ({...item}))
            const indexDel = newStateDel.findIndex(({id}) => id === payload.id)
            newStateDel.splice(indexDel, 1)
            return [...newStateDel]
*/
        default:
            return state
    }
}


// export default productReducer
















