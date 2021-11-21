import '../styles/globals.scss'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
