

export const siteConfig = {
  name: 'مؤسسة طيف الاعمار للمقاولات',
  description: 'مؤسسة طيف الاعمار للاصباغ والديكورات وجميع اعمال الترميمات. نوفر كادر فني متخصص، أسعار مناسبة، دقة وجودة في التنفيذ في جميع أعمالكم.',
  logo: {
    src: '/logo.png',   //شعار الموقع 
    srcDark: '/logo.png',       // Used when strategy is 'switch'
    alt: 'Cooper Logo',
    strategy: 'invert' as 'invert' | 'switch' | 'static', // 'invert' | 'switch' | 'static'
  },
  ogImage: '/og-image1.jpg', // Default Open Graph image
  primaryColor: '#00008B', // Default primary color
  search: {
    enabled: true,
  },
  announcement: {
    enabled: false,   // التحكم في ظهور الإعلان
    id: 'upgrade_v1_1_1', // Change this ID to reshow the banner
    link: '/changelog',
    localizeLink: true, // Set to true to apply i18n routing to the link, false for external/absolute links
  },
  blog: {
    postsPerPage: 6,
  },
  contact: {
    email: {
      support: 'support@interstellar.com',
      sales: 'sales@interstellar.com',
    },
    phone: {
      main: '+730266665',
      label: 'اتصل بنا',
    },
    address: {
      city: 'ابو ظبي',
      full: 'مدينة ابوظبي، بني ياس، الامارات العربية المتحدة',
    }
  },
  analytics: {
    alwaysLoad: import.meta.env.ANALYTICS_ALWAYS_LOAD === 'true',
    vendors: {
      googleAnalytics: {
        id: import.meta.env.GA_ID || '',
        enabled: import.meta.env.GA_ENABLED === 'true',
      },
      rybbit: {
        id: import.meta.env.RYBBIT_ID || '',
        src: import.meta.env.RYBBIT_SRC || 'https://rybbit.example.com/api/script.js',
        enabled: import.meta.env.RYBBIT_ENABLED === 'true',
      },
      umami: {
        id: import.meta.env.UMAMI_ID || '',
        src: import.meta.env.UMAMI_SRC || 'https://analytics.umami.is/script.js',
        enabled: import.meta.env.UMAMI_ENABLED === 'true',
      },
    },
  },
  dateOptions: {
    localeMapping: {
        'ar': 'ar-TN', // Force Maghreb Arabic date format (e.g., جانفي instead of يناير)
        'en': 'en-GB', // Example: Force UK English date format
    }
  }
};

export const NAV_LINKS = [
  { 
    href: '/features', 
    label: 'Product',
    children: [
        { href: '/features', label: 'Features', description: 'What makes us different', icon: 'Zap' },
        { href: '/pricing', label: 'Pricing', description: 'Plans for every team', icon: 'CreditCard' },
    ]
  },
  { 
    href: '/docs', 
    label: 'Resources',
    children: [
        { href: '/docs/getting-started', label: 'Docs', description: 'Start building today', icon: 'Book', localize: false },
        { href: '/blog', label: 'Blog', description: 'Latest updates & guides', icon: 'Newspaper' },
        { href: '/changelog', label: 'Changelog', description: 'New features & fixes', icon: 'FileClock' },
    ]
  },
  { 
    href: '/portfolio', 
    label: 'Work',
    children: [
        { href: '/portfolio', label: 'All Projects', description: 'Our complete portfolio', icon: 'LayoutGrid' },
        { href: '/design', label: 'Design System', description: 'Style guide & tokens', icon: 'Palette' },
    ]
  },
  { 
    href: '/about', 
    label: 'Company',
    children: [
        { href: '/about', label: 'About', description: 'Our story & mission', icon: 'Building2' },
        { href: '/contact', label: 'Contact', description: 'Get in touch with us', icon: 'Mail' },
    ]
  },
];

export const ACTION_LINKS = {
  primary: { label: 'اتصل بنا', href: 'tel:+730266665' },
  social: { 
    twitter: 'https://twitter.com/gladtek',
    linkedin: 'https://linkedin.com/company/gladtek',
    github: 'https://github.com/gladtek',
    youtube: 'https://youtube.com/@gladtek',
    facebook: 'https://facebook.com/gladtek'
    
  }
};

export const FOOTER_LINKS = {
  product: {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/about', label: 'About' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/changelog', label: 'Changelog' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy', localize: false },
      { href: '/terms', label: 'Terms', localize: false }
    ],
  },
};
