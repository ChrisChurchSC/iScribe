import { IconArrowRight } from '@tabler/icons-react'
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
        <h2 className={styles.introHeading}>We meet you where you meet your patients.</h2>
        <p className={styles.introBody}>
          iScribe runs quietly in the background capturing questions, answers, and crucial context. Notes are immediately coded and pushed to the billing sheet, with no downtime or delays.
        </p>
      </div>
      <div className={styles.grid}>
        {CASES.map((c, i) => (
          <div
            key={c.tag}
            className={styles.card + ' reveal' + (visible ? ' visible' : '')}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={styles.cardImage} style={{ backgroundImage: `url(${c.image})` }}>
              <div className={styles.cardTop}>
                <p className={styles.tag}>{c.tag}</p>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.cardText}>
                  <p className={styles.title}>{c.title}</p>
                  <p className={styles.body}>{c.body}</p>
                </div>
                <div className={styles.arrow}>
                  <IconArrowRight size={18} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
