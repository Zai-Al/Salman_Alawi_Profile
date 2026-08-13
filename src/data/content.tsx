import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck, ShieldCheck, MapPin, Mail, Phone, ArrowRight,
  Database, CreditCard, Network, Target,
  Globe, TrendingUp, Repeat, Percent, Users, UserPlus,
  BookOpen, GraduationCap, Star,
} from 'lucide-react'

export type Mode = 'commercial' | 'academic'

export interface Badge {
  icon: LucideIcon
  num: string
  label: string
}

export interface ModeCopy {
  eyebrow: string
  tagline: ReactNode
  trust: ReactNode
  summary: ReactNode
  cta: string
  sting: string
  mission: string
  tagLine: ReactNode
  badges: Badge[]
}

export const icons = {
  badgeCheck: BadgeCheck,
  shieldCheck: ShieldCheck,
  mapPin: MapPin,
  mail: Mail,
  phone: Phone,
  arrowRight: ArrowRight,
  database: Database,
  creditCard: CreditCard,
  network: Network,
  target: Target,
  globe: Globe,
  trendingUp: TrendingUp,
  repeat: Repeat,
  percent: Percent,
  users: Users,
  userPlus: UserPlus,
  bookOpen: BookOpen,
  graduationCap: GraduationCap,
  star: Star,
}

export const copy: Record<Mode, ModeCopy> = {
  commercial: {
    eyebrow: 'Head of Revenue, Lune',
    tagline: <>Director-Level Commercial &amp; Growth Strategist <span className="div">|</span> Director-Level Business Development Leader</>,
    trust: <>Trusted by <b>regulators</b>, <b>Tier 1 banks</b>, and <b>fintech disruptors</b> across the GCC</>,
    summary: <>Owns the full revenue function at Lune (direct sales, strategic partnerships, and reseller channels) across Europe and the GCC. Previously scaled Tarabut&apos;s regional business development across Bahrain, KSA, and UAE, and ran a licensed training centre with full curriculum and P&amp;L ownership. Same evidence, read two ways: flip the switch above.</>,
    cta: 'Start a conversation',
    sting: 'Same ten years. Same result.',
    mission: 'Lune turns raw transaction data into personalised offers and insight for banks, merchants, and consumers. I lead go-to-market across Europe and the GCC, the commercial engine behind that pipeline.',
    tagLine: <><b>Fintech</b> • <b>Banking</b> • <b>Partnerships</b> • <b>GTM Execution</b></>,
    badges: [
      { icon: icons.star, num: '10+', label: 'Years Experience' },
      { icon: icons.trendingUp, num: '$5M+', label: 'Pipeline Growth' },
      { icon: icons.repeat, num: '300%', label: 'Renewal Uplift' },
      { icon: icons.globe, num: '5', label: 'GCC Markets' },
    ],
  },
  academic: {
    eyebrow: 'Lecturer Candidate, Business & Financial Services',
    tagline: <>Business &amp; Commercial Leadership <span className="div">|</span> Financial Services Lecturer</>,
    trust: <>Ofqual-regulated in <b>Education Studies</b> · Certified peer reviewer for <b>3 international journals</b></>,
    summary: 'Holds an MBA (Merit, Strathclyde) alongside a TQUK Level 4 Diploma in Education Studies and a TQUK Level 4 Award in Internal Quality Assurance of Assessment, earned while running a licensed training centre\'s full curriculum, delivering a national workforce-readiness programme, and building a 30-person training team. The commercial track is the syllabus, not a separate resume.',
    cta: 'Discuss a teaching opportunity',
    sting: 'Same ten years. Same result.',
    mission: 'Alongside commercial leadership, I bring Ofqual-regulated teaching and assessment credentials, plus five years running a licensed training centre\'s curriculum end-to-end.',
    tagLine: <><b>Curriculum Design</b> • <b>Assessment</b> • <b>Business Education</b> • <b>Mentorship</b></>,
    badges: [
      { icon: icons.graduationCap, num: '2', label: 'Ofqual Teaching Quals' },
      { icon: icons.bookOpen, num: '17', label: 'Peer Reviews Completed' },
      { icon: icons.users, num: '250+', label: 'Job Seekers Trained' },
      { icon: icons.userPlus, num: '30+', label: 'Trainers Led' },
    ],
  },
}

export interface VelocityStep {
  role: string
  date: string
  height: number
}

export const velocitySteps: VelocityStep[] = [
  { role: 'BD Manager', date: 'Tarabut · 07/2023', height: 22 },
  { role: 'Senior BD Manager', date: 'Tarabut · 07/2024', height: 45 },
  { role: 'Regional Director, BD', date: 'Tarabut · 03/2025', height: 72 },
  { role: 'Head of Revenue', date: 'Lune · 05/2026', height: 100 },
]

export interface Metric {
  icon: LucideIcon
  target: number
  prefix?: string
  suffix?: string
  label: ReactNode
}

export const metrics: Metric[] = [
  { icon: icons.globe, target: 5, suffix: ' markets', label: 'GCC markets scaled: Bahrain, UAE, KSA, Oman, Qatar' },
  { icon: icons.trendingUp, target: 5, prefix: '$', suffix: 'M+', label: 'Pipeline growth contributed' },
  { icon: icons.repeat, target: 300, suffix: '%', label: 'Uplift in Tier 1 contract renewals' },
  { icon: icons.percent, target: 41, suffix: '%', label: 'ROI on marketing spend, Millennium Training Centre' },
  { icon: icons.users, target: 250, suffix: '+', label: <>Job seekers trained &amp; placed, first programme year</> },
  { icon: icons.userPlus, target: 30, suffix: '+', label: <>Trainers &amp; staff built and led directly</> },
]

export type Relevance = 'commercial' | 'academic' | 'both'

export interface TimelineItem {
  role: string
  org: string
  meta: string
  bullets: { text: ReactNode; rel: 'commercial' | 'academic' }[]
}

export const timeline: TimelineItem[] = [
  {
    role: 'Head of Revenue',
    org: 'Lune: Transaction Data Enrichment Platform',
    meta: '05/2026 – Present · Global',
    bullets: [
      { rel: 'commercial', text: <>Serves as the most senior commercial executive at Lune, reporting directly to the CEO and co-founders, with full strategic ownership of the company&apos;s revenue P&amp;L across all product lines.</> },
      { rel: 'academic', text: <>Built and leads the organisation&apos;s entire commercial and business development function (direct sales, strategic partnerships, and reseller channels), establishing the operating rhythm, structure, and playbook the company runs on today.</> },
      { rel: 'commercial', text: 'Drives revenue growth across every product line, including the transaction enrichment API and card-linked offers/cashback programmes, translating company strategy into coordinated go-to-market execution.' },
      { rel: 'commercial', text: 'Leading global expansion across Europe, Asia, and Africa, opening new markets and securing executive-level engagement with Tier 1 banking groups, neobanks, and merchant acquirers.' },
      { rel: 'commercial', text: 'Owns customer continuity and retention as a core mandate, safeguarding and growing the existing client base alongside new-market acquisition.' },
      { rel: 'commercial', text: 'Acts as a strategic partner to the CEO and co-founders on company direction, shaping product-market priorities and expansion decisions from a revenue and commercial-risk perspective.' },
    ],
  },
  {
    role: 'Regional Director of Business Development',
    org: 'Tarabut',
    meta: '03/2025 – 05/2026 · MENA',
    bullets: [
      { rel: 'commercial', text: 'Generated over $7M in closed, booked revenue across three years at Tarabut, a career-defining result for an early-stage startup, achieved through progressive promotion from Business Development Manager to Regional Director.' },
      { rel: 'commercial', text: <>Operated as the senior commercial leader for the MENA region, directing multi-country sales strategy, team performance, and market execution across Bahrain, KSA, and UAE, effectively running the region&apos;s commercial function end-to-end.</> },
      { rel: 'commercial', text: 'Closed high-impact, multi-market commercial deals with Tier 1 banks and fintechs, leading complex contract negotiations and cross-border deal structuring from first conversation to signature.' },
      { rel: 'academic', text: 'Built and led high-performing commercial teams across MENA, implementing unified CRM discipline (HubSpot, Zoho) that brought forecasting rigor and pipeline visibility to a fast-scaling startup environment.' },
      { rel: 'commercial', text: <>Forged strategic alliances with regulators and ecosystem partners, strengthening Tarabut&apos;s compliance posture and market credibility as it scaled.</> },
    ],
  },
  {
    role: 'Senior Business Development Manager',
    org: 'Tarabut',
    meta: '07/2024 – 02/2025 · MENA',
    bullets: [
      { rel: 'commercial', text: 'Accelerated regional revenue by 300% through a Tier 1 client retention and renewal strategy.' },
      { rel: 'academic', text: 'Institutionalised CRM-driven pipeline governance that outlasted the individual deals it was built for.' },
    ],
  },
  {
    role: 'Business Development Manager',
    org: 'Tarabut',
    meta: '07/2023 – 06/2024 · Manama, Bahrain',
    bullets: [
      { rel: 'commercial', text: 'Secured foundational partnerships with fintechs and digital-first banks across the GCC during early-stage go-to-market.' },
    ],
  },
  {
    role: 'Managing Director',
    org: 'Millennium Training Centre',
    meta: '02/2018 – 04/2023 · Manama, Bahrain',
    bullets: [
      { rel: 'commercial', text: <>Led organisational strategy and multi-product training delivery with full P&amp;L and curriculum ownership, delivering 10%+ YoY growth for five consecutive years.</> },
      { rel: 'academic', text: 'Designed and delivered a national workforce-readiness programme, the Job Seekers Induction Programme, training and placing 250+ job seekers in its first year, working directly with government stakeholders on curriculum and outcomes reporting.' },
      { rel: 'academic', text: 'Built and led a team of 30+ trainers and support staff, embedding a quality-assured, performance-driven instructional culture.' },
    ],
  },
  {
    role: 'Assistant Director',
    org: 'Procloud Training Centre',
    meta: '09/2016 – 01/2018 · Manama, Bahrain',
    bullets: [
      { rel: 'commercial', text: 'Developed market-entry and go-to-market strategy for top-tier ICT certification programmes.' },
      { rel: 'academic', text: "Negotiated partnerships with global certification bodies, expanding the institute's accredited course portfolio." },
    ],
  },
]

export interface Credential {
  rel: Relevance
  tag: string
  name: string
  org: string
  detail: ReactNode
}

export const credentials: Credential[] = [
  {
    rel: 'commercial',
    tag: 'MBA · Merit',
    name: 'Master of Business Administration',
    org: 'University of Strathclyde · 2018–2020',
    detail: 'Postgraduate degree awarded with Merit, completed in Manama while working full-time in commercial leadership.',
  },
  {
    rel: 'both',
    tag: 'BSc',
    name: 'Bachelor of Science in Nursing',
    org: 'University of Bahrain · 2007–2013',
    detail: 'The original professional foundation, College of Health Sciences, before a deliberate pivot into commercial and business leadership.',
  },
  {
    rel: 'academic',
    tag: 'Ofqual · L4',
    name: 'Diploma in Education Studies (RQF)',
    org: 'TQUK / MKNCC Global · Aug 2021',
    detail: <>Units: Equality, Diversity &amp; Inclusion in Education · Historical &amp; Contemporary Issues in Education · Multidisciplinary Approaches to Education · Theories of Learning &amp; Development.</>,
  },
  {
    rel: 'academic',
    tag: 'Ofqual · L4',
    name: 'Award: Internal Quality Assurance of Assessment',
    org: 'TQUK / Educating UK · Apr 2022',
    detail: 'Covers internally assuring the quality of assessment, and the principles and practice behind it.',
  },
  {
    rel: 'both',
    tag: 'Practitioner',
    name: 'PCQI: Chartered Quality Institute',
    org: 'CQI & IRCA · Aug 2021',
    detail: 'Awarded the Practitioner grade with the right to use the honours PCQI, a quality and auditing discipline underpinning both training-centre and Lune process work.',
  },
  {
    rel: 'commercial',
    tag: 'CIM Level 3',
    name: 'Marketing Principles & Customer Communications',
    org: 'Chartered Institute of Marketing · 2019',
    detail: 'Foundation Certificate in Marketing (Customer Communications) and Award in Marketing Principles, both awarded January 2019.',
  },
  {
    rel: 'commercial',
    tag: 'Certificate',
    name: 'Fundamentals of Digital Marketing',
    org: 'Google Digital Garage',
    detail: 'Core digital-marketing foundations applied directly to the 41% marketing-ROI result at Millennium Training Centre.',
  },
  {
    rel: 'commercial',
    tag: 'Award',
    name: 'General Insurance',
    org: 'Chartered Insurance Institute',
    detail: 'Insurance-sector fundamentals, relevant to cross-sector deals spanning banking, insurance, and lending at Tarabut.',
  },
]

export interface PeerReviewJournal {
  journal: string
  count: number
}

export const peerReviewTotal = 17
export const peerReviewJournals: PeerReviewJournal[] = [
  { journal: 'E-Learning and Digital Media', count: 5 },
  { journal: 'Education and Information Technologies', count: 6 },
  { journal: 'International Journal of Educational Development', count: 6 },
]

export interface Project {
  rel: Relevance
  tag: string
  name: string
  meta: string
  desc: ReactNode
}

export const projects: Project[] = [
  {
    rel: 'both',
    tag: 'Quality & Operations',
    name: 'MTC Quality Management System: Review, Improve & Update',
    meta: 'Millennium Training Centre · Jan 2021 – Present',
    desc: "Ongoing ownership of the centre's quality-assurance framework: revising the QA manual and strategic plan, designing new support and operational policies, reviewing every training programme's structure, and running self-evaluation and assessment-procedure reviews.",
  },
  {
    rel: 'both',
    tag: 'Training & Recruitment',
    name: 'Job Seekers Induction Programme: Training & Recruitment',
    meta: 'Millennium Training Centre · Oct 2018 – Present',
    desc: 'A national employability programme building interpersonal, ICT, and workplace-readiness skills. 76 job seekers trained and placed since inception into roles spanning marketing, HR, admin, accounting, and audit, with the curriculum customised for specific hiring briefs, including bespoke induction tracks for security guards, secretaries, and administrative executives.',
  },
  {
    rel: 'academic',
    tag: 'MBA Dissertation',
    name: "Evaluating the Impact of Digital Transformation in Bahrain's Education Sector",
    meta: 'Strathclyde Business School · Mar 2020 – Sep 2020',
    desc: 'Qualitative research study based on 26 semi-structured interviews with education-sector professionals, analysed via reflexive thematic analysis, conducted entirely online through the COVID-19 period. Identified five themes shaping ed-tech adoption in Bahrain: barriers to transformation, strategic planning, educational-technology leadership, learner-experience indicators, and digital culture, with the last emerging as the strongest single barrier.',
  },
  {
    rel: 'commercial',
    tag: 'Business Launch',
    name: 'Medical Training Programmes: New Business Line Launch',
    meta: 'Procloud Training Centre · Sep 2016 – Apr 2017',
    desc: 'Designed and executed the go-to-market plan for a new medical-training business line, securing affiliations with medical awarding bodies, certifying instructors against the target qualifications, scheduling the annual training calendar, and building the sales and marketing plan to reach medical institutions across Bahrain.',
  },
]

export const commercialSkills = [
  'Revenue & GTM leadership', 'Strategic partnerships',
  'Regional / GCC expansion', 'Open banking & fintech',
  'Enterprise negotiation', 'CRM & pipeline governance',
]

export const academicSkills = [
  'Business development & sales strategy', 'Marketing principles',
  'Strategic & international business', 'Financial services & open banking',
  'Entrepreneurship & leadership', 'Negotiation & partnership management',
]

export interface Language {
  name: string
  level: string
  fill: number
  note: string
}

export const languages: Language[] = [
  { name: 'Arabic', level: 'Native', fill: 100, note: 'Primary language for direct communication, presentation, and relationship building.' },
  { name: 'English', level: 'Proficient', fill: 92, note: 'Used for business leadership, academic writing, stakeholder communication, and public-facing work.' },
]
