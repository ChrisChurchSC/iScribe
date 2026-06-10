import { useInView } from '../hooks/useInView'
import styles from './DoctorVideos.module.css'

const CARDS = [
  { name: 'Dr. Sarah Chen', title: 'Primary Care, UCSF' },
  { name: 'Dr. Marcus Williams', title: 'Internal Medicine, Johns Hopkins' },
  { name: 'Dr. Priya Nair', title: 'Pediatrics, Boston Children\'s' },
  { name: 'Dr. James Okafor', title: 'Emergency Medicine, Mayo Clinic' },
]

export default function DoctorVideos() {
  const [ref, visible] = useInView(0.08)

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header}>
        <p className={'reveal' + (visible ? ' visible' : '') + ' ' + styles.eyebrow}>Real physicians. Real results.</p>
        <h2 className={'reveal' + (visible ? ' visible' : '') + ' ' + styles.heading} style={{ transitionDelay: '80ms' }}>
          Hear it from the doctors.
        </h2>
      </div>
      <div className={styles.grid}>
        {CARDS.map((card, i) => (
          <div
            key={i}
            className={'reveal' + (visible ? ' visible' : '') + ' ' + styles.card}
            style={{ transitionDelay: `${160 + i * 80}ms` }}
          >
            <div className={styles.videoWrap}>
              <video
                className={styles.video}
                src="/doctor-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className={styles.cardOverlay} />
            </div>
            <div className={styles.cardInfo}>
              <p className={styles.cardName}>{card.name}</p>
              <p className={styles.cardTitle}>{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
