import A from "./A";
import Head from "next/head";


export const MainContainer = ({children, name}) => {
    return (<>
            <Head>
                <meta keywords = {`Stuff cloth ${name}`}></meta>
                <title>{name}</title>
            </Head>

        <div className="navbar navbar-dark bg-primary">
            <A href="/" name="Main page"/>
            <A href="/products" name="Product page"/>
            <A href="/cart" name="Cart"/>
        </div>
            <h1 className='text-center'>{name}</h1>
            <div className='justify-content-center d-flex flex-wrap'>
                {children}
            </div>
        </>
    )
}
