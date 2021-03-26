import Head from "next/head";

import A from "./A";
import {TotalPrice} from "./TotalPrice";
import {CurrencySwitcher} from "./CurrencySwitcher";

export const MainContainer = ({children, name}) => {
    return (<>
            <Head>
                <meta keywords = {`Stuff cloth ${name}`}/>
                <title>{name}</title>
            </Head>

        <div className="navbar navbar-dark bg-primary">
            <A href="/" name="Main page"/>
            <A href="/products" name="Products page"/>
            <A href="/cart" name="Cart"/>
            </div>
            <div className="navbar navbar-light bg-info justify-content-center">
                <CurrencySwitcher/>
                <TotalPrice/>
        </div>
            <h1 className='text-center'>{name}</h1>
            <div className='justify-content-center d-flex flex-wrap'>
                {children}
            </div>
        </>
    )
}
