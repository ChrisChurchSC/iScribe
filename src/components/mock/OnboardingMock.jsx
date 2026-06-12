import { IconCheck, IconPlayerPlayFilled } from '@tabler/icons-react'
import styles from './OnboardingMock.module.css'

const STEPS = [
  { title: 'Connect your EHR', desc: 'Synced with Epic in one click.', done: true },
  { title: 'Import your note templates', desc: '12 templates ready to go.', done: true },
  { title: 'Invite your care team', desc: '3 of 5 clinicians have joined.', active: true },
  { title: 'Run your first ambient visit', desc: 'We’ll be on the call with you.' },
]

export default function OnboardingMock({ className = '' }) {
  return (
    <div className={`${className} ${styles.window}`}>
      <div className={styles.chrome}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
        <span className={styles.chromeTitle}>iScribe Onboarding</span>
      </div>

      <div className={styles.body}>
        <p className={styles.eyebrow}>Setup · Week 1</p>
        <h3 className={styles.welcome}>Welcome to iScribe, Dr. Reyes.</h3>
        <p className={styles.sub}>
          A few quick steps and your whole practice is live. Your onboarding lead walks you
          through every one.
        </p>

        <div className={styles.progressRow}>
          <div className={styles.track}><div className={styles.fill} style={{ width: '66%' }} /></div>
          <span className={styles.pct}>66% complete</span>
        </div>

        <div className={styles.checklist}>
          {STEPS.map((s) => (
            <div key={s.title} className={styles.item + (s.active ? ' ' + styles.itemActive : '')}>
              <span className={styles.box + (s.done ? ' ' + styles.boxDone : '') + (s.active ? ' ' + styles.boxActive : '')}>
                {s.done && <IconCheck size={15} strokeWidth={2.6} />}
              </span>
              <div className={styles.itemText}>
                <p className={styles.itemTitle}>{s.title}</p>
                <p className={styles.itemDesc}>{s.desc}</p>
              </div>
              {s.active && <span className={styles.badge}>In progress</span>}
            </div>
          ))}
        </div>

        {/* Loom-style presenter bubble */}
        <div className={styles.loom}>
          <div className={styles.loomBubble}>
            <img
              className={styles.loomVid}
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt=""
            />
            <span className={styles.loomRec}><span className={styles.recDot} />REC</span>
            <span className={styles.loomPlay}><IconPlayerPlayFilled size={15} /></span>
          </div>
          <p className={styles.loomName}>Maya · Your onboarding lead</p>
        </div>
      </div>
    </div>
  )
}
