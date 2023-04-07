import '@/styles/global/globals.css';
import { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import PreLoader from './PreLoader';
import Header from 'next/head';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';



export default function App({ Component, pageProps }) {
  function scrollTop(){
    window.scrollTo(0, 0);
   }
  
    // switch(Component){
    //   case SeConnecter():{
    //     return <Component {...pageProps} />;
    //   }
    //   default :
        return (
          <div className='allComponent'>
            <Header>
              <meta charset="UTF-8"/>
              <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>Document</title>
            </Header>

            <Layout>
              <Component {...pageProps} />
              <button className='backBtn' onClick={scrollTop}>
                <KeyboardArrowUpRoundedIcon fontSize='large' className='arrow' />
              </button>
            </Layout>
          </div>
        ) 
    // }
    
  
}
