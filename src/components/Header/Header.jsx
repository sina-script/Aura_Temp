import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.floatingHeader}>
        <div className={styles.logoContainer}>
          <span className={styles.logoText}>madrina house</span>
        </div>

        <nav className={styles.navMenu}>
          <a href="#" className={styles.navItem}>
            Explore
          </a>
          <a href="#" className={styles.navItem}>
            Collection
          </a>
          <a href="#" className={styles.navItem}>
            Heritage
          </a>
          <a href="#" className={styles.navItem}>
            Contact
          </a>
        </nav>

        <div className={styles.actionContainer}>
          <button className={styles.luxuryBtn}>
            <span>sign up</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
