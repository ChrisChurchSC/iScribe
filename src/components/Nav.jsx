import { useState, useEffect } from 'react'
import {
  IconChevronDown, IconMenu2, IconX,
  IconMicrophone, IconPlugConnected, IconFileText, IconShieldLock,
  IconStethoscope, IconVideo, IconBuildingHospital, IconAmbulance,
  IconUser, IconBuildingCommunity, IconUsersGroup,
} from '@tabler/icons-react'
import Logo from './Logo'
import styles from './Nav.module.css'

const NAV_LINKS = [
  {
    label: 'Product',
    menu: [
      { title: 'Ambient Scribe', desc: 'AI notes from every visit', icon: IconMicrophone },
      { title: 'EHR Integration', desc: 'Syncs with Epic, Cerner & more', icon: IconPlugConnected },
      { title: 'Smart Templates', desc: 'Notes in your preferred format', icon: IconFileText },
      { title: 'Security', desc: 'HIPAA compliant, SOC 2 certified', icon: IconShieldLock },
    ],
  },
  {
    label: 'Use Cases',
    menu: [
      { title: 'Outpatient', desc: 'SOAP notes before the patient leaves', icon: IconStethoscope },
      { title: 'Telehealth', desc: 'Notes ready the moment the call ends', icon: IconVideo },
      { title: 'Inpatient', desc: 'Filed before you leave the floor', icon: IconBuildingHospital },
      { title: 'Emergency', desc: 'Keep pace in high-volume settings', icon: IconAmbulance },
    ],
  },
  {
    label: 'Solutions',
    menu: [
      { title: 'For Physicians', desc: 'Win back hours every day', icon: IconUser },
      { title: 'For Health Systems', desc: 'Scale across every department', icon: IconBuildingCommunity },
      { title: 'For Groups', desc: 'Standardize documentation', icon: IconUsersGroup },
    ],
  },
  { label: 'Resources' },
  { label: 'Company' },
  { label: 'Pricing' },
]

export default function Nav({ forceSolid = false }) {
  const [scrolled, setScrolled] = useState(forceSolid)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (forceSolid) { setScrolled(true); return }
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [forceSolid])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav className={styles.nav + (scrolled ? ' ' + styles.scrolled : '') + (mobileOpen ? ' ' + styles.menuOpen : '')}>
      <a href="/" className={styles.logo} aria-label="iScribe Health">
        <Logo width={132} />
      </a>

      <ul className={styles.links}>
        {NAV_LINKS.map(item => (
          <li key={item.label} className={item.menu ? styles.hasMenu : undefined}>
            <a href="#" className={styles.link}>
              {item.label}
              {item.menu && <IconChevronDown size={14} strokeWidth={2} className={styles.chevron} />}
            </a>
            {item.menu && (
              <div className={styles.dropdown}>
                <div className={styles.dropdownInner}>
                  {item.menu.map(m => {
                    const Icon = m.icon
                    return (
                      <a key={m.title} href="#" className={styles.dropItem}>
                        <span className={styles.dropIcon}>{Icon && <Icon size={18} strokeWidth={1.7} />}</span>
                        <span className={styles.dropText}>
                          <span className={styles.dropTitle}>{m.title}</span>
                          <span className={styles.dropDesc}>{m.desc}</span>
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className={styles.right}>
        <a href="#" className={styles.login}>
          Login
          <IconChevronDown size={14} strokeWidth={2} className={styles.loginChevron} />
        </a>
        <a href="#" className={styles.requestDemo}>Request a Demo</a>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMobileOpen(o => !o)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileOpen ? <IconX size={22} strokeWidth={1.75} /> : <IconMenu2 size={22} strokeWidth={1.75} />}
      </button>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {NAV_LINKS.map(item => (
              <li key={item.label}>
                <a href="#" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileCtas}>
            <a href="#" className={styles.mobileSignIn} onClick={() => setMobileOpen(false)}>Login</a>
            <a href="#" className={styles.mobileGetStarted} onClick={() => setMobileOpen(false)}>Request a Demo</a>
          </div>
        </div>
      )}
    </nav>
  )
}
