import { IconArrowRight } from '@tabler/icons-react'
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
          Do you trust your scribe<br />with E&amp;M accuracy?
        </h1>
        <p className={styles.subCopy}>
          The best documentation is meaningless without seamless integration every step of the way. iScribe not only captures the clinical narrative in the room, but carries that context through coding, improving efficiency and restoring peace of mind.
        </p>
        <div className={styles.ctaRow}>
          <button className={styles.ctaPrimary}>
            I&apos;m an administrator
            <IconArrowRight size={17} strokeWidth={1.8} />
          </button>
          <button className={styles.ctaSecondary}>
            I&apos;m a physician
            <IconArrowRight size={17} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <LogoScroll />

      <div className={styles.statCard}>
        <p className={styles.statNumber}>92%</p>
        <p className={styles.statLabel}>adoption rate after product trial</p>
      </div>
    </section>
  )
}
