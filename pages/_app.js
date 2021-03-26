import {wrapper} from "../store/";

import '../styles/global.css'
import '../styles/bootstrap.min.css'

function MyApp({Component, pageProps}) {
    return <Component {...pageProps}/>
}

export default wrapper.withRedux(MyApp);