import styles from "./aboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About PaperLeaf</h1>
      <p className={styles.text}>
        Welcome to <span className={styles.highlight}>PaperLeaf</span> – your
        go-to blog for insightful articles on lifestyle, travel, fashion, and more.
      </p>
      <p className={styles.text}>
        Our mission is to provide high-quality content in a clean, readable
        format while supporting dark/light mode seamlessly.
      </p>
    </div>
  );
};

export default AboutPage;
