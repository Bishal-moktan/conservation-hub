import styles from './AboutLanding.module.css';

const AboutLanding = ({ title }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
};
export default AboutLanding;
