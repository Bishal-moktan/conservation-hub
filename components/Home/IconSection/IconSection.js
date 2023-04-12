import Image from 'next/image';
import styles from './IconSection.module.css';
import eco1 from '../../../public/images/eco1.png';
import eco2 from '../../../public/images/eco2.png';
import eco3 from '../../../public/images/eco3.png';
import eco4 from '../../../public/images/eco4.png';

const IconSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <Image src={eco1} />
        </div>
        <h5>Wildlife Coservation</h5>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <Image src={eco2} />
        </div>
        <h5>Tree Propagation</h5>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <Image src={eco3} />
        </div>
        <h5>Global Goals</h5>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <Image src={eco4} />
        </div>
        <h5>Replanting Forest</h5>
      </div>
    </div>
  );
};
export default IconSection;
