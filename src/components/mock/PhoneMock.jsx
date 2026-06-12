import {
  IconMicrophone,
  IconSearch,
  IconCheck,
  IconSparkles,
  IconPencil,
} from '@tabler/icons-react'
import styles from './PhoneMock.module.css'

/* Deterministic waveform profile so the bars render the same every time */
const WAVE = Array.from({ length: 40 }, (_, i) => {
  const v =
    Math.sin(i * 0.5) * 0.5 +
    Math.sin(i * 1.2) * 0.3 +
    Math.sin(i * 2.4) * 0.2
  return 0.22 + Math.abs(v) * 0.78
})

function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <span className={styles.statusTime}>9:41</span>
      <div className={styles.statusIcons}>
        <svg width="15" height="10" viewBox="0 0 18 11" fill="none"><rect x="0" y="6" width="3" height="5" rx="1" fill="currentColor"/><rect x="5" y="3.5" width="3" height="7.5" rx="1" fill="currentColor"/><rect x="10" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="15" y="1" width="3" height="10" rx="1" fill="currentColor" opacity="0.4"/></svg>
        <svg width="22" height="10" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" opacity="0.5"/><rect x="2" y="2" width="16" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
  )
}

function HomeScreen() {
  return (
    <div className={styles.screenPad}>
      <p className={styles.greet}>Hi Dr. Reyes,</p>
      <p className={styles.greetSub}>How can I help today?</p>
      <div className={styles.pills}>
        <span className={`${styles.pill} ${styles.pillPrimary}`}>
          <IconMicrophone size={14} strokeWidth={1.8} />
          Start visit
        </span>
        <span className={styles.pill}>
          <IconSearch size={14} strokeWidth={1.8} />
          Find patient
        </span>
      </div>
      <div className={styles.card}>
        <div className={styles.cardRow}>
          <span className={styles.rowLabel}>Notes to sign</span>
          <span className={styles.rowLink}>3 pending</span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.rowLabel}>Visits today</span>
          <span className={styles.rowVal}>5 of 8</span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.rowLabel}>Next visit</span>
          <span className={styles.rowLink}>2:30 PM</span>
        </div>
      </div>
    </div>
  )
}

function ListenScreen() {
  return (
    <div className={styles.screenPad}>
      <div className={styles.patientChip}>
        <span className={styles.avatar}>KF</span>
        <div>
          <p className={styles.patientName}>Khalilah Fauver</p>
          <p className={styles.patientMeta}>DOB 03.18.1982</p>
        </div>
      </div>
      <div className={styles.waveBox}>
        <div className={styles.wave}>
          {WAVE.map((h, i) => (
            <span key={i} style={{ height: `${h * 100}%` }} />
          ))}
        </div>
      </div>
      <div className={styles.timer}>
        <span className={styles.recDot} />
        Recording · 0:08
      </div>
      <div className={styles.listenBar}>
        <span className={styles.listenHint}>Ambient capture in progress</span>
        <span className={styles.endBtn}>End</span>
      </div>
    </div>
  )
}

function NoteScreen({ review }) {
  return (
    <div className={styles.screenPad}>
      <div className={styles.noteHead}>
        <p className={styles.noteTitle}>Clinical note</p>
        <span className={styles.noteBadge}>
          <IconSparkles size={11} strokeWidth={1.9} />
          {review ? 'Ready to sign' : 'Generated in 4s'}
        </span>
      </div>
      <p className={styles.notePatient}>Khalilah Fauver · Follow-up visit</p>

      <div className={styles.noteSection}>
        <p className={styles.noteLabel}>Chief complaint</p>
        <p className={styles.noteBody}>Follow-up for hypertension and intermittent headaches.</p>
      </div>
      <div className={styles.noteSection}>
        <p className={styles.noteLabel}>Assessment</p>
        <p className={styles.noteBody}>Essential hypertension, improving on current regimen.</p>
      </div>
      <div className={styles.noteSection}>
        <p className={styles.noteLabel}>Plan</p>
        <p className={styles.noteBody}>Continue lisinopril 10mg. Recheck BP in 4 weeks.</p>
      </div>

      {review ? (
        <div className={styles.noteActions}>
          <span className={styles.editBtn}>
            <IconPencil size={13} strokeWidth={1.8} />
            Edit
          </span>
          <span className={styles.signBtn}>
            <IconCheck size={14} strokeWidth={2} />
            Sign &amp; sync to EHR
          </span>
        </div>
      ) : (
        <div className={styles.codeRow}>
          <span className={styles.codeChip}>E&amp;M · 99214</span>
          <span className={styles.codeChip}>ICD-10 · I10</span>
        </div>
      )}
    </div>
  )
}

const SCREENS = {
  home: HomeScreen,
  listen: ListenScreen,
  generate: (p) => <NoteScreen {...p} />,
  review: (p) => <NoteScreen {...p} review />,
}

export default function PhoneMock({ screen = 'home', className = '' }) {
  const Screen = SCREENS[screen] || HomeScreen
  return (
    <div className={`${styles.phone} ${className}`} aria-hidden="true">
      <span className={styles.island} />
      <div className={styles.screen}>
        <StatusBar />
        <Screen />
      </div>
    </div>
  )
}
