import Document , {Html, Head, NextScript, Main} from "next/document";


class MyDocument extends Document {
    render(){
        return <Html lang='en'>
            <Head>
                 <link rel="icon" href="/Favicon.png" />
                
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