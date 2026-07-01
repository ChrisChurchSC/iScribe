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

      <div className={`${styles.showcase} ${rv}`} style={{ transitionDelay: '200ms' }}>
        <img src="/patient-note.png" className={styles.showcaseImg} alt="iScribe capturing a patient visit in real time" />
      </div>
    </section>
  )
}
