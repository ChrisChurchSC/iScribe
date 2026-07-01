import { useInView } from '../hooks/useInView'
import Logo from './Logo'
import styles from './Footer.module.css'

const NAV = [
  {
    label: 'Explore',
    links: ['Premium', 'Flex', 'Case Studies'],
  },
  {
    label: 'Resources',
    links: ['Contact', 'News', 'Podcast'],
  },
]

export default function Footer() {
  const [ref, visible] = useInView()
  const rv = 'reveal' + (visible ? ' visible' : '')

  return (
    <footer ref={ref} className={styles.footer}>

      <div className={rv + ' ' + styles.cta}>
        <div className={styles.ctaLeft}>
          <div className={styles.logo}><Logo width={160} /></div>
        </div>
        <div className={styles.ctaRight}>
          <h2 className={styles.ctaHeading}>“I tell all the physicians I know: you have to try iScribe. Once you try it, everything else will just seem subpar.”</h2>
          <p className={styles.ctaQuoteBy}>Dr. Richard Madison, Orthopedic Surgeon</p>
          <a href="#" className={styles.ctaBtn}>Book a Demo</a>
        </div>
      </div>

      <div className={styles.divider} />

      <div
        className={rv + ' ' + styles.main}
        style={{ transitionDelay: '150ms' }}
      >
        <div className={styles.subscribe}>
          <p className={styles.subscribeHeading}>Stay in the loop</p>
          <p className={styles.subscribeCopy}>Get the latest on AI documentation, EHR integrations, and product updates.</p>
          <div className={styles.emailRow}>
            <input type="email" placeholder="Your work email" className={styles.emailInput} />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
        </div>

        <div className={styles.navCols}>
          {NAV.map((col) => (
            <div key={col.label} className={styles.navCol}>
              <p className={styles.colLabel}>{col.label}</p>
              <ul className={styles.linkList}>
                {col.links.map((link) => (
                  <li key={link}><a href="#" className={styles.link}>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div
        className={rv + ' ' + styles.bottom}
        style={{ transitionDelay: '250ms' }}
      >
        <div className={styles.legal}>
          <a href="/app" className={styles.appDemo}>View App Demo</a>
          <a href="#" className={styles.legalLink}>Privacy Policy</a>
          <span className={styles.legalSep}>|</span>
          <a href="#" className={styles.legalLink}>Terms of Use</a>
          <span className={styles.legalSep}>|</span>
          <span className={styles.copyright}>2026 iScribe Health. All rights reserved.</span>
        </div>
        <div className={styles.social}>
          <a href="#" className={styles.socialLink} aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" className={styles.socialLink} aria-label="Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" className={styles.socialLink} aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z"/></svg>
          </a>
        </div>
      </div>

    </footer>
  )
}
