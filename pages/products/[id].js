import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {shallowEqual} from "@babel/types";

import {MainContainer} from "../../component/MainContainer";
import A from "../../component/A";
import {Button} from "../../component/Button";
import {createBuyProduct} from "../../store/actionCreators";


export default function currentProduct({currentProduct}) {
    const currency = useSelector(({currency}) => currency, shallowEqual)
    const dispatch = useDispatch()
    const {name, value} = currency.find(({active}) => active)
    const {title, description, price, image, id} = currentProduct
    const addProductToCart = () => {
        dispatch(createBuyProduct(currentProduct))
    }

    return (
        <MainContainer name={title}>
            <div className='col-9 d-flex flex-column w-75 ml-auto mr-auto'>
                <div className="product-grid ">
                    <h4 className='d-flex justify-content-center'>{description}</h4>
                    <div className='d-flex justify-content-center text-success'>
                        Price: {Math.floor(price / value)} {name}.
                    </div>
                    <div className="product-image d-flex justify-content-center">
                        <img className='img-fluid w-75' width='10px' height='10px' src={image} alt=""/>
                    </div>
                </div>
                <A name='<<<< вернуться' href='/products' className='d-block btn mt-1 btn-outline-info btn-sm mb-2'/>
                <Button onClick={addProductToCart} className='d-block btn btn-outline-success mb-1'
                        text='В корзину &#128722;'/>
            </div>
        </MainContainer>
    );
};

export async function getServerSideProps({params}) {
    const {data: currentProduct} = await axios.get(`https://fakestoreapi.herokuapp.com/products/${params.id}`)
    return {
        props: {currentProduct}
    }
}

