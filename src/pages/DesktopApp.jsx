import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  IconLayoutDashboard,
  IconUsers,
  IconCalendarEvent,
  IconMicrophone,
  IconSearch,
  IconBell,
  IconSettings,
  IconFileText,
  IconClock,
  IconChevronRight,
  IconChevronLeft,
  IconX,
  IconCamera,
  IconPaperclip,
} from '@tabler/icons-react'
import styles from './DesktopApp.module.css'
import DemoSwitch from '../components/DemoSwitch'
import Logo from '../components/Logo'

const NAV = [
  { id: 'dashboard', icon: IconLayoutDashboard, label: 'Dashboard' },
  { id: 'patients', icon: IconUsers, label: 'Patients' },
  { id: 'schedule', icon: IconCalendarEvent, label: 'Schedule' },
]

const STATS = [
  { label: 'Visits today', value: '5 of 8', icon: IconCalendarEvent },
  { label: 'Notes to sign', value: '3', icon: IconFileText, accent: true },
  { label: 'Active patients', value: '124', icon: IconUsers },
  { label: 'Time saved today', value: '2.5 hrs', icon: IconClock },
]

const SECTION_LABELS = [
  'Documents', 'Active Problem List', 'Family Medical History', 'Surgical History',
  'Current Meds', 'Vitals', 'Allergies', 'Immunizations', 'Past Medical History',
]

const PATIENTS = [
  { name: 'Khalilah Fauver', dob: '03.18.1982', last: 'Today', img: 'women/44', tags: ['Active Problem List', 'Current Meds', 'Vitals', 'Allergies'] },
  { name: 'James Carter', dob: '07.02.1990', last: 'Today', img: 'men/32', tags: ['Documents', 'Immunizations', 'Vitals'] },
  { name: 'Maria Lopez', dob: '11.24.1975', last: 'Yesterday', img: 'women/68', tags: ['Surgical History', 'Past Medical History', 'Current Meds', 'Vitals'] },
  { name: 'David Park', dob: '01.09.1988', last: '2 days ago', img: 'men/45', tags: ['Active Problem List', 'Allergies', 'Current Meds'] },
  { name: 'Rema Singh', dob: '05.30.1969', last: '3 days ago', img: 'women/12', tags: ['Family Medical History', 'Active Problem List', 'Current Meds', 'Vitals'] },
  { name: 'Anthony Cole', dob: '09.14.1995', last: 'Last week', img: 'men/76', tags: ['Surgical History', 'Documents', 'Past Medical History'] },
  { name: 'Grace Okoro', dob: '02.21.1986', last: 'Last week', img: 'women/90', tags: ['Family Medical History', 'Immunizations', 'Vitals'] },
]

const SCHEDULE = [
  { time: '9.00 AM', name: 'James Carter', type: 'New patient', img: 'men/32', done: true },
  { time: '9.30 AM', name: 'Maria Lopez', type: 'Annual physical', img: 'women/68', done: true },
  { time: '10.00 AM', name: 'David Park', type: 'Follow-up', img: 'men/45', now: true },
  { time: '11.15 AM', name: 'Rema Singh', type: 'Hypertension check', img: 'women/12' },
  { time: '1.30 PM', name: 'Anthony Cole', type: 'Post-op check', img: 'men/76' },
  { time: '2.30 PM', name: 'Khalilah Fauver', type: 'Follow-up visit', img: 'women/44' },
]

const HEIGHTS = Array.from({ length: 80 }, (_, i) => {
  const v = Math.sin(i * 0.45) * 0.5 + Math.sin(i * 1.1) * 0.3 + Math.sin(i * 2.3) * 0.2
  return 0.2 + Math.abs(v) * 0.8
})

const avatar = (img) => `https://randomuser.me/api/portraits/${img}.jpg`

export default function DesktopApp() {
  const [view, setView] = useState('dashboard')
  const [recordOpen, setRecordOpen] = useState(false)
  const [filter, setFilter] = useState('All')

  const shownPatients = PATIENTS.filter(p => filter === 'All' || p.tags.includes(filter))

  return (
    <div className={styles.stage}>
      <div className={styles.window}>
        <div className={styles.chrome}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
          <span className={styles.chromeTitle}>iScribe Workspace</span>
        </div>
        <div className={styles.app}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}><Logo width={120} /></div>
        <button className={styles.startBtn} onClick={() => setRecordOpen(true)}>
          <IconMicrophone size={18} strokeWidth={1.8} />
          Start visit
        </button>
        <nav className={styles.nav}>
          {NAV.map(n => {
            const Icon = n.icon
            return (
              <button
                key={n.id}
                className={styles.navItem + (view === n.id ? ' ' + styles.navActive : '')}
                onClick={() => setView(n.id)}
              >
                <Icon size={20} strokeWidth={1.6} />
                {n.label}
              </button>
            )
          })}
        </nav>
        <div className={styles.sidebarFoot}>
          <Link to="/" className={styles.backLink}>
            <IconChevronLeft size={15} strokeWidth={1.8} />
            Back to site
          </Link>
          <div className={styles.user}>
            <img className={styles.userAvatar} src={avatar('men/52')} alt="" />
            <div>
              <p className={styles.userName}>Dr. Julia Reyes</p>
              <p className={styles.userRole}>Internal Medicine</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.searchBar}>
            <IconSearch size={18} strokeWidth={1.7} />
            <span>Search patients, notes, visits</span>
          </div>
          <div className={styles.topActions}>
            <button className={styles.iconBtn}><IconBell size={20} strokeWidth={1.6} /></button>
            <button className={styles.iconBtn}><IconSettings size={20} strokeWidth={1.6} /></button>
            <img className={styles.topAvatar} src={avatar('men/52')} alt="" />
          </div>
        </header>

        <div className={styles.content}>
          {/* DASHBOARD */}
          {view === 'dashboard' && (
            <div>
              <div className={styles.pageHead}>
                <h1 className={styles.greeting}>Good morning, Dr. Reyes</h1>
                <p className={styles.subhead}>Tuesday, June 11. You have 3 visits left today.</p>
              </div>

              <div className={styles.statGrid}>
                {STATS.map(s => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className={styles.statCard}>
                      <span className={styles.statIcon + (s.accent ? ' ' + styles.statIconAccent : '')}>
                        <Icon size={20} strokeWidth={1.7} />
                      </span>
                      <div>
                        <p className={styles.statValue}>{s.value}</p>
                        <p className={styles.statLabel}>{s.label}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className={styles.dashCols}>
                <div className={styles.panel}>
                  <div className={styles.panelHead}>
                    <h2 className={styles.panelTitle}>Today's schedule</h2>
                    <button className={styles.panelLink} onClick={() => setView('schedule')}>View all</button>
                  </div>
                  {SCHEDULE.slice(0, 5).map(s => (
                    <div key={s.name} className={styles.apptRow}>
                      <span className={styles.apptTime}>{s.time}</span>
                      <img className={styles.rowAvatar} src={avatar(s.img)} alt="" />
                      <div className={styles.apptInfo}>
                        <p className={styles.rowName}>{s.name}</p>
                        <p className={styles.rowMeta}>{s.type}</p>
                      </div>
                      {s.done && <span className={styles.badge}>Done</span>}
                      {s.now && <span className={styles.badgeNow}>Now</span>}
                    </div>
                  ))}
                </div>

                <div className={styles.panel}>
                  <div className={styles.panelHead}>
                    <h2 className={styles.panelTitle}>Recent patients</h2>
                    <button className={styles.panelLink} onClick={() => setView('patients')}>View all</button>
                  </div>
                  {PATIENTS.slice(0, 5).map(p => (
                    <button key={p.name} className={styles.patientRow} onClick={() => setView('patients')}>
                      <img className={styles.rowAvatar} src={avatar(p.img)} alt="" />
                      <div className={styles.apptInfo}>
                        <p className={styles.rowName}>{p.name}</p>
                        <p className={styles.rowMeta}>DOB {p.dob}</p>
                      </div>
                      <IconChevronRight size={16} strokeWidth={1.7} className={styles.rowChevron} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PATIENTS */}
          {view === 'patients' && (
            <div>
              <div className={styles.pageHead}>
                <h1 className={styles.pageTitle}>Patients</h1>
                <p className={styles.subhead}>{shownPatients.length} of {PATIENTS.length} patients</p>
              </div>

              <div className={styles.filterRow}>
                {['All', ...SECTION_LABELS].map(f => (
                  <button
                    key={f}
                    className={styles.chip + (filter === f ? ' ' + styles.chipActive : '')}
                    onClick={() => setFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className={styles.table}>
                <div className={styles.tableHead}>
                  <span className={styles.thName}>Patient</span>
                  <span className={styles.thDob}>Date of birth</span>
                  <span className={styles.thLast}>Last visit</span>
                  <span className={styles.thTags}>Records</span>
                  <span className={styles.thAction} />
                </div>
                {shownPatients.map(p => (
                  <button key={p.name} className={styles.tableRow} onClick={() => setRecordOpen(true)}>
                    <span className={styles.tdName}>
                      <img className={styles.rowAvatar} src={avatar(p.img)} alt="" />
                      {p.name}
                    </span>
                    <span className={styles.tdDob}>{p.dob}</span>
                    <span className={styles.tdLast}>{p.last}</span>
                    <span className={styles.tdTags}>
                      {p.tags.slice(0, 3).map(t => <span key={t} className={styles.tag}>{t}</span>)}
                      {p.tags.length > 3 && <span className={styles.tagMore}>+{p.tags.length - 3}</span>}
                    </span>
                    <span className={styles.tdAction}><IconChevronRight size={16} strokeWidth={1.7} /></span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* SCHEDULE */}
          {view === 'schedule' && (
            <div>
              <div className={styles.pageHead}>
                <h1 className={styles.pageTitle}>Schedule</h1>
                <p className={styles.subhead}>Tuesday, June 11</p>
              </div>
              <div className={styles.scheduleList}>
                {SCHEDULE.map(s => (
                  <div key={s.name} className={styles.schedRow}>
                    <span className={styles.schedTime}>{s.time}</span>
                    <div className={styles.schedCard + (s.now ? ' ' + styles.schedNow : '') + (s.done ? ' ' + styles.schedDone : '')}>
                      <img className={styles.rowAvatar} src={avatar(s.img)} alt="" />
                      <div className={styles.apptInfo}>
                        <p className={styles.rowName}>{s.name}</p>
                        <p className={styles.rowMeta}>{s.type}</p>
                      </div>
                      {s.done && <span className={styles.badge}>Done</span>}
                      {s.now && <span className={styles.badgeNow}>Now</span>}
                      {!s.done && !s.now && (
                        <button className={styles.schedStart} onClick={() => setRecordOpen(true)}>Start</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
        </div>

      {/* Record modal */}
      {recordOpen && (
        <div className={styles.modalScrim} onClick={() => setRecordOpen(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setRecordOpen(false)}>
              <IconX size={22} strokeWidth={1.75} />
            </button>
            <div className={styles.modalPatient}>
              <img className={styles.modalAvatar} src={avatar('women/44')} alt="" />
              <div>
                <p className={styles.modalName}>Khalilah Fauver</p>
                <p className={styles.modalDob}>DOB 03.18.1982</p>
              </div>
            </div>

            <div className={styles.modalWave}>
              <div className={styles.waveTrack}>
                {[...HEIGHTS, ...HEIGHTS].map((h, i) => (
                  <span key={i} style={{ height: `${h * 100}%` }} />
                ))}
              </div>
            </div>

            <div className={styles.timeBubble}>
              <span className={styles.timeDot} />
              0:08
            </div>

            <div className={styles.modalNote}>
              <input className={styles.noteInput} placeholder="Add a note" />
              <button className={styles.attachBtn}><IconCamera size={19} strokeWidth={1.6} /></button>
              <button className={styles.attachBtn}><IconPaperclip size={19} strokeWidth={1.6} /></button>
              <button className={styles.endBtn} onClick={() => setRecordOpen(false)}>End visit</button>
            </div>
          </div>
        </div>
      )}
      </div>
      <DemoSwitch />
    </div>
  )
}
