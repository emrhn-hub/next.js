import Navigation from "./navbar";
import Head from 'next/head'

function Layout({ children }) {
    return <div>
        <Head>
            <title>blog</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-flat.css"></link>
        </Head>
            <Navigation />

            <main>
                {children}
            </main>

            <footer>
                design by emirhan
        </footer>
    </div>
}
export default Layout