import styles from './ProjectStatus.module.css';

const ProjectStatus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Overview</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos eius
          optio eveniet recusandae ut dignissimos voluptas ullam id earum, quam
          sint dolorum qui quibusdam vel distinctio! Quae debitis a illo nihil
          aut minima eaque odio. Eum qui neque ipsum illo nihil animi excepturi.
          Delectus facere earum enim quisquam ducimus! Ex.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tenetur
          dolore? Nulla facilis consequatur et blanditiis sunt similique
          sapiente, suscipit officiis velit voluptate beatae non eius voluptatum
          fugiat explicabo architecto perspiciatis est, nesciunt ea delectus
          iste sequi dicta a accusantium! Incidunt veritatis quae velit aliquam
          modi totam cum beatae cupiditate!
        </p>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.7263993670986!2d75.70256857449596!3d31.255996560158177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1681334135103!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h4>Project Information</h4>
        <p>Status - Ongoing</p>
      </div>
    </div>
  );
};
export default ProjectStatus;
