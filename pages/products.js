import {useState, useEffect} from "react";

import Link from "next/link";
import A from "../component/A";
import {Button} from "../component/Button";
import axios from "axios";
import {MainContainer} from "../component/MainContainer";

const products = ({allProducts}) => {

    const value = 1
    const name = 'uah'

    const product = allProducts.map(({id, title, price, image, description}) => {

        const addProductToCart = () => {
            // const [product] = allProducts.find((item) => item.id === id);
            // dispatch(createBuyProduct(product))
        }
        return (
            <div className='d-inline-flex col-sm-3 border m-2 flex-column'>
                <div key={id} className="h-100">
                    <div className="product-grid">
                        <span className='d-flex justify-content-center'>Name: {title}</span>
                        <span className='d-flex justify-content-center'>Price: {Math.floor(price / value)} {name}.</span>
                        <div className="product-image ">
                            <Link href = {`/products/${id}`}>
                                <img className="img-fluid"
                                    src={image}
                                     alt=""/>
                        </Link>
                        </div>
                        <div className='text-truncate'>{description}</div>
                    </div>
                </div>
                <A href={`/products/${id}`} name='Детально >>>'/>
                <Button onClick={addProductToCart} className='d-block btn btn-outline-success mb-1'
                        text='В корзину &#128722;'/>
            </div>
        )
    })

    return (
        <MainContainer name = 'Our products'  >
            {product}
        </MainContainer>
    );
};

export async function getStaticProps() {
    const {data:allProducts} = await axios.get('https://fakestoreapi.com/products')
    return {
        props: {allProducts}
    }
}

export default products;