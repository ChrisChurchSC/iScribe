import { Link, useLocation } from 'react-router-dom'
import { IconDeviceMobile, IconDeviceDesktop } from '@tabler/icons-react'
import styles from './DemoSwitch.module.css'

export default function DemoSwitch() {
  const { pathname } = useLocation()
  const isDesktop = pathname.startsWith('/desktop')

  return (
    <div className={styles.switch} role="group" aria-label="Switch demo device">
      <Link
        to="/app"
        className={styles.seg + (!isDesktop ? ' ' + styles.active : '')}
        aria-current={!isDesktop ? 'page' : undefined}
      >
        <IconDeviceMobile size={15} strokeWidth={1.8} />
        Mobile
      </Link>
      <Link
        to="/desktop"
        className={styles.seg + (isDesktop ? ' ' + styles.active : '')}
        aria-current={isDesktop ? 'page' : undefined}
      >
        <IconDeviceDesktop size={15} strokeWidth={1.8} />
        Desktop
      </Link>
    </div>
  )
}
