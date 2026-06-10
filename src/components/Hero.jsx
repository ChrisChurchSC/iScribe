import styles from './Hero.module.css'
import LogoScroll from './LogoScroll'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src="/impact-hero.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} />
      <div className={styles.gradientTop} />

      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Less charting.<br />More care.
        </h1>
        <p className={styles.subCopy}>
          iScribe listens to patient visits and writes clinical notes automatically, giving physicians hours back every day to focus on the people who need them most.
        </p>
        <div className={styles.emailCapture}>
          <input
            type="email"
            placeholder="Enter your work email"
            className={styles.emailInput}
          />
          <button className={styles.emailBtn}>Get Started Free</button>
        </div>
      </div>

      <LogoScroll />

      <div className={styles.statCard}>
        <p className={styles.statNumber}>2.5 hrs</p>
        <p className={styles.statLabel}>saved per physician, per day</p>
        <div className={styles.statDivider} />
        <p className={styles.statSub}>Doctors spend up to 49% of their time on documentation. iScribe gives it back.</p>
      </div>
    </section>
  )
}
