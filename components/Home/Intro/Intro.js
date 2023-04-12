import Image from 'next/image';
import styles from './Intro.module.css';
import largeImage from '../../../public/images/pond.jpg';

const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image src={largeImage} />
      </div>
      <div className={styles.content}>
        <h2>We Are The Agent Of Earth</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          omnis incidunt nisi veniam necessitatibus tempora quo distinctio amet
          saepe maxime. Perferendis voluptate consectetur ullam. Sunt esse ullam
          eveniet temporibus repudiandae?
        </p>
        <button className="btn">Read more</button>
      </div>
    </section>
  );
};
export default Intro;
