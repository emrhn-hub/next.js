import Link from 'next/link'
import Navigation from '../components/navbar'
import Layout from '../components/master-page'
import Head from 'next/head'

function Home() {
    return <Layout>
        <Head>
            <title>Hakkımda</title>
        </Head>
        <h1>About</h1>
    </Layout>
}
export default Home