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

export type ProjectLayout = 'gallery' | 'igaming'

export type Project = {
  slug: string
  title: string
  year: string
  summary: string
  image: string
  imageAlt: string
  overlay?: string
  layout?: ProjectLayout
  gallery: GalleryItem[]
}

export type IgamingConcept = {
  slug: string
  n: string
  title: string
  text: string
  image: string
  accent: string
  swatches: string[]
}

export const igamingConcepts: IgamingConcept[] = [
  {
    slug: 'rio',
    n: '01',
    title: 'RIO',
    accent: '#F6A53A',
    swatches: ['#F6A53A', '#20D18A', '#E6C36A'],
    image: '/images/projects/igaming/rio.jpg',
    text: 'Региональное, яркое и дружелюбное направление с маскотом-туканом. Чистый зелёный, тёплые жёлто-оранжевые акценты и узнаваемый тропический характер.',
  },
  {
    slug: 'poker-table',
    n: '02',
    title: 'POKER TABLE',
    accent: '#E6C36A',
    swatches: [
      '#16936B',
      'radial-gradient(circle at 30% 18%, #FFF4C2 0%, #F5C84C 46%, #B8891A 100%)',
      '#EFDFB5',
    ],
    image: '/images/projects/igaming/poker-table.jpg',
    text: 'Классическая casino-эстетика с собственным героем маскотом-Изумрудом. Зелёное сукно, мягкое золото и потенциал долгосрочной узнаваемости бренда.',
  },
  {
    slug: 'palm',
    n: '03',
    title: 'PALM',
    accent: '#0AA89C',
    swatches: ['#0AA89C', '#20D18A', '#E6C36A'],
    image: '/images/projects/igaming/palm.jpg',
    text: 'Более глубокая и атмосферная концепция. Насыщенный бирюзовый, мягкое свечение, золото, тропические текстуры и премиальная эмоциональная подача.',
  },
]

export const rioPage = {
  kicker: 'Вариант 1',
  title: 'RIO',
  introBefore: 'Тема, созданная специально для южных стран. Её маскот ',
  introMascot: 'Тукан',
  introAfter: ': яркий, дружелюбный и легко узнаваемый символ тропиков',
  color:
    'Основным цветом остаётся целевой: зелёный. Его дополняет тёплый жёлто-оранжевый акцент. Вместе они формируют позитивную и энергичную палитру с чистыми, выразительными, но не кислотными цветами.',
  atmosphere:
    'Тема получилась живой, современной и эмоциональной. C характером, который хорошо передаёт атмосферу',
  paletteLabel: 'Палитра темы',
}

export const pokerTablePage = {
  kicker: 'Вариант 2',
  title: 'Poker table',
  intro:
    'Классическая эстетика казино с собственным узнаваемым героем. В центре концепции Изумруд: позитивный, харизматичный и необычный персонаж. На фоне типичных образов казино он выглядит свежо и нестандартно, помогая сформировать собственный визуальный характер.',
  color:
    'Классический зелёный отсылает к сукну игровых и покерных столов и сразу считывается как знакомый код казино. Мягкое золото в интерфейсе и графике добавляет ощущение статуса, награды и роскоши, не перегружая визуальный образ.',
  character:
    'Изумруд может развиваться вместе с сервисом: появляться в промо, бонусах, онбординге, программах лояльности, социальных коммуникациях и сезонных кампаниях. Это основа для последовательного сторителлинга и связи с аудиторией.',
  mascot:
    'Уникальный герой способен стать устойчивым кодом узнаваемости. История брендинга показывает, что необычные персонажи могут отличаться от привычной категории, но именно благодаря этому быстро запоминаются и годами остаются связанными с брендом.',
  paletteLabel: 'Палитра темы',
}

export const palmPage = {
  kicker: 'Вариант 3',
  title: 'PALM',
  intro:
    'Более насыщенная и атмосферная тема. В её основе глубокий синий и точечные бирюзово-зелёные и золотые акценты. Палитра выглядит выразительно, но не кричаще: цвет не давит, а мягко привлекает внимание и вовлекает в игру.',
  texture:
    'Ещё один характерный приём этого концепта — фактурные тропические текстуры на фоне. Лёгкая прозрачность хедера и футера помогает сохранить глубину изображения и делает интерфейс более цельным, интересным и современным.',
  graphics:
    'Особую роль здесь играет графика. Она заметно меняет восприятие всего сервиса, добавляя ему характера и привлекательности. С учётом того, что 70–80% аудитории казино и беттинга составляют мужчины, выразительные персонажи становятся важной частью визуальной коммуникации и усиливают эмоциональный отклик.',
  hybridTitle: 'RIO + PALM',
  hybrid:
    'Интересно рассмотреть и гибридное направление: сохранить глубокий атмосферный фон и насыщенную бирюзово-золотую палитру PALM, но добавить маскота-тукана из RIO. Эта комбинация наглядно показывает, насколько сильно один ключевой персонаж способен изменить восприятие бренда',
  paletteLabel: 'Палитра темы',
}

export const igamingPage = {
  kicker: 'Brand positioning',
  headline: ['MOBILE DESIGN', 'VISION'],
  subtitle: 'Запуск нового casino-бренда на рынках Аргентины, Бразилии и Кении',
  taskLabel: 'Задача',
  task: 'Запустить новый проект под лицензией Анжуан. На первом этапе клиент ожидает дизайн-концепцию мобильного продукта, которая задаст характер бренда, визуальный язык и основу для дальнейшего масштабирования сервиса.',
  conceptsKicker: 'Three strategic territories',
  conceptsTitle: 'Три концепции',
  conceptsCaption:
    'Каждая система раскрывает отдельный баланс локального характера, эмоции и casino-кодов',
  strategyTitle: 'Индивидуальный путь к решению',
  strategyCaption:
    'О роли дизайнера, цепочке согласований, фокусе на конечном пользователе и финальных решениях.',
  introLabel: 'Вводная мысль',
  intro:
    'Работа с каждым проектом строится по-разному. Иногда клиент приходит с уже сформированным пониманием бренда, аудитории и будущего продукта. В других случаях представление о финальной картине ещё только предстоит сформировать.',
  approvalLabel: 'Цепочка согласований',
  approval: [
    'Каждая концепция сначала проходит внутреннее обсуждение и согласование с продуктовой командой и менеджментом. Только после этого отобранные и аргументированные решения презентуются клиенту.',
    'Это большая цепочка совместной работы: исследование → дизайн-гипотезы → внутреннее согласование → презентация клиенту → доработка решения → B2C-продукт.',
    'Несмотря на сложную B2B-цепочку взаимодействия, финальное лицо продукта — игрок и пользователь сайта. Поэтому одна из моих ключевых целей — сохранить комфорт, понятность и эмоциональную привлекательность опыта для человека, который в итоге будет пользоваться проектом.',
  ],
  roleLabel: 'Роль дизайнера',
  role: [
    'В таких проектах моя роль выходит далеко за рамки классического продуктового дизайна. Я одновременно работаю как продуктовый, графический, бренд- и концептуальный дизайнер, а также смотрю на решения через маркетинговую оптику.',
    'Моя задача — не просто собрать интерфейс, а найти визуальный и продуктовый путь, который будет оптимален для конкретного клиента, его бизнеса и аудитории. Для этого важно выходить за пределы базового представления о роли продуктового дизайнера и связывать стратегию, образ бренда, коммуникацию и пользовательский опыт в единую систему.',
  ],
  accentLabel: 'Финальный акцент',
  accent:
    'Сильное решение рождается на пересечении целей бизнеса, ожиданий клиента, возможностей продукта и потребностей конечного пользователя.',
  conclusion:
    'На текущем этапе сформирована визуальная территория проекта и подготовлена основа для осознанного выбора будущего характера бренда.',
}

export const projects: Project[] = [
  {
    slug: 'igaming',
    title: 'iGaming Mobile Design',
    year: '2025',
    summary:
      'Brand positioning and mobile design vision for a new casino brand in Argentina, Brazil and Kenya.',
    image: '/images/igaming.jpg',
    imageAlt: 'iGaming mobile design concepts Rio, Poker Table and Palm',
    overlay: '#0B5E4A',
    layout: 'igaming',
    gallery: [],
  },
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
    title: 'iGaming platform new layout',
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
    title: 'iGaming platform theme',
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
