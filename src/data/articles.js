// Add a new article by adding another entry keyed by its URL slug.
// Renders at /blog/<slug>. Body is a list of blocks the page renders in order.
export const ARTICLES = {
  'what-is-an-ai-medical-scribe': {
    slug: 'what-is-an-ai-medical-scribe',
    title: 'What is an AI medical scribe? A complete guide for physicians',
    seoTitle: 'What Is an AI Medical Scribe? A Complete Guide (2026) | iScribe',
    seoDescription:
      'An AI medical scribe listens to patient visits and writes the clinical note automatically. Learn how ambient AI scribes work, their benefits, accuracy, security, and how to choose one.',
    category: 'Guides',
    author: 'The iScribe Team',
    date: '2026-06-10',
    dateDisplay: 'June 10, 2026',
    readTime: '7 min read',
    image: '/desktop-app.png',
    excerpt:
      'Ambient AI scribes write the clinical note for you, so you can focus on the patient. Here is how they work, what they do well, and how to pick the right one.',
    takeaways: [
      'An AI medical scribe listens to the visit and writes a structured clinical note automatically.',
      'Ambient AI runs in the background, with no typing, dictation, or scribe in the room.',
      'The best scribes sync to your EHR, code E&M accurately, and are HIPAA compliant.',
    ],
    blocks: [
      { type: 'p', text: 'Physicians spend up to two hours on documentation for every hour of direct patient care, and much of it spills into evenings and weekends. AI medical scribes are changing that by writing the clinical note for you. This guide explains what an AI medical scribe is, how it works, and what to look for when choosing one.' },

      { type: 'h2', text: 'What is an AI medical scribe?' },
      { type: 'p', text: 'An AI medical scribe is software that listens to a patient visit and automatically writes the clinical note. Unlike a human scribe in the room or a dictation service, an ambient AI scribe captures the natural conversation, understands the clinical content, and produces a structured note formatted to your EHR template, usually within seconds of the visit ending.' },
      { type: 'p', text: 'The goal is simple: let clinicians focus on the patient instead of the keyboard, while documentation happens quietly in the background.' },

      { type: 'h2', text: 'How does an AI medical scribe work?' },
      { type: 'p', text: 'Most ambient AI scribes follow the same four steps:' },
      { type: 'ol', items: [
        'Listen. You start the visit and the scribe captures the conversation ambiently, with no typing required.',
        'Generate. The moment the encounter ends, the AI writes a complete, structured note in your preferred format.',
        'Review and sign. You skim the note, make any edits, and sign off.',
        'Sync. The signed note flows straight back into your EHR, with suggested codes attached.',
      ] },

      { type: 'h2', text: 'Ambient AI scribes vs. traditional options' },
      { type: 'p', text: 'Human scribes are effective but expensive and hard to staff consistently. Dictation and templates still require you to do the writing and structuring. Ambient AI removes that work entirely: there is no person in the room, no phrase you have to remember, and no template to fill in by hand. The note is drafted for you, and you stay in control by reviewing before you sign.' },

      { type: 'h2', text: 'What are the benefits of an AI scribe?' },
      { type: 'ul', items: [
        'Less burnout and pajama time. Notes are done before you leave the room, not after dinner.',
        'Hours back every day. Practices commonly report saving roughly 2.5 hours per clinician, per day.',
        'Better patient interactions. You make eye contact and listen instead of typing.',
        'Accurate coding and revenue. Strong scribes attach accurate E&M codes and reduce costly down-coding.',
        'Consistency. Every note follows the same structure and terminology, across your whole team.',
      ] },

      { type: 'quote', text: 'I tell all the physicians I know: you have to try iScribe. Once you try it, everything else will just seem subpar.', by: 'Dr. Richard Madison, Orthopedic Surgeon' },

      { type: 'h2', text: 'Are AI medical scribes accurate and secure?' },
      { type: 'p', text: 'Accuracy matters most where it touches billing. Leading scribes now reach around 95% audited E&M coding accuracy, and because you review every note before signing, you remain the final check. On security, look for end-to-end encryption, SOC 2 certification, and full HIPAA compliance, with audio that is never stored beyond the session.' },

      { type: 'h2', text: 'How to choose an AI medical scribe' },
      { type: 'p', text: 'When you evaluate options, weigh these factors:' },
      { type: 'ul', items: [
        'EHR integration. It should write notes straight into Epic, Cerner, athenahealth, and the systems you already use, with no copy-paste.',
        'Specialty support. The AI should adapt to your specialty’s terminology and note structures, from primary care to orthopedics.',
        'Coding accuracy. Ask for audited E&M coding accuracy, not just transcription quality.',
        'Security. Confirm HIPAA compliance and SOC 2 certification in writing.',
        'Onboarding and support. The best vendors get you live in a day and answer when you need them.',
      ] },

      { type: 'h2', text: 'Getting started with iScribe' },
      { type: 'p', text: 'iScribe is an ambient AI medical scribe that listens to the visit, writes a structured note, codes the encounter, and syncs it to your EHR, all before the patient leaves the room. A dedicated onboarding lead has most practices documenting on iScribe within a single day. If you want to see it work on a real visit in your specialty, book a demo and we will walk you through it.' },
    ],
  },
}
