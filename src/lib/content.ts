export const site = {
  name: 'Nadya Karpovich',
  role: 'UX/UI Designer',
  email: 'nadya.karpovich@icloud.com',
  phone: '+375 33 3236438',
  phoneHref: 'tel:+375333236438',
  location: 'Minsk, Belarus',
  linkedin: 'https://www.linkedin.com/in/nadyakarpovich/',
  behance: 'https://www.behance.net/nadya_karp',
  telegram: 'https://t.me/nadyamsnk',
  cv: 'https://drive.google.com/file/d/1MiXYUHLgxn44OFdaMVTbW5nR4iV56bLS/view',
}

export const nav = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
] as const

export type GalleryCompare = {
  before: string
  after: string
}

export type GalleryItem = string | GalleryCompare

export function isGalleryCompare(item: GalleryItem): item is GalleryCompare {
  return typeof item === 'object'
}

export type Project = {
  slug: string
  title: string
  year: string
  summary: string
  image: string
  imageAlt: string
  overlay?: string
  gallery: GalleryItem[]
}

export const projects: Project[] = [
  {
    slug: 'flexiflow',
    title: 'FlexiFlow',
    year: '2022–2025',
    summary:
      'A user-friendly platform designed to streamline work processes and enhance team collaboration. Focused on adaptability and simplicity, it offers tools to suit various workflows and business needs.',
    image: '/images/work-management.png',
    imageAlt: 'FlexiFlow work management platform on a laptop',
    overlay: '#2A348F',
    gallery: [
      '/images/projects/flexiflow/01-1a.svg',
      '/images/projects/flexiflow/02-2a.svg',
      '/images/projects/flexiflow/03-3a.svg',
      '/images/projects/flexiflow/04-4.png',
      '/images/projects/flexiflow/05-5.png',
      '/images/projects/flexiflow/06-6.png',
      '/images/projects/flexiflow/07-7.png',
      '/images/projects/flexiflow/08-8.png',
      '/images/projects/flexiflow/09-9.png',
      '/images/projects/flexiflow/10-10.png',
      '/images/projects/flexiflow/11-11.png',
      '/images/projects/flexiflow/12-12.png',
      '/images/projects/flexiflow/13-13.png',
      '/images/projects/flexiflow/14-14.png',
      '/images/projects/flexiflow/15-15.png',
      '/images/projects/flexiflow/16-16.png',
      '/images/projects/flexiflow/17-17.png',
    ],
  },
  {
    slug: 'echo',
    title: 'Echo',
    year: '2022–2025',
    summary:
      'An intuitive platform designed to unify messaging, calls, and team collaboration. It enhances productivity while catering to the needs of modern workplaces.',
    image: '/images/echo.png',
    imageAlt: 'Echo corporate messenger brand cover',
    overlay: '#3B82F6',
    gallery: [
      '/images/projects/echo/01-10.svg',
      '/images/projects/echo/02-9.svg',
      '/images/projects/echo/03-8.svg',
      '/images/projects/echo/04-7.svg',
      '/images/projects/echo/05-6.svg',
      '/images/projects/echo/06-5.svg',
      '/images/projects/echo/07-4.svg',
      '/images/projects/echo/08-3.svg',
      '/images/projects/echo/09-2.svg',
      '/images/projects/echo/10-1.svg',
      {
        before: '/images/projects/echo/11-Frame_1597881759.svg',
        after: '/images/projects/echo/12-Frame_1597881762.svg',
      },
    ],
  },
  {
    slug: 'casino-platform',
    title: 'Online casino platform',
    year: '2022–2025',
    summary:
      'Improved navigation, cleaner game cards, enhanced user flows, and support for light & dark modes.',
    image: '/images/casino.png',
    imageAlt: 'Online casino platform interface on laptop and tablet',
    overlay: '#6D28D9',
    gallery: [
      '/images/projects/casino-platform/01-Slice_1.png',
      '/images/projects/casino-platform/02-Slice_2.png',
      '/images/projects/casino-platform/03-Slice_3.png',
      '/images/projects/casino-platform/04-Slice_4.png',
      '/images/projects/casino-platform/05-Slice_5.png',
      '/images/projects/casino-platform/06-Slice_6.png',
    ],
  },
  {
    slug: 'casino-ui-style',
    title: 'Casino UI styling',
    year: '2022–2025',
    summary: 'End-to-end implementation of a new visual style for an online casino platform.',
    image: '/images/casino-ui.png',
    imageAlt: 'Casino platform visual style implementation',
    overlay: '#5B21B6',
    gallery: [
      '/images/projects/casino-ui-style/01-Slice_1a.png',
      '/images/projects/casino-ui-style/02-Slice_5.png',
      '/images/projects/casino-ui-style/03-Slice_4.png',
    ],
  },
  {
    slug: 'status',
    title: 'Status',
    year: '2022–2025',
    summary:
      'Complete redesign of a SaaS platform for monitoring system statuses and incidents, focusing on modern UI and improved UX.',
    image: '/images/status.png',
    imageAlt: 'Status monitoring dashboard on a desktop display',
    overlay: '#2563EB',
    gallery: [
      '/images/projects/status/01-Status_1.svg',
      '/images/projects/status/02-Status_2.svg',
      '/images/projects/status/03-Status_3.svg',
      '/images/projects/status/04-Status_4.svg',
      '/images/projects/status/05-Status_5.svg',
      '/images/projects/status/06-Status_6.svg',
      '/images/projects/status/07-Status_7.svg',
      '/images/projects/status/08-Status_8.svg',
      '/images/projects/status/09-Status_9.svg',
      '/images/projects/status/10-Status_10.svg',
      '/images/projects/status/11-Status_12.svg',
      '/images/projects/status/12-Status_13.svg',
    ],
  },
  {
    slug: 'miscellaneous',
    title: 'Miscellaneous',
    year: '2022–2025',
    summary:
      'A collection of diverse projects and creative explorations showcasing my design versatility and unique approaches.',
    image: '/images/misc.png',
    imageAlt: 'Collection of miscellaneous interface explorations',
    overlay: '#1E3A5F',
    gallery: [
      '/images/projects/miscellaneous/01-1.png',
      '/images/projects/miscellaneous/02-1.svg',
      '/images/projects/miscellaneous/03-2.svg',
      '/images/projects/miscellaneous/04-3.svg',
      '/images/projects/miscellaneous/05-4.svg',
      '/images/projects/miscellaneous/06-5.svg',
      '/images/projects/miscellaneous/07-6.svg',
      '/images/projects/miscellaneous/08-7.svg',
      '/images/projects/miscellaneous/09-8.svg',
      '/images/projects/miscellaneous/10-9.svg',
      '/images/projects/miscellaneous/11-10.svg',
      '/images/projects/miscellaneous/12-Slice_3.png',
      '/images/projects/miscellaneous/13-12.svg',
    ],
  },
]

export type BehanceProject = {
  title: string
  summary: string
  href: string
  image: string
  imageAlt: string
}

export const behanceProjects: BehanceProject[] = [
  {
    title: 'LUNAR',
    summary: 'Horoscope and astrology app concept.',
    href: 'https://www.behance.net/gallery/155944907/LUNAR-Horoscope-Astrology-APP-concept',
    image: '/images/behance/lunar.png',
    imageAlt: 'LUNAR horoscope and astrology app concept',
  },
  {
    title: 'Blossom',
    summary: 'Online store concept.',
    href: 'https://www.behance.net/gallery/153970783/Blossom-Online-store-concept',
    image: '/images/behance/blossom.png',
    imageAlt: 'Blossom bridal boutique online store concept',
  },
  {
    title: 'MusicMax',
    summary: 'Music app redesign concept.',
    href: 'https://www.behance.net/gallery/153113659/MusicMax-App-redesign-concept',
    image: '/images/behance/musicmax.png',
    imageAlt: 'MusicMax app redesign concept',
  },
  {
    title: 'Evolve',
    summary: 'Student dashboard.',
    href: 'https://www.behance.net/gallery/154332681/Evolve-Student-dashboard',
    image: '/images/behance/evolve.png',
    imageAlt: 'Evolve student dashboard',
  },
]

export const services = [
  {
    n: '01',
    title: 'Product design',
    text: 'End-to-end UX and UI for digital products — from flows and structure to interfaces ready for development. I focus on clarity, hierarchy and details that make complex tools easier to use.',
  },
  {
    n: '02',
    title: 'Dashboards',
    text: 'Dense B2B and admin interfaces: tables, filters, statuses, high-load workflows. Designed so operators can scan fast, act with confidence and not fight the layout.',
  },
  {
    n: '03',
    title: 'Design systems',
    text: 'Foundations, components and practical documentation that keep products consistent as they grow. Built to survive handoff — useful for both designers and developers.',
  },
  {
    n: '04',
    title: 'Web design',
    text: 'Websites and landing pages that balance business goals with a clear reading experience. Adaptive layouts that hold together from desktop to mobile.',
  },
  {
    n: '05',
    title: 'Visual systems',
    text: 'Logos, icons, illustrations and UI styling that sit next to the product — so brand and interface feel like one thing, not two separate jobs.',
  },
  {
    n: '06',
    title: 'Delivery & QA',
    text: 'Close work with PMs, analysts and engineers: specs, reviews after implementation, and keeping visual and UX standards once the design leaves Figma.',
  },
]

export const experience = [
  {
    company: 'Uplatform',
    role: 'UX/UI Designer',
    period: '2025 – Present',
    body: [
      'Uplatform is a digital platform for business clients (B2B) and end users (B2C). I work across public website, new features and complex admin interfaces.',
      'Improve UX/UI of the public site so it stays clear and usable on every device. Design and update admin tools for high-load workflows. Refactor the design system for consistency and scale.',
      'Collaborate with PMs, analysts and developers on priorities and delivery. Review implementation. Help hire, onboard and support designers, and tighten how design works with other teams.',
    ],
  },
  {
    company: 'Anveo Ventures',
    role: 'UX/UI Designer',
    period: '2022 – 2025',
    body: [
      'Ran several products in parallel — dashboards, websites and landing pages — in an Agile setup, switching context without dropping quality.',
      'Led the move of 5+ projects from Sketch to Figma. Built and maintained web versions of mobile apps, which raised engagement through better cross-platform continuity.',
      'Worked with developers and the director on MVPs, competitor research, personas and branding extras: logos, illustrations, icons.',
    ],
  },
  {
    company: '“Rialto” Turn-key interior',
    role: 'Designer',
    period: '2017 – 2022',
    body: [
      'Bespoke interior solutions with a balance of aesthetics and function, from concept through client delivery.',
    ],
  },
  {
    company: 'JSC “Keramin”',
    role: 'Designer',
    period: '2016 – 2017',
    body: [
      'Interiors for a range of spaces inside a 50+ person team. Direct client communication to align expectations and close the work.',
    ],
  },
]

export const education = [
  {
    title: 'Bachelor of Arts',
    place: 'Belarusian State Pedagogical University',
    period: '2011 – 2016, Minsk',
  },
  {
    title: 'Design system: variables',
    place: 'My Design Tribe',
    period: 'Jan 2025',
  },
  {
    title: 'Design system',
    place: 'My Design Tribe',
    period: 'Apr 2024',
  },
  {
    title: 'UX/UI and Web Design',
    place: 'School by Yan Aheenko',
    period: 'Aug 2022',
  },
  {
    title: 'Quick Start in Web Design',
    place: 'School by Yan Aheenko',
    period: 'Apr 2022',
  },
  {
    title: 'Comprehensive Figma Course',
    place: 'Alexey Bychkov',
    period: 'Nov 2021',
  },
]

export const skills = [
  {
    label: 'Hard',
    items: [
      'Product design',
      'Figma',
      'Sketch',
      'Design systems',
      'UX research',
      'Usability testing',
      'Prototyping',
      'Wireframing',
      'User flows',
      'User personas',
      'Competitor research',
      'Information architecture',
      'Interaction design',
      'Responsive & adaptive',
      'Dashboards',
      'Handoff',
    ],
  },
  {
    label: 'Soft',
    items: [
      'Cross-functional collaboration',
      'Communication',
      'Self-management',
      'Mentoring',
      'Hiring & onboarding',
      'Attention to detail',
      'Agile',
      'Quality control',
    ],
  },
] as const

export const languages = ['Russian', 'Belarusian', 'English']
