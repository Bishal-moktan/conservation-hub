import Image from 'next/image';
import effect from '../../../public/images/effect.png';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <section className={styles.container}>
      <h1>Green Revolution For The Earth</h1>
      <div className={styles.image}>
        <Image src={effect} />
      </div>
    </section>
  );
};
export default Landing;
