import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My page</title>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adip</p>
      <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adip</p>
      <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adip</p>
      <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adip</p>
      <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adip</p>
      <a className={styles.btn}>I{`'`}m a button</a>
    </div>

  );
}
