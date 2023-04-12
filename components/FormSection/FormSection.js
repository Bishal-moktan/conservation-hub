import { BsFillTelephoneFill } from 'react-icons/bs';
import styles from './FormSection.module.css';
import { MdSmartphone } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';

const FormSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.form}>
        <h3>Get in touch</h3>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button className="btn">Send Now</button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contact}>
          <h3>Contact Info</h3>
          <span>Address: 124 Random Adress</span>
          <div className="icon__container">
            <div className={styles.info}>
              <BsFillTelephoneFill />
              <span> +1800-222-3333</span>
            </div>
            <div className={styles.info}>
              <MdSmartphone />
              <span> +1800-222-3333</span>
            </div>
            <div className={styles.info}>
              <FiMail />
              <span> contact@renewable.com</span>
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.7263993670986!2d75.70256857449596!3d31.255996560158177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1681334135103!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default FormSection;
