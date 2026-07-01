import { useRef } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useInView } from '../hooks/useInView'
import styles from './Testimonials.module.css'

// NOTE: only 4 doctor photos exist in /public/doctors, so faces repeat here as
// placeholders to demonstrate the carousel. Swap in real photos/videos later.
const TESTIMONIALS = [
  { name: 'Dr. David Williams', title: 'Pennsylvania Health System', img: '/doctors/dr-williams.png' },
  { name: 'Dr. Robert Alvarez', title: 'Cardiology', img: '/doctors/dr-alvarez.jpg' },
  { name: 'Dr. Priya Nair', title: 'Family Medicine', img: '/doctors/dr-nair.jpg' },
  { name: 'Dr. Marcus Bell', title: 'Internal Medicine', img: '/doctors/dr-bell.jpg' },
  { name: 'Dr. Elena Ruiz', title: 'Pediatrics', img: '/doctors/dr-nair.jpg' },
  { name: 'Dr. James Okafor', title: 'Emergency Medicine', img: '/doctors/dr-williams.png' },
  { name: 'Dr. Hannah Cole', title: 'Dermatology', img: '/doctors/dr-bell.jpg' },
  { name: 'Dr. Samuel Reyes', title: 'Orthopedics', img: '/doctors/dr-alvarez.jpg' },
]

export default function Testimonials() {
  const [ref, visible] = useInView(0.08)
  const trackRef = useRef(null)
  const drag = useRef({ down: false, startX: 0, startScroll: 0 })

  const onMouseDown = (e) => {
    const el = trackRef.current
    if (!el) return
    drag.current = { down: true, startX: e.pageX, startScroll: el.scrollLeft }
    el.classList.add(styles.dragging)
  }
  const onMouseMove = (e) => {
    if (!drag.current.down) return
    e.preventDefault()
    trackRef.current.scrollLeft = drag.current.startScroll - (e.pageX - drag.current.startX)
  }
  const endDrag = () => {
    if (!drag.current.down) return
    drag.current.down = false
    trackRef.current?.classList.remove(styles.dragging)
  }

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 316, behavior: 'smooth' })
  }

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header + ' reveal' + (visible ? ' visible' : '')}>
        <div className={styles.headText}>
          <p className={styles.eyebrow}>Testimonials</p>
          <h2 className={styles.heading}>Hear it from the clinicians.</h2>
          <p className={styles.sub}>
            Thousands of providers have made iScribe part of their day. Scroll through their stories.
          </p>
        </div>
        <div className={styles.arrows}>
          <button className={styles.arrowBtn} onClick={() => scrollBy(-1)} aria-label="Previous testimonials">
            <IconChevronLeft size={20} strokeWidth={1.8} />
          </button>
          <button className={styles.arrowBtn} onClick={() => scrollBy(1)} aria-label="Next testimonials">
            <IconChevronRight size={20} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div
        className={styles.track}
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
      >
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.videoWrap}>
              <img className={styles.video} src={t.img} alt={t.name} loading="lazy" draggable="false" />
              <div className={styles.cardOverlay} />
              <button className={styles.playBtn} aria-label={`Play ${t.name}'s testimonial`}>
                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5l9 5.5-9 5.5V2.5z" /></svg>
              </button>
            </div>
            <div className={styles.cardInfo}>
              <p className={styles.cardName}>{t.name}</p>
              <p className={styles.cardTitle}>{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
