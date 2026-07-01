import { useInView } from '../hooks/useInView'
import styles from './Integrations.module.css'

const LOGOS = [
  { name: 'Forbes Councils', logo: '/logos/fc-logo.png' },
  { name: 'Healthcare IT Today', logo: '/logos/healthcare-it-today.png' },
  { name: "Becker's Hospital Review", logo: '/logos/hospital-review.png' },
  { name: 'Fierce Healthcare', logo: '/logos/fierce-healthcare.png' },
  { name: 'PatientPop', logo: '/logos/patientpop.png' },
]

// Two identical halves so the -50% scroll loops seamlessly; each half repeats
// the set so it stays wider than the viewport on large screens.
const HALF = [...LOGOS, ...LOGOS, ...LOGOS]

export default function Integrations() {
  const [ref, visible] = useInView()
  const rv = 'reveal' + (visible ? ' visible' : '')

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header}>
        <p className={`${styles.eyebrow} ${rv}`}>Integrations</p>
      </div>
      <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          {[...HALF, ...HALF].map((sys, i) => (
            <img
              key={i}
              src={sys.logo}
              alt={sys.name}
              className={styles.tickerLogo}
              loading="eager"
              decoding="async"
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
