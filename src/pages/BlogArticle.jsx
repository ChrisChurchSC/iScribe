import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { IconArrowRight, IconChevronRight, IconClock } from '@tabler/icons-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ARTICLES } from '../data/articles'
import styles from './BlogArticle.module.css'

const SITE_URL = 'https://iscribe.vercel.app'

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function useArticleSeo(article) {
  useEffect(() => {
    if (!article) return
    const url = `${SITE_URL}/blog/${article.slug}`
    const prevTitle = document.title
    document.title = article.seoTitle
    const created = []

    const upsertMeta = (key, val, attr = 'name') => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
        created.push(el)
      }
      el.setAttribute('content', val)
    }

    upsertMeta('description', article.seoDescription)
    upsertMeta('og:title', article.seoTitle, 'property')
    upsertMeta('og:description', article.seoDescription, 'property')
    upsertMeta('og:type', 'article', 'property')
    upsertMeta('og:url', url, 'property')
    upsertMeta('og:image', SITE_URL + article.image, 'property')
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
    ld.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.seoDescription,
      image: SITE_URL + article.image,
      author: { '@type': 'Organization', name: article.author },
      publisher: {
        '@type': 'Organization',
        name: 'iScribe',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-logo.png` },
      },
      datePublished: article.date,
      dateModified: article.date,
      mainEntityOfPage: url,
    })
    document.head.appendChild(ld)
    created.push(ld)

    window.scrollTo(0, 0)
    return () => {
      document.title = prevTitle
      created.forEach((el) => el.remove())
    }
  }, [article])
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 id={slugify(block.text)} className={styles.h2}>{block.text}</h2>
    case 'p':
      return <p className={styles.p}>{block.text}</p>
    case 'ul':
      return <ul className={styles.ul}>{block.items.map((t, i) => <li key={i}>{t}</li>)}</ul>
    case 'ol':
      return <ol className={styles.ol}>{block.items.map((t, i) => <li key={i}>{t}</li>)}</ol>
    case 'quote':
      return (
        <blockquote className={styles.quote}>
          <p>“{block.text}”</p>
          {block.by && <cite className={styles.quoteBy}>{block.by}</cite>}
        </blockquote>
      )
    default:
      return null
  }
}

export default function BlogArticle() {
  const { slug } = useParams()
  const article = ARTICLES[slug]
  useArticleSeo(article)

  if (!article) return <Navigate to="/" replace />

  const toc = article.blocks
    .filter((b) => b.type === 'h2')
    .map((b) => ({ id: slugify(b.text), text: b.text }))

  return (
    <div className={styles.page}>
      <Nav forceSolid />

      <article className={styles.article}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <IconChevronRight size={14} strokeWidth={2} />
          <span>Blog</span>
          <IconChevronRight size={14} strokeWidth={2} />
          <span className={styles.crumbCurrent}>{article.category}</span>
        </nav>

        <p className={styles.category}>{article.category}</p>
        <h1 className={styles.h1}>{article.title}</h1>
        <p className={styles.excerpt}>{article.excerpt}</p>

        <div className={styles.meta}>
          <span className={styles.author}>By {article.author}</span>
          <span className={styles.dot} />
          <span>{article.dateDisplay}</span>
          <span className={styles.dot} />
          <span className={styles.read}><IconClock size={14} strokeWidth={1.8} />{article.readTime}</span>
        </div>

        <img className={styles.hero} src={article.image} alt={article.title} />

        <div className={styles.takeaways}>
          <p className={styles.takeawaysLabel}>Key takeaways</p>
          <ul>{article.takeaways.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>

        {toc.length > 0 && (
          <nav className={styles.toc} aria-label="Table of contents">
            <p className={styles.tocLabel}>In this article</p>
            <ol>
              {toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.text}</a></li>)}
            </ol>
          </nav>
        )}

        <div className={styles.body}>
          {article.blocks.map((b, i) => <Block key={i} block={b} />)}
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaHeading}>See iScribe document a live visit.</h2>
          <a href="#" className={styles.ctaBtn}>Book a demo<IconArrowRight size={17} strokeWidth={1.9} /></a>
        </div>
      </article>

      <Footer />
    </div>
  )
}
