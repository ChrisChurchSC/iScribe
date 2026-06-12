import { useInView } from '../hooks/useInView'
import styles from './ProductSection.module.css'

export default function ProductSection() {
  const [ref, visible] = useInView()
  const rv = 'reveal' + (visible ? ' visible' : '')

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.intro}>
        <p className={`${styles.eyebrow} ${rv}`}>See it in action</p>
        <h2
          className={`${styles.heading} ${rv}`}
          style={{ transitionDelay: '80ms' }}
        >
          One intuitive interface.<br />One exceptional experience.
        </h2>
        <p className={`${styles.sub} ${rv}`} style={{ transitionDelay: '140ms' }}>
          94% of providers adopt iScribe after trial, compared to the industry benchmark of 57% adoption.
        </p>
      </div>
      <div
        className={`${styles.videoWrap} ${rv}`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className={styles.videoInner}>
          <video
            className={styles.video}
            src="/product-demo.webm"
            autoPlay
            muted
            loop
            playsInline
          />
          <button className={styles.playBtn} aria-label="Play">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3 2.5l10 5.5-10 5.5V2.5z"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
