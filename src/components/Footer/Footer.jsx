import Image from 'next/image';
import Styles from './footer.module.css'

function Footer() {
  return (
    <div className= {Styles.container}>
      <div>&copy;2023 Hexashop .All rights reserved</div>
      <div className={Styles.social}>
        <Image src="/images/icons/facebook.png"
        width={20}
        height={20}
        className={Styles.icon}
        alt='facebook link'/>
         <Image src="/images/icons/instagram.png"
        width={20}
        height={20}
        className={Styles.icon}
        alt='instagram link'/>
         <Image src="/images/icons/linkedin.png"
        width={20}
        height={20}
        className={Styles.icon}
        alt='linkedin link'/>
        <Image src="/images/icons/whatsapp.png"
        width={20}
        height={20}
        className={Styles.icon}
        alt='whatsapp link'/>
        <Image src="/images/icons/youtube.png"
        width={20}
        height={20}
        className={Styles.icon}
        alt='youtube link'/>
      </div>
    </div>
  )
}

export default Footer;
