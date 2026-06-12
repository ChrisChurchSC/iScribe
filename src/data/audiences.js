import {
  IconReportAnalytics,
  IconReportMedical,
  IconUsersGroup,
  IconPlugConnected,
  IconShieldLock,
  IconHeadset,
} from '@tabler/icons-react'

// Audience landing pages, rendered at /for/<slug>.
export const AUDIENCES = {
  administrators: {
    slug: 'administrators',
    name: 'Administrators',
    breadcrumbLabel: 'Solutions',
    seoTitle: 'iScribe for Healthcare Administrators | AI Scribe ROI & Rollout',
    seoDescription:
      'See how iScribe helps administrators lower documentation costs, recover E&M coding revenue, reduce physician burnout, and roll out an AI scribe across the practice. Book a demo.',
    eyebrow: 'iScribe for Administrators',
    h1: 'The AI scribe your physicians love and your P&L approves.',
    sub: 'iScribe gives administrators a clear path to lower documentation costs, recovered coding revenue, and happier physicians, with an EHR-native rollout your team can stand up in a day.',
    heroImage: '/doctors/dr-nair.jpg',
    answerLabel: 'What does iScribe do for administrators?',
    answer:
      'For healthcare administrators, iScribe is an ambient AI medical scribe that reduces documentation costs and physician burnout while improving revenue capture. It writes notes automatically, codes E&M accurately, integrates with your existing EHR, and rolls out across the practice with dedicated onboarding, giving leadership measurable ROI without disrupting clinical workflows.',
    stats: [
      { value: '94%', label: 'of providers adopt iScribe after trial' },
      { value: '2.5 hrs', label: 'saved per clinician, per day' },
      { value: '95%', label: 'audited E&M coding accuracy' },
    ],
    painHeading: 'Why administrators choose iScribe.',
    painPoints: [
      {
        title: 'Recover lost revenue',
        body: 'Down-coding and incomplete notes leave money on the table. 95% audited E&M coding accuracy helps you capture the revenue you have already earned.',
      },
      {
        title: 'Reduce burnout and turnover',
        body: 'Documentation is the top driver of physician burnout. iScribe gives clinicians hours back every day, which protects retention.',
      },
      {
        title: 'Increase capacity',
        body: 'When notes are no longer the bottleneck, clinicians can see more patients without working longer hours.',
      },
      {
        title: 'Roll out without disruption',
        body: 'iScribe is EHR-native and live in a day, with a dedicated onboarding lead, so adoption does not stall.',
      },
    ],
    featuresHeading: 'What administrators get with iScribe.',
    features: [
      {
        icon: IconReportAnalytics,
        title: 'Measurable ROI',
        body: 'Visibility into time saved, adoption, and coding accuracy across your practice.',
      },
      {
        icon: IconReportMedical,
        title: 'Revenue capture',
        body: '95% audited E&M coding accuracy reduces down-coding and recovers revenue.',
      },
      {
        icon: IconUsersGroup,
        title: 'Practice-wide rollout',
        body: 'Deploy across departments and specialties from a single contract.',
      },
      {
        icon: IconPlugConnected,
        title: 'EHR-native',
        body: 'Integrates with Epic, Cerner, athenahealth, and 50+ systems. No new workflows.',
      },
      {
        icon: IconShieldLock,
        title: 'Enterprise security',
        body: 'HIPAA compliant and SOC 2 certified, with end-to-end encryption.',
      },
      {
        icon: IconHeadset,
        title: 'Dedicated support',
        body: '24/7 support and an onboarding lead, so adoption sticks across your team.',
      },
    ],
    quote: {
      text: 'Within a quarter, our physicians were finishing notes before they left the room, and our coding accuracy climbed. iScribe paid for itself.',
      author: 'Karen Mitchell',
      role: 'Practice Administrator',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    faqHeading: 'Administrator FAQ.',
    ctaHeading: 'Build the business case for iScribe.',
    ctaSub: 'See the ROI on a live visit, then roll it out across your practice.',
    faqs: [
      {
        q: 'What is the ROI of an AI medical scribe?',
        a: 'iScribe drives ROI three ways: it saves clinicians roughly 2.5 hours a day, it recovers revenue through 95% audited E&M coding accuracy, and it reduces scribe and transcription costs. With 94% of providers adopting after trial, the investment is used, not shelved.',
      },
      {
        q: 'How does iScribe reduce physician burnout?',
        a: 'Documentation is one of the leading causes of physician burnout. Because iScribe writes the note during the visit, clinicians finish before they leave the room and take their evenings back, which protects retention.',
      },
      {
        q: 'How does iScribe improve coding and revenue capture?',
        a: 'iScribe generates notes with suggested E&M codes at 95% audited accuracy, which reduces down-coding and missed charges. Clinicians review every note before signing, so accuracy and compliance stay in your control.',
      },
      {
        q: 'How hard is it to roll out across our practice?',
        a: 'iScribe is EHR-native and most practices are live within a single day. A dedicated onboarding lead handles setup, imports your templates, and supports adoption, and you can deploy across departments from one contract.',
      },
      {
        q: 'Is iScribe secure and compliant?',
        a: 'Yes. iScribe is fully HIPAA compliant and SOC 2 certified. All audio and data are encrypted end-to-end, and recordings are deleted immediately after the note is generated.',
      },
      {
        q: 'Which EHRs does iScribe integrate with?',
        a: 'iScribe integrates with Epic, Cerner (Oracle Health), athenahealth, eClinicalWorks, NextGen, and 50+ other systems, writing notes directly into the chart with no copy-paste.',
      },
    ],
  },
}
