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
          Does your AI medical scribe work for you or do you work for it?
        </h1>
        <p className={styles.subCopy}>
          iScribe Premium is custom-built for you—no compromises, no workarounds—to reflect your vision and preferences. Powered by a dedicated team of support specialists available 24/7, iScribe Premium is a truly bespoke solution for ambient clinical documentation and coding.
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
