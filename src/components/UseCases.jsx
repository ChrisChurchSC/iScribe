import { useInView } from '../hooks/useInView'
import styles from './UseCases.module.css'

const CASES = [
  {
    tag: 'Outpatient',
    title: 'In-office visits',
    body: 'SOAP notes done before the patient leaves.',
    image: '/card-outpatient.jpg',
  },
  {
    tag: 'Telehealth',
    title: 'Virtual care',
    body: 'Notes ready the moment the call ends.',
    image: '/card-telehealth.jpg',
  },
  {
    tag: 'Inpatient',
    title: 'Hospital rounds',
    body: 'Notes filed before you leave the floor.',
    image: '/card-inpatient.jpg',
  },
]

export default function UseCases() {
  const [ref, visible] = useInView()

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.intro + ' reveal' + (visible ? ' visible' : '')}>
        <p className={styles.eyebrow}>Every care setting</p>
        <h2 className={styles.introHeading}>We meet you where you<br />meet your patients.</h2>
        <p className={styles.introBody}>
          iScribe runs quietly in the background capturing questions, answers, and crucial context. Notes are immediately coded and pushed to the billing sheet, with no downtime or delays.
        </p>
      </div>
      <div className={styles.panels + ' reveal' + (visible ? ' visible' : '')}>
        {CASES.map((c) => (
          <div
            key={c.tag}
            className={styles.panel}
            style={{ backgroundImage: `url(${c.image})` }}
          >
            <p className={styles.tag}>{c.tag}</p>
            <div className={styles.panelDetail}>
              <p className={styles.title}>{c.title}</p>
              <p className={styles.body}>{c.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
