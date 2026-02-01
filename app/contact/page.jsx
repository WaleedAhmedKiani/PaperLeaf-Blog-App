import styles from "./contactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact PaperLeaf</h1>
      <p className={styles.text}>
        Have questions, suggestions, or just want to say hello? Fill out the form
        below and we’ll get back to you!
      </p>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={styles.input}
        />
        <textarea
          placeholder="Your Message"
          className={`${styles.input} ${styles.textarea}`}
        />
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
