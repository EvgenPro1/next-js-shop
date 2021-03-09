import {useRouter} from "next/router";
import {MainContainer} from "../../component/MainContainer";
import axios from "axios";
import A from "../../component/A";
import {Button} from "../../component/Button";


export default function currentProduct ({currentProduct}) {
    const value = 1
    const name = 'UAH'
    const {title, description, price, image} = currentProduct

    const addProductToCart = () => {
        const [product] = allProducts.find((item) => item.id === id);
        dispatch(createBuyProduct(product))}

    return (
        <MainContainer name={title}>
            <div className='col-9 d-flex flex-column w-75 ml-auto mr-auto'>
                <div className="product-grid ">
                    {/*<h3 className='d-flex justify-content-center'>Name: {title}</h3>*/}
                    <h4 className='d-flex justify-content-center'>{description}</h4>
                    <div className='d-flex justify-content-center text-success'>
                        Price: {Math.floor(price / value)} {name}.</div>
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
    const {data:currentProduct} = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
    return {
        props: {currentProduct}
    }
}
