import '@/styles/global/globals.css';
import { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import PreLoader from './PreLoader';


export default function App({ Component, pageProps }) {
  
    // switch(Component){
    //   case SeConnecter():{
    //     return <Component {...pageProps} />;
    //   }
    //   default :
        return (
          <div className='allComponent'>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        ) 
    // }
    
  
}
