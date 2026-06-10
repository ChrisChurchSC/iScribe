import { IconStarFilled } from '@tabler/icons-react'
import { useInView } from '../hooks/useInView'
import styles from './BentoSection.module.css'

const STARS = [0, 1, 2, 3, 4]

export default function BentoSection() {
  const [ref, visible] = useInView()
  const rv = 'reveal' + (visible ? ' visible' : '')

  return (
    <section ref={ref} className={styles.section}>

      <div className={styles.header}>
        <h2 className={`${styles.heading} ${rv}`}>
          Built for the way clinicians work.
        </h2>
      </div>

      <div className={styles.reviewWrap}>
      <div className={`${styles.reviewCard} ${rv}`} style={{ transitionDelay: '120ms' }}>
        <img src="/avatars.svg" className={styles.avatars} alt="Physician reviewers" />
        <div className={styles.reviewRight}>
          <div className={styles.starsRow}>
            {STARS.map(i => (
              <IconStarFilled key={i} size={16} className={styles.star} />
            ))}
          </div>
          <p className={styles.ratingLabel}>4.9 on G2 · 500+ reviews</p>
        </div>
      </div>
      </div>

      <div className={styles.grid}>

        <div className={`${styles.tile} ${styles.tileA} ${rv}`} style={{ transitionDelay: '200ms' }}>
          <p className={styles.bigNum}>3x</p>
          <p className={styles.bigNumLabel}>faster documentation across all specialties</p>
        </div>

        <div className={`${styles.tile} ${styles.tileB} ${rv}`} style={{ transitionDelay: '280ms' }}>
          <img src="/phone-in-hand.webp" className={styles.tileBPhone} alt="" />
          <p className={`${styles.tileEyebrow} ${styles.tileBText}`}>How it works</p>
          <h3 className={`${styles.tileBHeading} ${styles.tileBText}`}>Ambient listening.<br />Structured notes.</h3>
          <p className={`${styles.tileBBody} ${styles.tileBText}`}>iScribe runs quietly during your patient visit. When you wrap up, a complete clinical note is ready — formatted to your EHR, reviewed in seconds.</p>
        </div>

        <div className={`${styles.tile} ${styles.tileC} ${rv}`} style={{ transitionDelay: '360ms' }}>
          <p className={styles.bigNum}>2.5 hrs</p>
          <p className={styles.bigNumLabel}>saved per physician, per day</p>
        </div>

        <div className={`${styles.tile} ${styles.tileD} ${rv}`} style={{ transitionDelay: '440ms' }}>
          <p className={styles.tileDHeading}>HIPAA compliant. SOC 2 certified.</p>
          <p className={styles.tileDBody}>Patient conversations are encrypted end-to-end and never stored beyond the session.</p>
        </div>

        <div className={`${styles.tile} ${styles.tileE} ${rv}`} style={{ transitionDelay: '520ms' }}>
          <p className={styles.tileEHeading}>Works with your EHR</p>
          <p className={styles.tileEBody}>Integrates with Epic, Cerner, athenahealth, eClinicalWorks, and 50+ more.</p>
        </div>

      </div>
    </section>
  )
}
