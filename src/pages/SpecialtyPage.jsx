import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { IconArrowRight, IconChevronRight, IconStarFilled } from '@tabler/icons-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { SPECIALTIES } from '../data/specialties'
import { AUDIENCES } from '../data/audiences'
import styles from './SpecialtyPage.module.css'

const SITE_URL = 'https://iscribe.vercel.app'

const COLLECTIONS = {
  specialties: { data: SPECIALTIES, base: 'specialties', crumb: 'Specialties' },
  audiences: { data: AUDIENCES, base: 'for', crumb: 'Solutions' },
}

/* Set per-page title/meta + inject JSON-LD structured data for SEO & AEO. */
function useSpecialtySeo(data, base) {
  useEffect(() => {
    if (!data) return
    const url = `${SITE_URL}/${base}/${data.slug}`
    const prevTitle = document.title
    document.title = data.seoTitle
    const created = []

    const upsertMeta = (key, val, attr = 'name') => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
        created.push(el)
      }
      const prev = el.getAttribute('content')
      el.setAttribute('content', val)
      return () => { prev == null ? null : el.setAttribute('content', prev) }
    }

    upsertMeta('description', data.seoDescription)
    upsertMeta('og:title', data.seoTitle, 'property')
    upsertMeta('og:description', data.seoDescription, 'property')
    upsertMeta('og:type', 'website', 'property')
    upsertMeta('og:url', url, 'property')
    upsertMeta('twitter:card', 'summary_large_image')

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
      created.push(canonical)
    }
    canonical.setAttribute('href', url)

    const ld = document.createElement('script')
    ld.type = 'application/ld+json'
    ld.text = JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'iScribe',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web, iOS',
        description: data.seoDescription,
        url,
        offers: { '@type': 'Offer', category: 'SaaS' },
      },
    ])
    document.head.appendChild(ld)
    created.push(ld)

    window.scrollTo(0, 0)
    return () => {
      document.title = prevTitle
      created.forEach(el => el.remove())
    }
  }, [data, base])
}

export default function SpecialtyPage({ collection = 'specialties' }) {
  const { slug } = useParams()
  const src = COLLECTIONS[collection]
  const data = src?.data[slug]
  useSpecialtySeo(data, src?.base)

  if (!data) return <Navigate to="/" replace />

  return (
    <div className={styles.page}>
      <Nav forceSolid />

      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroMain}>
          <div className={styles.heroText}>
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <IconChevronRight size={14} strokeWidth={2} />
              <span>{data.breadcrumbLabel || src.crumb}</span>
              <IconChevronRight size={14} strokeWidth={2} />
              <span className={styles.crumbCurrent}>{data.name}</span>
            </nav>
            <p className={styles.eyebrow}>{data.eyebrow}</p>
            <h1 className={styles.h1}>{data.h1}</h1>
            <p className={styles.sub}>{data.sub}</p>
            <div className={styles.ctaRow}>
              <a href="#" className={styles.ctaPrimary}>Book a demo<IconArrowRight size={17} strokeWidth={1.9} /></a>
              <a href="#" className={styles.ctaSecondary}>See how it works</a>
            </div>
          </div>
          {data.heroImage && (
            <div className={styles.heroMedia}>
              <img src={data.heroImage} alt="" className={styles.heroImg} />
            </div>
          )}
        </div>
        <div className={styles.statRow}>
          {data.stats.map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* AEO answer block */}
      <section className={styles.answerSection} aria-label={data.answerLabel}>
        <div className={styles.answerCard}>
          <p className={styles.answerLabel}>{data.answerLabel}</p>
          <p className={styles.answerText}>{data.answer}</p>
        </div>
      </section>

      {/* Pain points */}
      <section className={styles.section}>
        <h2 className={styles.h2}>{data.painHeading}</h2>
        <div className={styles.painGrid}>
          {data.painPoints.map(p => (
            <div key={p.title} className={styles.painCard}>
              <h3 className={styles.painTitle}>{p.title}</h3>
              <p className={styles.painBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className={`${styles.section} ${styles.featuresSection}`}>
        <h2 className={styles.h2}>{data.featuresHeading}</h2>
        <div className={styles.featureGrid}>
          {data.features.map(f => {
            const Icon = f.icon
            return (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}><Icon size={22} strokeWidth={1.7} /></span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Quote band */}
      <section className={styles.quoteBand}>
        {data.quote.avatar && (
          <img src={data.quote.avatar} alt="" className={styles.quoteAvatar} />
        )}
        <div className={styles.stars}>
          {[0, 1, 2, 3, 4].map(i => <IconStarFilled key={i} size={18} />)}
        </div>
        <blockquote className={styles.quote}>“{data.quote.text}”</blockquote>
        <p className={styles.quoteBy}>{data.quote.author}, {data.quote.role}</p>
      </section>

      {/* FAQ (AEO) */}
      <section className={styles.section}>
        <h2 className={styles.h2}>{data.faqHeading}</h2>
        <div className={styles.faqList}>
          {data.faqs.map(f => (
            <div key={f.q} className={styles.faqItem}>
              <h3 className={styles.faqQ}>{f.q}</h3>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBand}>
        <h2 className={styles.ctaHeading}>{data.ctaHeading}</h2>
        <p className={styles.ctaSub}>{data.ctaSub}</p>
        <a href="#" className={styles.ctaPrimaryLg}>Book a demo<IconArrowRight size={18} strokeWidth={1.9} /></a>
      </section>

      <Footer />
    </div>
  )
}
