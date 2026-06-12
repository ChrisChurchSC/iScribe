import { IconSend, IconPaperclip } from '@tabler/icons-react'
import styles from './ServiceMock.module.css'

const avatar = (p) => `https://randomuser.me/api/portraits/${p}.jpg`

const THREAD = [
  { from: 'them', name: 'Sarah · iScribe', text: 'Morning, Dr. Reyes! What can I help with today?' },
  { from: 'me', text: 'Can you tweak my SOAP note template?' },
  { from: 'them', name: 'Sarah · iScribe', text: 'On it — I’ll have it updated in two minutes.' },
]

const TEAM = ['women/44', 'men/32', 'women/68', 'men/76']

export default function ServiceMock({ className = '' }) {
  return (
    <div className={`${className} ${styles.window}`}>
      <div className={styles.chrome}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
        <span className={styles.chromeTitle}>iScribe Support</span>
      </div>

      <div className={styles.body}>
        <p className={styles.eyebrow}>Support · 24 / 7</p>
        <h3 className={styles.welcome}>Help is one message away.</h3>
        <p className={styles.sub}>
          Real people on your account, any day or time — never a ticket queue.
        </p>

        <div className={styles.chat}>
          {THREAD.map((m, i) => (
            <div key={i} className={styles.msg + (m.from === 'me' ? ' ' + styles.msgMe : '')}>
              {m.from === 'them' && <img className={styles.avatar} src={avatar('women/44')} alt="" />}
              <div className={styles.bubble + (m.from === 'me' ? ' ' + styles.bubbleMe : '')}>
                {m.from === 'them' && <span className={styles.name}>{m.name}</span>}
                {m.text}
              </div>
            </div>
          ))}
          <div className={styles.msg}>
            <img className={styles.avatar} src={avatar('women/44')} alt="" />
            <div className={`${styles.bubble} ${styles.typing}`}>
              <span /><span /><span />
            </div>
          </div>
        </div>

        <div className={styles.inputBar}>
          <span className={styles.inputText}>Message your team…</span>
          <span className={styles.attach}><IconPaperclip size={18} strokeWidth={1.7} /></span>
          <span className={styles.send}><IconSend size={17} strokeWidth={1.8} /></span>
        </div>

        {/* Floating "team online" card */}
        <div className={styles.team}>
          <div className={styles.avatars}>
            {TEAM.map(a => <img key={a} className={styles.teamAv} src={avatar(a)} alt="" />)}
          </div>
          <p className={styles.teamTitle}><span className={styles.onlineDot} />4 specialists online</p>
          <p className={styles.teamMeta}>Avg. reply under 2 min</p>
        </div>
      </div>
    </div>
  )
}
