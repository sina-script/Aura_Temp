import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>

      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <h2 className={styles.logo}>
              MADRINA HOUSE
            </h2>
            <p className={styles.brandDesc}>
              Engineering the next generation of precision assets and immersive
              digital experiences.
            </p>
          </div>

          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>Stay Ahead</h4>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.inputField}
              />
              <button className={styles.subscribeBtn}>Join</button>
            </div>
          </div>
        </div>

        <div className={styles.linksGrid}>
          <div className={styles.linkColumn}>
            <h4>Ecosystem</h4>
            <a href="#assets">Master Assets</a>
            <a href="#chronicles">Chronicles</a>
            <a href="#vault">The Vault</a>
          </div>

          <div className={styles.linkColumn}>
            <h4>Intelligence</h4>
            <a href="#protocol">Protocols</a>
            <a href="#security">Quantum Security</a>
            <a href="#research">Research Lab</a>
          </div>

          <div className={styles.linkColumn}>
            <h4>Network</h4>
            <a href="#node">Node Status</a>
            <a href="#partners">Global Partners</a>
            <a href="#press">Press Kit</a>
          </div>

          <div className={styles.linkColumn}>
            <h4>Connect</h4>
            <a href="#terminal">Terminal</a>
            <a href="#discord">Community</a>
            <a href="#support">Support Core</a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} CHRONO. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
