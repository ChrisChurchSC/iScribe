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

const Logo = () => (
  <svg width="104" height="14" viewBox="0 0 149 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M136.532 18.9966V0.0783691H138.858V4.91245C138.858 5.9054 138.858 6.428 138.832 7.36869H138.884C139.772 5.53958 141.418 4.57276 143.404 4.57276C146.854 4.57276 148.63 7.00287 148.63 10.1124V18.9966H146.305V10.6872C146.305 8.36164 145.051 6.6893 142.647 6.6893C140.243 6.6893 138.858 8.57068 138.858 10.8701V18.9966H136.532Z" fill="currentColor"/>
    <path d="M129.979 18.9966V7.05507H127.732V4.91239H129.979V1.2019H132.304V4.91239H135.649V7.05507H132.304V18.9966H129.979Z" fill="currentColor"/>
    <path d="M124.056 18.9966V0.0783691H126.381V18.9966H124.056Z" fill="currentColor"/>
    <path d="M115.001 19.3624C111.186 19.3624 108.494 16.2268 108.494 11.9937C108.494 7.78676 111.238 4.59888 114.975 4.59888C117.248 4.59888 118.999 5.53956 119.939 7.36868H119.992C119.939 6.48025 119.939 5.98378 119.939 4.91244H122.265V18.9966H119.939C119.939 17.9775 119.939 17.5594 119.992 16.5926H119.939C118.946 18.2911 117.065 19.3624 115.001 19.3624ZM115.419 17.2459C118.241 17.2459 120.07 15.1032 120.07 11.9676C120.07 8.85809 118.241 6.71542 115.419 6.71542C112.649 6.71542 110.82 9.01488 110.82 11.9937C110.82 14.9726 112.675 17.2459 115.419 17.2459Z" fill="currentColor"/>
    <path d="M101.042 19.3624C96.8607 19.3624 94.0648 16.2268 94.0648 11.9676C94.0648 7.65613 96.8868 4.52051 101.068 4.52051C105.275 4.52051 107.626 7.31644 107.626 11.4973C107.626 11.8631 107.6 12.1505 107.574 12.5163H96.3381C96.5472 15.26 98.3763 17.2982 101.12 17.2982C103.001 17.2982 104.465 16.3836 105.327 14.6851L107.287 15.6781C106.032 18.1605 103.811 19.3624 101.042 19.3624ZM96.4426 10.635H105.458C105.17 8.23099 103.655 6.58479 101.068 6.58479C98.6114 6.58479 96.8868 8.25712 96.4426 10.635Z" fill="currentColor"/>
    <path d="M78.1445 18.9966V1.2019H80.5746V8.67514H90.0337V1.2019H92.4638V18.9966H90.0337V11.0007H80.5746V18.9966H78.1445Z" fill="currentColor"/>
    <path d="M65.8934 19.3624C61.7126 19.3624 58.9166 16.2268 58.9166 11.9676C58.9166 7.65613 61.7387 4.52051 65.9195 4.52051C70.1265 4.52051 72.4782 7.31644 72.4782 11.4973C72.4782 11.8631 72.4521 12.1505 72.4259 12.5163H61.19C61.399 15.26 63.2281 17.2982 65.9718 17.2982C67.8531 17.2982 69.3164 16.3836 70.1787 14.6851L72.1385 15.6781C70.8842 18.1605 68.6632 19.3624 65.8934 19.3624ZM61.2945 10.635H70.3094C70.022 8.23099 68.5064 6.58479 65.9195 6.58479C63.4633 6.58479 61.7387 8.25712 61.2945 10.635Z" fill="currentColor"/>
    <path d="M51.4556 19.3102C49.1823 19.3102 47.4316 18.3695 46.4909 16.5404H46.4386C46.4647 17.4288 46.4647 17.9253 46.4647 18.9966H44.1392V0.0783691H46.4647V4.72954C46.4647 5.85314 46.4647 6.29735 46.4386 7.36869H46.4909C47.4838 5.61797 49.3652 4.54663 51.4295 4.54663C55.2445 4.54663 57.9359 7.68225 57.9359 11.9153C57.9359 16.1223 55.1922 19.3102 51.4556 19.3102ZM51.0114 17.1936C53.7812 17.1936 55.6103 14.8942 55.6103 11.9153C55.6103 8.9365 53.7551 6.66317 51.0114 6.66317C48.1893 6.66317 46.3602 8.80585 46.3602 11.9415C46.3602 15.051 48.2155 17.1936 51.0114 17.1936Z" fill="currentColor"/>
    <path d="M40.0189 18.9966V4.91247H42.3444V18.9966H40.0189ZM41.1947 3.05723C40.254 3.05723 39.5746 2.43011 39.5746 1.54168C39.5746 0.653255 40.2279 0 41.1947 0C42.1615 0 42.7887 0.653255 42.7887 1.54168C42.7887 2.43011 42.1615 3.05723 41.1947 3.05723Z" fill="currentColor"/>
    <path d="M32.0199 18.9965V4.91237H34.3455C34.3455 5.90531 34.3455 6.42792 34.3194 7.3686H34.3455C35.1555 5.74853 36.5927 4.86011 38.3695 4.86011C38.6308 4.86011 38.866 4.88624 39.1273 4.91237V7.02891H38.2127C35.6781 7.02891 34.3455 8.96255 34.3455 11.262V18.9965H32.0199Z" fill="currentColor"/>
    <path d="M24.7118 19.3624C20.5309 19.3624 17.7089 16.1746 17.7089 11.9153C17.7089 7.65613 20.5309 4.52051 24.7118 4.52051C27.5599 4.52051 29.7549 5.93154 30.9046 8.44003L28.8403 9.40685C28.0303 7.70839 26.6193 6.63705 24.7118 6.63705C21.8636 6.63705 20.0083 8.93651 20.0083 11.9153C20.0083 14.8681 21.8374 17.2459 24.7118 17.2459C26.6454 17.2459 28.0564 16.1484 28.8403 14.4238L30.9569 15.3384C29.781 17.8992 27.5861 19.3624 24.7118 19.3624Z" fill="currentColor"/>
    <path d="M10.3393 19.3885C8.14437 19.3885 5.87104 18.6046 4.2771 16.5142L6.08008 14.8419C7.41272 16.4097 9.03279 17.089 10.4961 17.089C12.6388 17.089 13.9975 15.8871 13.9975 14.2409C13.9975 12.3334 12.2729 11.5756 10.5483 11.053C7.54337 10.1907 4.95648 9.09321 4.95648 5.8792C4.95648 2.92649 7.38659 0.783813 10.7835 0.783813C12.8478 0.783813 14.703 1.4632 16.1925 3.26618L14.3372 4.96464C13.2136 3.60587 12.0639 3.08327 10.8096 3.08327C8.74536 3.08327 7.49111 4.28526 7.49111 5.80081C7.49111 7.5254 9.00666 8.12639 10.679 8.649C13.7101 9.48516 16.5322 10.6349 16.5322 14.1363C16.5322 17.0629 14.2588 19.3885 10.3393 19.3885Z" fill="currentColor"/>
    <path d="M0.444213 18.9966V4.91247H2.7698V18.9966H0.444213ZM1.62007 3.05723C0.679385 3.05723 0 2.43011 0 1.54168C0 0.653255 0.653255 0 1.62007 0C2.58689 0 3.21401 0.653255 3.21401 1.54168C3.21401 2.58689 3.21401 3.05723 1.62007 3.05723Z" fill="currentColor"/>
  </svg>
)

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
        <div className={styles.brand}><Logo /></div>
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
