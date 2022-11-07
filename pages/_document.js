import Document , {Html, Head, NextScript, Main} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
    render(){
        return <Html lang='en'>
            <Head>
                 <link rel="icon" href="/Favicon.png" />
                 <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LQZ20M4DHJ"></Script>
                <Script src='/googleanalytics.js'/>
            </Head>
            <body>
                <Main>
                   
    
                </Main>
                <NextScript/>
            </body>
        </Html>
    }
}

export default MyDocument;