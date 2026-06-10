import { useInView } from '../hooks/useInView'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Listen',
    body: 'Open iScribe and start the visit. It captures the conversation ambiently in the background, no typing required.',
  },
  {
    num: '02',
    title: 'Generate',
    body: 'The moment you finish, iScribe writes a complete, structured clinical note formatted to your EHR template.',
  },
  {
    num: '03',
    title: 'Review and sign',
    body: 'Skim the note, make any edits, and sign. It syncs straight back to your EHR in a single click.',
  },
]

export default function HowItWorks() {
  const [ref, visible] = useInView()
  const rv = 'reveal' + (visible ? ' visible' : '')

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header}>
        <p className={`${styles.eyebrow} ${rv}`}>How it works</p>
        <h2 className={`${styles.heading} ${rv}`} style={{ transitionDelay: '80ms' }}>
          From visit to note<br />in three steps.
        </h2>
      </div>
      <div className={styles.steps}>
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            className={`${styles.step} ${rv}`}
            style={{ transitionDelay: `${160 + i * 100}ms` }}
          >
            <p className={styles.num}>{step.num}</p>
            <div className={styles.stepText}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
