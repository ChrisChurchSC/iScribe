import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './DoctorVideos.module.css'

const VIDEOS = [
  'https://cdn.sanity.io/files/t4ez5tge/production/a6d3643add391b4ec58da094231c0224bf94e580.mp4',
  'https://cdn.sanity.io/files/t4ez5tge/production/bad018da6c34588804c6e8c41ad203f4d9d1530c.mp4',
]

const CARDS = [
  { name: 'Dr. David Williams', title: 'Pennsylvania Health System', img: '/doctors/dr-williams.png' },
  { name: 'Dr. Robert Alvarez', title: 'Cardiology', img: '/doctors/dr-alvarez.jpg' },
  { name: 'Dr. Priya Nair', title: 'Family Medicine', img: '/doctors/dr-nair.jpg' },
  { name: 'Dr. Marcus Bell', title: 'Internal Medicine', img: '/doctors/dr-bell.jpg' },
]

export default function DoctorVideos() {
  const [ref, visible] = useInView(0.08)
  const [videoIndex, setVideoIndex] = useState(0)

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
      <div className={styles.grid + ' ' + styles.gridSingle}>
        {/* Showing only the second card full-width for now; restore `CARDS` to show all */}
        {CARDS.slice(1, 2).map((card, i) => (
          <div
            key={i}
            className={'reveal' + (visible ? ' visible' : '') + ' ' + styles.card}
            style={{ transitionDelay: `${160 + i * 80}ms` }}
          >
            <div className={styles.videoWrap}>
              <video
                key={videoIndex}
                className={styles.video}
                src={VIDEOS[videoIndex]}
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={() => setVideoIndex(i => (i + 1) % VIDEOS.length)}
              />
              <a href="#" className={styles.exploreBtn}>Explore Case Studies</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
