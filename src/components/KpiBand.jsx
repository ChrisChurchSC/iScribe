import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './KpiBand.module.css'

const KPIS = [
  { value: '92%', label: 'Adoption rate after trial', link: 'Start 14 day free trial' },
  { value: '100%', label: 'Customizable for your clinic', link: 'Learn more' },
  { value: '98%', label: 'Note accuracy across specialties', link: 'View accuracy data' },
]

function CountUp({ value, active, duration = 1400 }) {
  const match = String(value).match(/^([\d.]+)(.*)$/)
  const target = match ? parseFloat(match[1]) : 0
  const suffix = match ? match[2] : ''
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!active || started.current) return
    started.current = true
    let raf, start
    const step = (t) => {
      if (start === undefined) start = t
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(p < 1 ? target * eased : target)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return <>{display.toFixed(decimals)}{suffix}</>
}

export default function KpiBand() {
  const [ref, visible] = useInView(0.2)
  const rv = 'reveal' + (visible ? ' visible' : '')

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.grid}>
        {KPIS.map((kpi, i) => (
          <div key={i} className={`${styles.item} ${rv}`} style={{ transitionDelay: `${i * 100}ms` }}>
            <div className={styles.content}>
              <p className={styles.value}><CountUp value={kpi.value} active={visible} /></p>
              <p className={styles.label}>{kpi.label}</p>
            </div>
            {kpi.link && (
              <a href="#" className={styles.trialLink}>{kpi.link}</a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
