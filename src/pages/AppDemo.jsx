import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  IconChevronLeft,
  IconChevronDown,
  IconX,
  IconMicrophone,
  IconSearch,
  IconPhoto,
  IconCamera,
  IconPaperclip,
  IconHome,
  IconLayoutList,
  IconFilePencil,
  IconCalendarEvent,
  IconUsers,
  IconChevronRight,
  IconFileText,
  IconClipboardList,
  IconDna2,
  IconStethoscope,
  IconPill,
  IconHeartbeat,
  IconAlertTriangle,
  IconVaccine,
  IconReportMedical,
} from '@tabler/icons-react'
import styles from './AppDemo.module.css'

const SECTIONS = [
  { icon: IconFileText, label: 'Documents', on: true },
  { icon: IconClipboardList, label: 'Active Problem List', on: true },
  { icon: IconDna2, label: 'Family Medical History', on: true },
  { icon: IconStethoscope, label: 'Surgical History', on: true },
  { icon: IconPill, label: 'Current Meds', on: true },
  { icon: IconHeartbeat, label: 'Vitals', on: true },
  { icon: IconAlertTriangle, label: 'Allergies', on: false },
  { icon: IconVaccine, label: 'Immunizations', on: true },
  { icon: IconReportMedical, label: 'Past Medical History', on: true },
]

const QUICK = [
  { icon: IconFilePencil, label: 'New note', action: 'record' },
  { icon: IconUsers, label: 'Patients', action: 'patients' },
  { icon: IconCalendarEvent, label: 'Schedule', action: 'schedule' },
]

const PATIENTS = [
  { name: 'Khalilah Fauver', meta: 'DOB 03.18.1982', img: 'women/44', tags: ['Active Problem List', 'Current Meds', 'Vitals', 'Allergies'] },
  { name: 'James Carter', meta: 'DOB 07.02.1990', img: 'men/32', tags: ['Documents', 'Immunizations', 'Vitals'] },
  { name: 'Maria Lopez', meta: 'DOB 11.24.1975', img: 'women/68', tags: ['Surgical History', 'Past Medical History', 'Current Meds', 'Vitals'] },
  { name: 'David Park', meta: 'DOB 01.09.1988', img: 'men/45', tags: ['Active Problem List', 'Allergies', 'Current Meds'] },
  { name: 'Rema Singh', meta: 'DOB 05.30.1969', img: 'women/12', tags: ['Family Medical History', 'Active Problem List', 'Current Meds', 'Vitals'] },
  { name: 'Anthony Cole', meta: 'DOB 09.14.1995', img: 'men/76', tags: ['Surgical History', 'Documents', 'Past Medical History'] },
  { name: 'Grace Okoro', meta: 'DOB 02.21.1986', img: 'women/90', tags: ['Family Medical History', 'Immunizations', 'Vitals'] },
]

const PATIENT_FILTERS = ['All', ...SECTIONS.map(s => s.label)]
const SCHEDULE_FILTERS = ['All', 'Upcoming', 'Done']

const SCHEDULE = [
  { time: '9.00 AM', name: 'James Carter', type: 'New patient', done: true },
  { time: '9.30 AM', name: 'Maria Lopez', type: 'Annual physical', done: true },
  { time: '10.00 AM', name: 'David Park', type: 'Follow-up', done: false, now: true },
  { time: '11.15 AM', name: 'Rema Singh', type: 'Hypertension check', done: false },
  { time: '1.30 PM', name: 'Anthony Cole', type: 'Post-op check', done: false },
  { time: '2.30 PM', name: 'Khalilah Fauver', type: 'Follow-up visit', done: false },
]

const TABS = [
  { id: 'home', icon: IconHome, label: 'Home' },
  { id: 'patients', icon: IconUsers, label: 'Patients' },
  { id: 'schedule', icon: IconCalendarEvent, label: 'Schedule' },
]

// Organic audio-waveform height profile (0.2 – 1.0), full-width thin bars
const HEIGHTS = Array.from({ length: 60 }, (_, i) => {
  const v =
    Math.sin(i * 0.45) * 0.5 +
    Math.sin(i * 1.1) * 0.3 +
    Math.sin(i * 2.3) * 0.2
  return 0.2 + Math.abs(v) * 0.8
})

function StatusBar({ light }) {
  return (
    <div className={`${styles.statusBar} ${light ? styles.statusLight : ''}`}>
      <span className={styles.statusTime}>9:41</span>
      <div className={styles.statusIcons}>
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none"><rect x="0" y="6" width="3" height="5" rx="1" fill="currentColor"/><rect x="5" y="3.5" width="3" height="7.5" rx="1" fill="currentColor"/><rect x="10" y="1" width="3" height="10" rx="1" fill="currentColor"/><rect x="15" y="1" width="3" height="10" rx="1" fill="currentColor" opacity="0.4"/></svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><path d="M8 2.2c2 0 3.8.8 5.2 2.1l1.3-1.4A9.2 9.2 0 0 0 8 0a9.2 9.2 0 0 0-6.5 2.9l1.3 1.4A7.2 7.2 0 0 1 8 2.2Z" fill="currentColor"/><path d="M8 5.4c1.1 0 2.2.4 3 1.2l1.3-1.4A6 6 0 0 0 8 3.6a6 6 0 0 0-4.3 1.6L5 6.6c.8-.8 1.9-1.2 3-1.2Z" fill="currentColor"/><circle cx="8" cy="9" r="1.6" fill="currentColor"/></svg>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" opacity="0.5"/><rect x="2" y="2" width="16" height="8" rx="1.5" fill="currentColor"/><rect x="24" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
  )
}

function Toggle({ on: initial }) {
  const [on, setOn] = useState(initial)
  return (
    <button
      className={styles.toggle + (on ? ' ' + styles.toggleOn : '')}
      onClick={() => setOn(o => !o)}
      aria-pressed={on}
    >
      <span className={styles.knob} />
    </button>
  )
}

export default function AppDemo() {
  const [view, setView] = useState('home')
  const [sheetOpen, setSheetOpen] = useState(false)
  const [patientFilter, setPatientFilter] = useState('All')
  const [schedFilter, setSchedFilter] = useState('All')

  const closeSheet = () => setSheetOpen(false)

  const shownPatients = PATIENTS.filter(p =>
    patientFilter === 'All' || p.tags.includes(patientFilter)
  )
  const shownSchedule = SCHEDULE.filter(s =>
    schedFilter === 'All' ||
    (schedFilter === 'Upcoming' && !s.done) ||
    (schedFilter === 'Done' && s.done)
  )

  return (
    <div className={styles.stage}>
      <Link to="/" className={styles.exit}>
        <IconChevronLeft size={16} strokeWidth={2} />
        Back to site
      </Link>

      <div className={styles.phone}>
        <div className={styles.island} />
        <div className={styles.screen}>

          {/* ---------------- HOME ---------------- */}
          {view === 'home' && (
            <div className={styles.home}>
              <StatusBar />
              <div className={styles.homeScroll}>
                <div className={styles.heroCard}>
                  <h1 className={styles.heroGreet}>Hi Dr. Reyes,</h1>
                  <p className={styles.heroSub}>How can I help today</p>
                  <div className={styles.heroPills}>
                    <button className={styles.heroPill} onClick={() => setSheetOpen(true)}>
                      <IconMicrophone size={16} strokeWidth={1.8} />
                      Start visit
                    </button>
                    <button className={styles.heroPill}>
                      <IconSearch size={16} strokeWidth={1.8} />
                      Find patient
                    </button>
                  </div>
                </div>

                <div className={styles.listCard}>
                  <div className={styles.listRow}>
                    <span className={styles.rowLabel}>Your patients</span>
                    <div className={styles.avatars}>
                      <span className={styles.av} style={{ background: '#EEF1FB', color: '#0033D8' }}>KF</span>
                      <span className={styles.av} style={{ background: '#E7F0EA', color: '#3B7A57' }}>JC</span>
                      <span className={styles.av} style={{ background: '#F3EAF1', color: '#8A3B72' }}>ML</span>
                    </div>
                  </div>
                  <div className={styles.listRow}>
                    <span className={styles.rowLabel}>Notes to sign</span>
                    <span className={styles.rowLink}>3 pending</span>
                  </div>
                  <div className={styles.listRow}>
                    <span className={styles.rowLabel}>Visits today</span>
                    <span className={styles.rowVal}>5 of 8</span>
                  </div>
                  <div className={styles.listRow}>
                    <span className={styles.rowLabel}>Next visit</span>
                    <span className={styles.rowLink}>2.30 PM</span>
                  </div>
                </div>

                <div className={styles.quickRow}>
                  {QUICK.map(q => {
                    const Icon = q.icon
                    return (
                      <button
                        key={q.label}
                        className={styles.quick}
                        onClick={() => q.action === 'record' ? setSheetOpen(true) : setView(q.action)}
                      >
                        <span className={styles.quickIcon}><Icon size={22} strokeWidth={1.5} /></span>
                        <span className={styles.quickLabel}>{q.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ---------------- PATIENTS ---------------- */}
          {view === 'patients' && (
            <div className={styles.listView}>
              <StatusBar />
              <div className={styles.viewTop}>
                <h2 className={styles.viewTitle}>Patients</h2>
              </div>
              <div className={styles.scrollList}>
                <div className={styles.searchBar}>
                  <IconSearch size={18} strokeWidth={1.7} />
                  <span>Search patients</span>
                </div>
                <div className={styles.filterRow}>
                  {PATIENT_FILTERS.map(f => (
                    <button
                      key={f}
                      className={styles.chip + (patientFilter === f ? ' ' + styles.chipActive : '')}
                      onClick={() => setPatientFilter(f)}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                {shownPatients.map(p => (
                  <button key={p.name} className={styles.personRow}>
                    <img
                      className={styles.personAvatar}
                      src={`https://randomuser.me/api/portraits/${p.img}.jpg`}
                      alt=""
                    />
                    <div className={styles.personText}>
                      <p className={styles.personName}>{p.name}</p>
                      <p className={styles.personMeta}>{p.meta}</p>
                    </div>
                    <IconChevronRight size={18} strokeWidth={1.7} className={styles.personChevron} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ---------------- SCHEDULE ---------------- */}
          {view === 'schedule' && (
            <div className={styles.listView}>
              <StatusBar />
              <div className={styles.viewTop}>
                <h2 className={styles.viewTitle}>Schedule</h2>
              </div>
              <div className={styles.scrollList}>
                <div className={styles.filterRow}>
                  {SCHEDULE_FILTERS.map(f => (
                    <button
                      key={f}
                      className={styles.chip + (schedFilter === f ? ' ' + styles.chipActive : '')}
                      onClick={() => setSchedFilter(f)}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <p className={styles.dayLabel}>Tuesday, June 11</p>
                {shownSchedule.map(s => (
                  <div key={s.name} className={styles.apptRow}>
                    <span className={styles.apptTime}>{s.time}</span>
                    <div className={styles.apptCard + (s.now ? ' ' + styles.apptNow : '') + (s.done ? ' ' + styles.apptDone : '')}>
                      <div className={styles.apptText}>
                        <p className={styles.apptName}>{s.name}</p>
                        <p className={styles.apptType}>{s.type}</p>
                      </div>
                      {s.done && <span className={styles.apptBadge}>Done</span>}
                      {s.now && <span className={styles.apptBadgeNow}>Now</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ---------------- Floating record button ---------------- */}
          {!sheetOpen && (
            <button
              className={styles.recordFab}
              onClick={() => setSheetOpen(true)}
              aria-label="Start recording"
            >
              <IconMicrophone size={26} strokeWidth={1.8} />
            </button>
          )}

          {/* ---------------- Bottom tab bar ---------------- */}
          <div className={styles.tabBar}>
            {TABS.map(t => {
              const Icon = t.icon
              const active = view === t.id
              return (
                <button
                  key={t.id}
                  className={styles.tab + (active ? ' ' + styles.tabActive : '')}
                  onClick={() => setView(t.id)}
                  aria-label={t.label}
                >
                  <Icon size={22} strokeWidth={1.7} />
                  {active && <span>{t.label}</span>}
                </button>
              )
            })}
          </div>

          {/* ---------------- Record drawer ---------------- */}
          {sheetOpen && (
            <>
              <div className={styles.scrim} onClick={closeSheet} />
              <div className={styles.recordSheet}>
                <div className={styles.sheetHandle} />
                <button className={styles.closeBtn} onClick={closeSheet} aria-label="Close">
                  <IconX size={24} strokeWidth={1.75} />
                </button>

                <div className={styles.sheetPatientWrap}>
                  <img
                    className={styles.sheetAvatar}
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Khalilah Fauver"
                  />
                  <p className={styles.sheetPatient}>Khalilah Fauver</p>
                  <p className={styles.sheetDob}>DOB 03.18.1982</p>
                </div>

                <div className={styles.waveWrap}>
                  <div className={styles.bigWave}>
                    <div className={styles.waveTrack}>
                      {[...HEIGHTS, ...HEIGHTS].map((h, i) => (
                        <span key={i} style={{ height: `${h * 100}%` }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.timeBubble}>
                  <span className={styles.timeDot} />
                  0:08
                </div>

                <div className={styles.noteBar}>
                  <input className={styles.noteInput} placeholder="Add a note" />
                  <button className={styles.attachBtn} aria-label="Add photo">
                    <IconCamera size={19} strokeWidth={1.6} />
                  </button>
                  <button className={styles.attachBtn} aria-label="Add attachment">
                    <IconPaperclip size={19} strokeWidth={1.6} />
                  </button>
                  <button className={styles.endBtn} onClick={closeSheet}>End</button>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}
