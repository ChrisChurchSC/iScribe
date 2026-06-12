import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './Integrations.module.css'

// logo.dev serves logos by domain. Add your publishable token to .env as
// VITE_LOGODEV_TOKEN=pk_xxx — without it, cards fall back to the wordmark.
const LOGO_TOKEN = import.meta.env.VITE_LOGODEV_TOKEN

const SYSTEMS = [
  { name: 'Epic', domain: 'epic.com', scale: 1.7 },
  { name: 'Cerner', domain: 'cerner.com', scale: 0.7 },
  { name: 'athenahealth', domain: 'athenahealth.com', scale: 1.9 },
  { name: 'eClinicalWorks', domain: 'eclinicalworks.com' },
  { name: 'NextGen', domain: 'nextgen.com', scale: 1.5 },
  { name: 'Practice Fusion', domain: 'practicefusion.com', scale: 1.4 },
  { name: 'Kareo', domain: 'kareo.com', scale: 1.4 },
  { name: 'Greenway', domain: 'greenwayhealth.com', scale: 1.5 },
  { name: 'AdvancedMD', domain: 'advancedmd.com', scale: 1.4 },
  { name: 'DrChrono', domain: 'drchrono.com', scale: 1.0 },
]

function LogoMark({ name, domain, scale }) {
  const [failed, setFailed] = useState(false)
  const src = LOGO_TOKEN
    ? `https://img.logo.dev/${domain}?token=${LOGO_TOKEN}&format=png&size=200&retina=true`
    : null

  if (!src || failed) {
    return <span className={styles.logoText}>{name}</span>
  }
  return (
    <img
      key={src}
      src={src}
      alt={name}
      className={styles.logoImg}
      style={scale ? { transform: `scale(${scale})` } : undefined}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function Integrations() {
  const [ref, visible] = useInView()
  const rv = 'reveal' + (visible ? ' visible' : '')

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header}>
        <p className={`${styles.eyebrow} ${rv}`}>Integrations</p>
        <h2 className={`${styles.heading} ${rv}`} style={{ transitionDelay: '80ms' }}>
          Your preferred EHR<br />already works with iScribe.
        </h2>
        <p className={`${styles.sub} ${rv}`} style={{ transitionDelay: '140ms' }}>
          No copy pasting, switching tabs, or losing information.
        </p>
      </div>
      <div className={styles.grid}>
        {SYSTEMS.map((sys, i) => (
          <div
            key={sys.name}
            className={`${styles.logo} ${rv}`}
            style={{ transitionDelay: `${200 + i * 40}ms` }}
          >
            <div className={styles.logoMark}>
              <LogoMark name={sys.name} domain={sys.domain} scale={sys.scale} />
            </div>
            <span className={styles.logoName}>{sys.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
