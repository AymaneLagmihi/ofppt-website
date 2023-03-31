import Header from './Header';
import Footer from './Footer';

export default function Layout(props: { children: any; }) {
    <>
        <Header/>   
            {props.children}
        <Footer/>
    </>
}