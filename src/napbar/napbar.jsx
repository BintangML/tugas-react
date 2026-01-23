import styles from "./napbar.module.css";

const napbar = () => {
  return (
    <nav className={styles.napbar}>
      <div className={styles.logo}>My App</div>
      <div className={styles.menu}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default napbar;
