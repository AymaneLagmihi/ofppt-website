import '@/styles/global/globals.css';
import { AppProps } from 'next/app';
import Layout from './layout/Layout';


export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  ) 
}
