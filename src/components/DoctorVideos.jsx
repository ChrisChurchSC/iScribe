import { useInView } from '../hooks/useInView'
import styles from './DoctorVideos.module.css'

const CARDS = [
  { name: 'Dr. David Williams', title: 'Pennsylvania Health System', img: '/doctors/dr-williams.png' },
  { name: 'Dr. Robert Alvarez', title: 'Cardiology', img: '/doctors/dr-alvarez.jpg' },
  { name: 'Dr. Priya Nair', title: 'Family Medicine', img: '/doctors/dr-nair.jpg' },
  { name: 'Dr. Marcus Bell', title: 'Internal Medicine', img: '/doctors/dr-bell.jpg' },
]

export default function DoctorVideos() {
  const [ref, visible] = useInView(0.08)

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header}>
        <p className={'reveal' + (visible ? ' visible' : '') + ' ' + styles.eyebrow}>Real physicians. Real results.</p>
        <h2 className={'reveal' + (visible ? ' visible' : '') + ' ' + styles.heading} style={{ transitionDelay: '80ms' }}>
          Built with you, and your work, in mind.
        </h2>
        <p className={'reveal' + (visible ? ' visible' : '') + ' ' + styles.sub} style={{ transitionDelay: '140ms' }}>
          From reduced pajama time to better patient interactions, hear why these leading physicians rely on iScribe.
        </p>
      </div>
      <div className={styles.grid}>
        {CARDS.map((card, i) => (
          <div
            key={i}
            className={'reveal' + (visible ? ' visible' : '') + ' ' + styles.card}
            style={{ transitionDelay: `${160 + i * 80}ms` }}
          >
            <div className={styles.videoWrap}>
              <img className={styles.video} src={card.img} alt={card.name} loading="lazy" />
              <div className={styles.cardOverlay} />
              <button className={styles.playBtn} aria-label={`Play ${card.name}'s testimonial`}>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5l9 5.5-9 5.5V2.5z" /></svg>
              </button>
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
