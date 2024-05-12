
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Trailogix</div>
      <div className={styles.text}>
        Trailogix  trailer booking site © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
