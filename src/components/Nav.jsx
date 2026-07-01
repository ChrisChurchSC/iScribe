import { useState, useEffect } from 'react'
import {
  IconChevronDown, IconMenu2, IconX,
  IconMail, IconNews, IconMicrophone,
} from '@tabler/icons-react'
import Logo from './Logo'
import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'Premium' },
  { label: 'Flex' },
  { label: 'Case Studies' },
  {
    label: 'Resources',
    menu: [
      { title: 'Contact', desc: 'Get in touch with our team', icon: IconMail },
      { title: 'News', desc: 'Latest updates and announcements', icon: IconNews },
      { title: 'Podcast', desc: 'Conversations from the field', icon: IconMicrophone },
    ],
  },
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
        <Logo width={80} />
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
          Live Chat
        </a>
        <a href="#" className={styles.requestDemo}>Start Your Trial</a>
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
            <a href="#" className={styles.mobileSignIn} onClick={() => setMobileOpen(false)}>Live Chat</a>
            <a href="#" className={styles.mobileGetStarted} onClick={() => setMobileOpen(false)}>Start Your Trial</a>
          </div>
        </div>
      )}
    </nav>
  )
}
