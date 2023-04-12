import styles from './Project.module.css';

const Project = () => {
  const content = [
    {
      title: 'Camera Trap Monitoring',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aperiam.',
    },
    {
      title: 'Forest Rejuventation',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aperiam.',
    },
    {
      title: ' Kelp Forest Replanting',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aperiam.',
    },
  ];
  return (
    <section className={styles.container}>
      <h2>Project We Worked On Now</h2>
      <div className={styles.contentContainer}>
        {content.map((item, index) => {
          const { title, desc } = item;
          return (
            <article key={index} className={styles.content}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Project;
