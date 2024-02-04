import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className= {styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Front-end developer</h1>
        <p className={styles.description}>I am Ahmed Khaled, front-end web developer</p>
        <button className={styles.button}>Contact now</button>
      </div>
    <dir className={styles.col}>
      <Image src="/images/hero.svg"
      width={600}
      height={600}
        className={styles.image}
        alt='Home image'/>
    </dir>
    </div>
  );
}
