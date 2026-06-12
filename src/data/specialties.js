import {
  IconFileText,
  IconActivity,
  IconReportMedical,
  IconPlugConnected,
  IconShieldLock,
  IconBolt,
} from '@tabler/icons-react'

// Add a new vertical by adding another entry keyed by its URL slug.
// Each page renders at /specialties/<slug> and is SEO/AEO optimized.
export const SPECIALTIES = {
  orthopedics: {
    slug: 'orthopedics',
    name: 'Orthopedics',
    breadcrumbLabel: 'Specialties',
    answerLabel: 'What is iScribe for orthopedics?',
    painHeading: 'Built for the way orthopedic teams work.',
    featuresHeading: 'Everything an orthopedic practice needs in a scribe.',
    faqHeading: 'Orthopedics scribe FAQ.',
    ctaHeading: 'Give your orthopedic team their time back.',
    ctaSub: 'See iScribe document a live orthopedic visit, start to finish.',
    seoTitle: 'AI Medical Scribe for Orthopedics | iScribe',
    seoDescription:
      'iScribe is the ambient AI medical scribe built for orthopedic surgeons. Document procedures, injections, and post-op visits, code E&M accurately, and sync to your EHR. Book a demo.',
    eyebrow: 'iScribe for Orthopedics',
    h1: 'The AI medical scribe built for orthopedics.',
    sub: 'iScribe documents orthopedic visits in real time, from fracture care and injections to post-op checks and packed clinics, then codes the encounter and syncs the note to your EHR. Less charting, more patients.',
    heroImage: '/doctors/dr-alvarez.jpg',
    // Concise answer block, written for featured snippets and AI answer engines.
    answer:
      'iScribe is an ambient AI medical scribe for orthopedic practices. It listens to the patient encounter, writes a structured orthopedic note (history, exam, procedures, assessment, and plan), captures injections and in-office procedures, assigns accurate E&M codes, and syncs the note to your EHR, all before the patient leaves the room.',
    stats: [
      { value: '95%', label: 'audited E&M coding accuracy' },
      { value: '2.5 hrs', label: 'saved per surgeon, per day' },
      { value: '12+', label: 'specialties supported, including orthopedics' },
    ],
    painPoints: [
      {
        title: 'High-volume clinics',
        body: 'Orthopedic schedules are packed. iScribe keeps documentation off your plate so you can see more patients without taking notes home.',
      },
      {
        title: 'Procedures and injections',
        body: 'From joint and trigger-point injections to fracture reductions and casting, iScribe captures the procedure detail your note and billing need.',
      },
      {
        title: 'Exam and imaging findings',
        body: 'Range of motion, neurovascular status, and imaging review are documented accurately as you describe them in the room.',
      },
      {
        title: 'Post-op and follow-up notes',
        body: 'Standardized post-operative and follow-up notes are generated in your format, ready to review and sign in seconds.',
      },
    ],
    features: [
      {
        icon: IconFileText,
        title: 'Orthopedic note templates',
        body: 'Pre-built templates for fracture care, arthroplasty, sports medicine, joint injections, and post-op visits.',
      },
      {
        icon: IconActivity,
        title: 'Procedure & injection capture',
        body: 'Documents procedures, devices, and laterality that drive accurate orthopedic coding and billing.',
      },
      {
        icon: IconReportMedical,
        title: '95% audited E&M coding',
        body: 'Notes arrive with suggested E&M codes, validated by audit, so you stop leaving revenue to down-coding.',
      },
      {
        icon: IconPlugConnected,
        title: 'Works with your EHR',
        body: 'Writes notes straight into Epic, Cerner, athenahealth, eClinicalWorks, and 50+ systems. No copy-paste.',
      },
      {
        icon: IconShieldLock,
        title: 'HIPAA compliant & secure',
        body: 'End-to-end encrypted and SOC 2 certified. Audio is never stored beyond the session.',
      },
      {
        icon: IconBolt,
        title: 'Live in a day',
        body: 'A dedicated onboarding lead has your orthopedic practice documenting on iScribe within a single day.',
      },
    ],
    quote: {
      text: 'I tell all the physicians I know: you have to try iScribe. Once you try it, everything else will just seem subpar.',
      author: 'Dr. Richard Madison',
      role: 'Orthopedic Surgeon',
      avatar: '/doctors/dr-williams.png',
    },
    faqs: [
      {
        q: 'Is iScribe a good AI scribe for orthopedic surgeons?',
        a: 'Yes. iScribe is an ambient AI medical scribe built for high-volume specialties like orthopedics. It documents the full encounter, including history, exam, procedures, and plan, in your preferred orthopedic note format and syncs it to your EHR before the patient leaves.',
      },
      {
        q: 'Can iScribe document orthopedic procedures and injections?',
        a: 'Yes. iScribe captures in-office procedures such as joint and trigger-point injections, fracture care, and casting, including laterality, devices, and the detail needed for accurate documentation and billing.',
      },
      {
        q: 'How accurate is iScribe’s E&M coding for orthopedics?',
        a: 'iScribe reaches 95% audited E&M coding accuracy. Each note is generated with suggested codes you can review before signing, helping orthopedic practices reduce down-coding and capture appropriate revenue.',
      },
      {
        q: 'Which EHRs does iScribe work with?',
        a: 'iScribe integrates with Epic, Cerner (Oracle Health), athenahealth, eClinicalWorks, NextGen, and 50+ other systems, writing notes directly into the chart with no copy-paste.',
      },
      {
        q: 'Is iScribe HIPAA compliant?',
        a: 'Yes. iScribe is fully HIPAA compliant and SOC 2 certified. All audio and data are encrypted end-to-end, and recordings are deleted immediately after the note is generated.',
      },
      {
        q: 'How long does it take an orthopedic practice to get started?',
        a: 'Most practices are live within a single day. A dedicated onboarding lead handles EHR setup, imports your templates, and gets your team documenting their first ambient visits.',
      },
    ],
  },
}
