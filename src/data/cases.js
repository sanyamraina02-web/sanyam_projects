/**
 * Case study data — the real Volumetree portfolio.
 * Single source of truth used by the homepage section and the /case-studies page.
 *
 * Source: volumetree.com/portfolio. Metrics are as published — correct any
 * figure here and both pages update.
 *
 * Each case has:
 *  - heroMetric: the single biggest, most quotable number (huge display)
 *  - metrics: 4 supporting stats shown in a bento around the hero metric
 *  - metric: legacy { label, value } used by the compact homepage cards
 */

export const cases = [
  {
    slug: 'trukkin',
    device: 'phone',
    image: '/case-studies/trukkin.png',
    industry: 'UAE · Logistics',
    audience: 'founder',
    name: 'Trukkin',
    whatWeDid: 'Engineered the fastest-growing trucking platform in the Middle East.',
    summary:
      'A digital freight platform connecting shippers and carriers across the Middle East — engineered to scale into the region\'s logistics backbone.',
    heroMetric: { value: '2M+', label: 'Freights moved', context: 'across the Middle East' },
    metrics: [
      { value: '$7M', label: 'Series A raised' },
      { value: '75K+', label: 'Shipments delivered' },
      { value: 'Dubai', label: 'HQ & launch market' },
      { value: 'ME-wide', label: 'Operating footprint' },
    ],
    metric: { label: 'Freights moved', value: '2M+' },
    gradient: 'from-brand-purple-deep via-brand-purple to-brand-cyan',
    stack: ['React Native', 'Node', 'Logistics', 'Real-time'],
  },
  {
    slug: 'esanjeevani',
    device: 'browser',
    image: '/case-studies/esanjeevani.png',
    industry: 'India · Healthcare',
    audience: 'enterprise',
    name: 'eSanjeevani',
    whatWeDid: "Scaled India's national telemedicine platform to millions of citizens.",
    summary:
      'India\'s national teleconsultation service — making digital healthcare accessible to millions of citizens across the country.',
    heroMetric: { value: '200M+', label: 'Tele-consultations served', context: 'nationwide' },
    metrics: [
      { value: '110K+', label: 'Patients served daily' },
      { value: 'National', label: 'Government-scale rollout' },
      { value: 'India', label: 'Country-wide coverage' },
      { value: '24 / 7', label: 'Always-on availability' },
    ],
    metric: { label: 'Tele-consultations', value: '200M+' },
    gradient: 'from-brand-purple via-brand-cyan to-brand-teal',
    stack: ['React', 'Node', 'Telehealth', 'Cloud'],
  },
  {
    slug: 'tata-crucible',
    device: 'browser',
    image: '/case-studies/tata-crucible.png',
    industry: 'India · eLearning',
    audience: 'enterprise',
    name: 'Tata Crucible',
    whatWeDid: 'Rebuilt the quizzing engine and web experience for a Fortune 500 brand.',
    summary:
      'A rebuilt quizzing engine and digital experience for Tata Crucible — one of India\'s most recognised corporate quiz competitions.',
    heroMetric: { value: '2.7M+', label: 'Yearly views', context: 'on the rebuilt platform' },
    metrics: [
      { value: '180K+', label: 'Quiz participants' },
      { value: 'Fortune 500', label: 'Brand (Tata)' },
      { value: 'Rebuilt', label: 'Quizzing engine' },
      { value: 'India', label: 'Nationwide reach' },
    ],
    metric: { label: 'Yearly views', value: '2.7M+' },
    gradient: 'from-brand-crimson via-brand-magenta to-brand-yellow',
    stack: ['Next.js', 'Node', 'Quiz Engine', 'CMS'],
  },
  {
    slug: 'easemyhiring',
    device: 'browser',
    image: '/case-studies/easemyhiring.png',
    industry: 'USA / UAE · AI Recruitment',
    audience: 'founder',
    name: 'Easemyhiring',
    whatWeDid: 'Built an AI-powered recruitment and interviewing platform.',
    summary:
      'An AI-led recruitment platform that runs interviews and assessments at scale — reimagining how companies hire.',
    heroMetric: { value: '10K+', label: 'AI interviews run', context: 'and counting' },
    metrics: [
      { value: '65%+', label: 'Selection accuracy' },
      { value: '1K+', label: 'Parallel interviews' },
      { value: 'USA / UAE', label: 'Markets live' },
      { value: 'AI-native', label: 'Built from the ground up' },
    ],
    metric: { label: 'AI interviews run', value: '10K+' },
    gradient: 'from-brand-purple-deep via-brand-purple to-brand-magenta',
    stack: ['Next.js', 'Python', 'LLMs', 'Realtime'],
  },
  {
    slug: 'skybag',
    device: 'phone',
    image: '/case-studies/skybag.png',
    industry: 'India · e-Commerce',
    audience: 'enterprise',
    name: 'Skybag',
    whatWeDid: "Delivered the digital commerce experience for Asia's largest bag company.",
    summary:
      'The e-commerce experience for Skybags — bringing Asia\'s largest bag company\'s lifestyle range online at scale.',
    heroMetric: { value: '5M+', label: 'Pieces sold', context: 'through the platform' },
    metrics: [
      { value: '96.9K', label: 'Monthly site visits' },
      { value: "Asia's #1", label: 'Bag company' },
      { value: 'India', label: 'Primary market' },
      { value: 'Omnichannel', label: 'Commerce build' },
    ],
    metric: { label: 'Pieces sold', value: '5M+' },
    gradient: 'from-brand-magenta via-brand-crimson to-brand-pink-soft',
    stack: ['React', 'Commerce', 'CMS', 'Payments'],
  },
  {
    slug: 'elby',
    device: 'phone',
    image: '/case-studies/elby.png',
    industry: 'Canada · e-Mobility',
    audience: 'founder',
    name: 'Elby',
    whatWeDid: 'Built an e-mobility platform simplifying urban e-bike transport.',
    summary:
      'An e-mobility platform revolutionising urban transportation — making electric bikes simple to access, ride and scale.',
    heroMetric: { value: '1M+', label: 'Kilometres ridden', context: 'on Elby e-bikes' },
    metrics: [
      { value: '2,300T+', label: 'CO₂ emissions cut', delta: 'down' },
      { value: '25K+', label: 'E-bike riders' },
      { value: 'Canada', label: 'Launch market' },
      { value: 'Urban', label: 'Mobility focus' },
    ],
    metric: { label: 'Kilometres ridden', value: '1M+' },
    gradient: 'from-brand-purple via-brand-purple-light to-brand-cyan',
    stack: ['React Native', 'Node', 'IoT', 'Maps'],
  },
  {
    slug: 'eduployment',
    device: 'browser',
    image: '/case-studies/eduployment.png',
    industry: 'Dubai · eLearning',
    audience: 'founder',
    name: 'Eduployment',
    whatWeDid: 'Built a platform upskilling blue-collar workers into better jobs.',
    summary:
      'A learning and employment platform upskilling blue-collar workers — and connecting them to better opportunities.',
    heroMetric: { value: '96.9K', label: 'Monthly site visits', context: 'and growing' },
    metrics: [
      { value: 'Blue-collar', label: 'Workforce focus' },
      { value: 'Dubai', label: 'Launch market' },
      { value: 'Upskilling', label: 'Learning tracks' },
      { value: 'Jobs', label: 'Employment matching' },
    ],
    metric: { label: 'Monthly site visits', value: '96.9K' },
    gradient: 'from-brand-purple-deep via-brand-purple to-brand-purple-light',
    stack: ['React', 'Node', 'LMS', 'Cloud'],
  },
  {
    slug: 'impact-danske-bank',
    device: 'browser',
    image: '/case-studies/impact-danske-bank.png',
    industry: 'Sweden · Accelerator',
    audience: 'enterprise',
    name: 'Impact',
    whatWeDid: "Powered Danske Bank's accelerator for Nordic impact startups.",
    summary:
      'The digital platform behind Danske Bank\'s Impact accelerator — supporting Nordic startups solving real-world problems.',
    heroMetric: { value: '1,500+', label: 'Impact startups powered', context: 'across the Nordics' },
    metrics: [
      { value: 'Danske Bank', label: 'Enterprise partner' },
      { value: 'Nordic', label: 'Startup focus' },
      { value: 'Sweden', label: 'Base of operations' },
      { value: 'Accelerator', label: 'Programme platform' },
    ],
    metric: { label: 'Impact startups powered', value: '1,500+' },
    gradient: 'from-brand-purple to-brand-purple-light',
    stack: ['Next.js', 'Node', 'Platform', 'Cloud'],
  },
  {
    slug: 'sirolular',
    device: 'browser',
    image: '/case-studies/sirolular.png',
    industry: 'Sweden · Marketplace',
    audience: 'founder',
    name: 'Sirolular',
    whatWeDid: 'Built a community + investment marketplace for startups.',
    summary:
      'A marketplace connecting startups and investors — helping both grow disruptively through community and capital.',
    heroMetric: { value: '5+', label: 'Growth partners onboarded', context: 'at launch' },
    metrics: [
      { value: 'Sweden', label: 'Launch market' },
      { value: 'Startups', label: 'Marketplace side A' },
      { value: 'Investors', label: 'Marketplace side B' },
      { value: 'Community', label: 'Built-in growth engine' },
    ],
    metric: { label: 'Growth partners', value: '5+' },
    gradient: 'from-brand-magenta via-brand-crimson to-brand-yellow',
    stack: ['React', 'Node', 'Marketplace', 'Payments'],
  },
]
