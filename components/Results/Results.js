import styles from './Results.module.css';
import img1 from '../../public/images/digging.jpg';
import img2 from '../../public/images/landing2.jpg';
import Image from 'next/image';

const Results = () => {
  const content = [
    {
      title: 'Our Effort',
      desc: 'Donec in posuere ipsum. Etiam hendrerit elit lorem, in elementum tortor finibus nec. Pellentesque at ex sed augue tempus suscipit id ac erat. Pellentesque feugiat elit nec volutpat efficitur. Ut lacinia molestie quam in varius. Fusce eu est ac libero porta molestie. Vestibulum commodo vitae neque nec volutpat. Sed porttitor pulvinar ipsum a accumsan.',
      img: img1,
    },
    {
      title: 'The Result',
      desc: 'Donec in posuere ipsum. Etiam hendrerit elit lorem, in elementum tortor finibus nec. Pellentesque at ex sed augue tempus suscipit id ac erat. Pellentesque feugiat elit nec volutpat efficitur. Ut lacinia molestie quam in varius. Fusce eu est ac libero porta molestie. Vestibulum commodo vitae neque nec volutpat. Sed porttitor pulvinar ipsum a accumsan.',
      img: img2,
    },
  ];
  return (
    <div className={styles.container}>
      {content.map((item, index) => {
        const { title, desc, img } = item;
        return (
          <div className={styles.item} key={index}>
            <div className={styles.info}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
            <div className={styles.image}>
              <Image src={img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Results;
