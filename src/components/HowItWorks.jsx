import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import OnboardingMock from './mock/OnboardingMock'
import ServiceMock from './mock/ServiceMock'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Trial',
    body: 'Before the trial even begins, we meet to discuss your pain points, opportunities, and how iScribe can help.',
  },
  {
    num: '02',
    title: 'Onboarding',
    body: 'Once you’ve chosen to work with us, we’ll work with you through set-up and adoption.',
  },
  {
    num: '03',
    title: 'Service',
    body: 'No matter the day or time, when you need assistance, reach out to one of our team members and they’ll pick up.',
  },
]

export default function HowItWorks() {
  const [ref, visible] = useInView()
  const rv = 'reveal' + (visible ? ' visible' : '')
  const [active, setActive] = useState(0)
  const step = STEPS[active]

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header}>
        <p className={`${styles.eyebrow} ${rv}`}>How we work</p>
        <h2 className={`${styles.heading} ${rv}`} style={{ transitionDelay: '80ms' }}>
          We’re with you every step<br />of the way (and beyond).
        </h2>
      </div>
      <div className={`${styles.tabs} ${rv}`} style={{ transitionDelay: '160ms' }} role="tablist">
        {STEPS.map((s, i) => (
          <button
            key={s.num}
            role="tab"
            aria-selected={i === active}
            className={styles.tab + (i === active ? ' ' + styles.tabActive : '')}
            onClick={() => setActive(i)}
          >
            <span className={styles.tabNum}>{s.num}</span>
            {s.title}
          </button>
        ))}
      </div>

      <p className={`${styles.tabBody} ${rv}`} style={{ transitionDelay: '220ms' }}>{step.body}</p>

      <div className={`${styles.showcase} ${rv}`} style={{ transitionDelay: '300ms' }}>
        {active === 1
          ? <OnboardingMock className={styles.showcaseImg} />
          : active === 2
            ? <ServiceMock className={styles.showcaseImg} />
            : <img src="/desktop-app.png" alt="The iScribe desktop workspace" className={styles.showcaseImg} />}
      </div>
    </section>
  )
}
