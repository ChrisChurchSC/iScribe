import { IconStarFilled, IconCheck } from '@tabler/icons-react'
import { useInView } from '../hooks/useInView'
import styles from './BentoSection.module.css'

const STARS = [0, 1, 2, 3, 4]

const SPECIALTIES = [
  'Primary Care', 'Cardiology', 'Pediatrics', 'Orthopedics',
  'Neurology', 'OB-GYN', 'Oncology', 'Dermatology',
  'Psychiatry', 'Emergency',
]

// Deterministic waveform profile for the ambient-capture visual
const WAVE = Array.from({ length: 48 }, (_, i) => {
  const v = Math.sin(i * 0.5) * 0.5 + Math.sin(i * 1.2) * 0.3 + Math.sin(i * 2.4) * 0.2
  return 0.16 + Math.abs(v) * 0.84
})

function Waveform() {
  return (
    <div className={styles.waveform} aria-hidden="true">
      {WAVE.map((h, i) => <span key={i} style={{ height: `${h * 100}%` }} />)}
    </div>
  )
}

export default function BentoSection() {
  const [ref, visible] = useInView()
  const rv = 'reveal' + (visible ? ' visible' : '')

  return (
    <section ref={ref} className={styles.section}>

      <div className={styles.header}>
        <h2 className={`${styles.heading} ${rv}`}>
          Over 500+ Five-Star Reviews
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
          <div className={styles.specialtyTags}>
            {SPECIALTIES.map(s => (
              <span key={s} className={styles.specialtyTag}>
                <IconCheck size={13} strokeWidth={2.4} />
                {s}
              </span>
            ))}
          </div>
          <p className={styles.bigNum}>12+</p>
          <p className={styles.bigNumLabel}>specialties supported, including orthopedics</p>
        </div>

        <div className={`${styles.tile} ${styles.tileB} ${rv}`} style={{ transitionDelay: '280ms' }}>
          <img src="/phone-in-hand.png" className={styles.tileBPhone} alt="" />
          <p className={`${styles.tileEyebrow} ${styles.tileBText}`}>How it works</p>
          <h3 className={`${styles.tileBHeading} ${styles.tileBText}`}>95% audited E&amp;M<br />coding accuracy</h3>
          <p className={`${styles.tileBBody} ${styles.tileBText}`}>iScribe runs quietly during your patient visit. When you wrap up, a complete clinical note is ready — formatted to your EHR, reviewed in seconds.</p>
        </div>

        <div className={`${styles.tile} ${styles.tileC} ${rv}`} style={{ transitionDelay: '360ms' }}>
          <img src="/illustrations/illo-clock.png" className={styles.tileIllo} alt="" />
          <p className={styles.bigNum}>2.5 hrs</p>
          <p className={styles.bigNumLabel}>saved per physician, per day</p>
        </div>

        <div className={`${styles.tile} ${styles.tileD} ${rv}`} style={{ transitionDelay: '440ms' }}>
          <img src="/illustrations/illo-lock.png" className={styles.tileIllo} alt="" />
          <p className={styles.tileDHeading}>HIPAA compliant. SOC 2 certified.</p>
          <p className={styles.tileDBody}>Patient conversations are encrypted end-to-end and never stored beyond the session.</p>
        </div>

        <div className={`${styles.tile} ${styles.tileE} ${rv}`} style={{ transitionDelay: '520ms' }}>
          <div className={styles.waveWrap}><Waveform /></div>
          <p className={styles.tileEHeading}>Discretion meets accuracy</p>
          <p className={styles.tileEBody}>Sensitive diagnoses and comorbidities are discussed and captured in real-time.</p>
        </div>

      </div>
    </section>
  )
}
