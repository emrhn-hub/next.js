import Layout from '../components/master-page'
import Head from 'next/head'


function Home() {
    return <Layout>
        <div class="w3-panel w3-flat-turquoise">
        <h2>London</h2>
  <p>London is the most populous city in the United Kingdom, with a metropolitan area of over 9 million inhabitants.</p> 
        </div>
        <Head>
            <title>Anasayfa</title>
        </Head>
        <h1>Welcome to first project</h1>

    </Layout>
}
export default Home