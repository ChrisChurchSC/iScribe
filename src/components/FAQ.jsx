import { useState } from 'react'
import { IconArrowDown } from '@tabler/icons-react'
import { useInView } from '../hooks/useInView'
import styles from './FAQ.module.css'

const FAQS = [
  {
    q: 'How does iScribe work',
    a: 'iScribe uses ambient AI to listen to your patient visit in real time. When the encounter ends, it generates a complete, structured clinical note — formatted to your EHR template — ready for your review in seconds.',
  },
  {
    q: 'Which EHR systems does iScribe integrate with',
    a: 'iScribe integrates with Epic, Cerner, athenahealth, eClinicalWorks, and 50+ other EHR platforms. If yours is not on the list, contact us — we support custom integrations.',
  },
  {
    q: 'Is iScribe HIPAA compliant',
    a: 'Yes. iScribe is fully HIPAA compliant and SOC 2 certified. All audio and data are encrypted end-to-end. Recordings are never stored beyond the session and are deleted immediately after the note is generated.',
  },
  {
    q: 'How accurate are the notes',
    a: 'iScribe achieves over 97% clinical accuracy, validated across 12 specialties. Notes follow your preferred format and terminology, and you can review or edit before signing.',
  },
  {
    q: 'Which specialties does iScribe support',
    a: 'iScribe supports primary care, internal medicine, pediatrics, psychiatry, urgent care, emergency medicine, and more. The AI adapts to specialty-specific terminology and note structures automatically.',
  },
  {
    q: 'How long does it take to get set up',
    a: 'Most practices are live within a single day. Our onboarding team handles EHR configuration, and physicians typically complete setup in under 30 minutes.',
  },
  {
    q: 'Is there a free trial',
    a: 'Yes. iScribe offers a 14-day free trial with full access to all features. No credit card required.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [ref, visible] = useInView()

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.header}>
        <h2 className={'reveal' + (visible ? ' visible' : '') + ' ' + styles.heading}>
          Frequently asked questions.
        </h2>
      </div>
      <div className={styles.list}>
        {FAQS.map((item, i) => (
          <div
            key={i}
            className={styles.item + ' reveal' + (visible ? ' visible' : '')}
            style={{ transitionDelay: `${i * 55}ms` }}
          >
            <button
              className={styles.question}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{item.q}</span>
              <span className={styles.icon + (open === i ? ' ' + styles.iconOpen : '')}>
                <IconArrowDown size={20} strokeWidth={1.5} />
              </span>
            </button>
            <div className={styles.answerWrap + (open === i ? ' ' + styles.answerWrapOpen : '')}>
              <div className={styles.answerInner}>
                <p className={styles.answer}>{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
