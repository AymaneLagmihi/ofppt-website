import Image from 'next/image';
import logo from '../../public/logo.png';
import styles from '../../styles/layout/footer.module.css';

export default function Footer() {
    return(
        <>
            <div className="footer">
                <div className="leftFooter">
                    <Image src={logo}></Image>
                </div>

                <div className="centerFooter">

                </div>

                <div className="rightFooter">

                </div>
            </div>
        </>
    )
}