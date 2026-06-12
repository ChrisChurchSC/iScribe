import { IconStarFilled, IconCheck } from '@tabler/icons-react'
import { useInView } from '../hooks/useInView'
import styles from './BentoSection.module.css'

const STARS = [0, 1, 2, 3, 4]

const SPECIALTIES = [
  'Primary Care', 'Cardiology', 'Pediatrics', 'Orthopedics',
  'Neurology', 'OB-GYN', 'Oncology', 'Dermatology',
  'Psychiatry', 'Emergency',
]

const LOGO_TOKEN = import.meta.env.VITE_LOGODEV_TOKEN

const EHR_DOTS = [
  { name: 'Epic', domain: 'epic.com' },
  { name: 'Oracle Health', domain: 'cerner.com', size: 19 },
  { name: 'athenahealth', domain: 'athenahealth.com' },
  { name: 'eClinicalWorks', domain: 'eclinicalworks.com' },
  { name: 'NextGen', domain: 'nextgen.com' },
]

const ehrLogo = (domain) =>
  LOGO_TOKEN ? `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}&format=png&size=100&retina=true` : null

const DOT_XS = [30, 75, 120, 165, 210]
const HUB = { x: 120, y: 120 }

function EhrHub() {
  return (
    <svg viewBox="0 0 240 152" className={styles.ehrSvg} role="img" aria-label="EHRs connecting to iScribe">
      <defs>
        <filter id="ehrShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#141828" floodOpacity="0.16" />
        </filter>
      </defs>
      <g stroke="#0033D8" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="2 3">
        {DOT_XS.map((x, i) => <line key={i} x1={x} y1="28" x2={HUB.x} y2={HUB.y} />)}
      </g>
      {DOT_XS.map((x, i) => (
        <circle key={i} cx={x} cy="28" r="19" fill="#fff" stroke="rgba(26,25,23,0.05)" filter="url(#ehrShadow)" />
      ))}
      {EHR_DOTS.map((e, i) => {
        const src = ehrLogo(e.domain)
        if (!src) return null
        const s = e.size || 26
        return <image key={e.name} href={src} x={DOT_XS[i] - s / 2} y={28 - s / 2} width={s} height={s} preserveAspectRatio="xMidYMid meet" />
      })}
      <circle cx={HUB.x} cy={HUB.y} r="25" fill="#0033D8" filter="url(#ehrShadow)" />
      <path
        d="M0,-10 C1.6,-2.8 2.8,-1.6 10,0 C2.8,1.6 1.6,2.8 0,10 C-1.6,2.8 -2.8,1.6 -10,0 C-2.8,-1.6 -1.6,-2.8 0,-10 Z"
        transform={`translate(${HUB.x} ${HUB.y})`}
        fill="#fff"
      />
    </svg>
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
          <div className={styles.ehrDiagram}><EhrHub /></div>
          <p className={styles.tileEHeading}>Works with your EHR</p>
          <p className={styles.tileEBody}>Integrates with Epic, Cerner, athenahealth, eClinicalWorks, and 50+ more.</p>
        </div>

      </div>
    </section>
  )
}
