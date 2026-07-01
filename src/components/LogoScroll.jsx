import styles from './LogoScroll.module.css'

const LOGOS = [
  { src: '/logos/fc-logo.png', alt: 'Forbes Councils' },
  { src: '/logos/healthcare-it-today.png', alt: 'Healthcare IT Today' },
  { src: '/logos/hospital-review.png', alt: "Becker's Hospital Review" },
  { src: '/logos/fierce-healthcare.png', alt: 'Fierce Healthcare' },
  { src: '/logos/patientpop.png', alt: 'PatientPop' },
]

// Repeat the base set so a single half is wide enough to fill any viewport,
// keeping the -50% loop seamless (each half is an identical set of logos).
const HALF = [...LOGOS, ...LOGOS, ...LOGOS]

export default function LogoScroll() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        <div className={styles.inner}>
          {[...HALF, ...HALF].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className={styles.logo}
              loading="eager"
              decoding="async"
              draggable="false"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
