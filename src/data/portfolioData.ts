import { Project, Service, SkillCategory, Certificate, Testimonial, ProcessStep, CorePrinciple, FAQItem } from '../types/portfolio';

export const personalInfo = {
  name: "Abdul Wahab",
  role: "WordPress Developer & AI Automation Specialist",
  tagline: "I Build WordPress Sites That Actually Bring In Business.",
  subtext: "I build high-performance WordPress and WooCommerce websites for businesses — and supercharge them with AI, automation, APIs, and custom integrations when they make your workflow faster and more profitable.",
  email: "mr.wahabsain@gmail.com",
  phone: "+92 306 0649870",
  whatsappUrl: "https://wa.me/923060649870?text=Hi%20Abdul%20Wahab%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20WordPress%20%2F%20AI%20automation%20project.",
  location: "Pakistan — Working with clients globally (UK, US, UAE, PK)",
  status: "Available for new projects",
  avatar: "/assets/abdul-wahab.png",
  socials: {
    linkedin: "https://www.linkedin.com/in/wahab-sain/",
    github: "https://github.com/wahab-bahi",
    x: "https://x.com/wahabaccacc",
  },
  stats: [
    { value: "1.5+", label: "Years Experience", detail: "Focused on WordPress & Integrations" },
    { value: "10+", label: "Websites Shipped", detail: "Full client & collaborative builds" },
    { value: "3+", label: "Core Business Clients", detail: "Repeat contracts & references" },
    { value: "100%", label: "Client Satisfaction", detail: "Transparent communication" },
  ]
};

export const projectsData: Project[] = [
  {
    id: "primestay",
    index: "01",
    title: "Prime Stay Management",
    taxonomy: "Client Work",
    category: "WordPress • Business Website • Integration",
    image: "/assets/psn-home.png",
    imageAlt: "Prime Stay Management homepage hero section on desktop",
    isRealScreenshot: true,
    description: "A complete WordPress website built for Prime Stay Management, a UK-based short-let property management business. I handled the website development from start to finish, including the information architecture, individual service pages, responsive experience, and direct WhatsApp integration so UK property owners can easily connect without friction.",
    goal: "Give the business a clear, professional web presence where landlords and property investors understand the service tiers instantly and can request a proposal directly via WhatsApp or enquiry form.",
    built: [
      "Full custom WordPress build, crafted page by page",
      "Tailored site structure, service grid and intuitive navigation",
      "Seamless responsive layouts across mobile, tablet, and widescreen monitors",
      "WhatsApp direct integration for high-conversion property owner enquiries",
      "High-speed, SEO-friendly layout tailored to UK short-let market",
      "Custom section highlighting what Virtual Assistants handle"
    ],
    role: [
      "End-to-end WordPress development",
      "Information architecture & page flow",
      "Responsive UI implementation",
      "WhatsApp lead integration",
      "Business-focused conversion optimization"
    ],
    tech: ["WordPress", "Responsive Web Development", "WhatsApp Integration", "CSS3 / Custom Styling", "Lead Capture"],
    url: "https://primestaymanagement.co.uk/",
    gallery: [
      {
        src: "/assets/psn-home.png",
        label: "Homepage Hero",
        alt: "Prime Stay Management homepage with hero headline and call-to-action"
      },
      {
        src: "/assets/psn-services.png",
        label: "Services Grid",
        alt: "Professional property management services grid section"
      },
      {
        src: "/assets/psn-what.png",
        label: "VA Scope Breakdown",
        alt: "What our virtual assistants handle section listing service tasks"
      },
      {
        src: "/assets/psn-process.png",
        label: "Onboarding Flow",
        alt: "Getting started process steps section with contact footer"
      }
    ],
    gallerySource: "Live production screens captured from primestaymanagement.co.uk"
  },
  {
    id: "pugsbeauty",
    index: "02",
    title: "Pugs Beauty",
    taxonomy: "Collaborative Project",
    category: "WordPress • Content Website",
    image: "/assets/pugs-hero.png",
    imageAlt: "Pugs Beauty homepage hero section on desktop",
    isRealScreenshot: true,
    description: "A comprehensive WordPress content website built collaboratively, dedicated to pug care, nutrition, grooming, and training through high-readability articles and structured guides. Handled the core site architecture, dynamic blog layouts, social sharing hooks, and supporting pages.",
    goal: "A clean, highly readable publishing platform where pet lovers can effortlessly discover breed advice, browse categories, and share care guides across social channels.",
    built: [
      "WordPress site structure, category taxonomy, and navigation",
      "Engaging homepage hero with featured article spotlights",
      "Content-focused article templates optimized for typography and reading speed",
      "Custom About and Contact pages with responsive forms",
      "Integrated social sharing buttons for viral reach",
      "Responsive optimization across all handheld devices"
    ],
    role: [
      "Collaborative WordPress engineering",
      "Page template design & implementation",
      "Responsive performance optimization",
      "Article formatting & social share architecture"
    ],
    tech: ["WordPress", "Content Architecture", "Responsive Layouts", "SEO Best Practices", "Social Integration"],
    url: "https://pugsbeauty.com/",
    gallery: [
      {
        src: "/assets/pugs-hero.png",
        label: "Homepage",
        alt: "Pugs Beauty homepage hero section with featured articles"
      },
      {
        src: "/assets/pugs-article.png",
        label: "Article Layout",
        alt: "Pugs Beauty article view with social sharing buttons"
      },
      {
        src: "/assets/pugs-about.png",
        label: "About Page",
        alt: "Pugs Beauty about us story and editorial values"
      },
      {
        src: "/assets/pugs-contact.png",
        label: "Contact Page",
        alt: "Pugs Beauty contact enquiry layout"
      }
    ],
    gallerySource: "Screens captured from live pugsbeauty.com platform"
  },
  {
    id: "extension",
    index: "03",
    title: "Lead Generation Extension",
    taxonomy: "Personal Project",
    category: "Browser Extension • Automation Concepts",
    image: "/assets/project-extension.jpg",
    imageAlt: "Mockup of a browser extension panel listing collected lead information",
    isRealScreenshot: false,
    description: "A lightweight Chrome browser extension built to automate prospective client lead collection, contact parsing, and structured data export directly from social and web directories. Built to explore eliminating tedious copy-pasting for outreach workflows.",
    goal: "Understand how much repetitive prospecting time can be reduced through lightweight client-side software and automated JSON/CSV exports.",
    built: [
      "Interactive popup UI for filtering and saving lead contacts",
      "Instant data organization and 1-click structured CSV/JSON export",
      "API hooks for checking lead validity and enriched information",
      "Asynchronous storage using Chrome storage API"
    ],
    role: ["Tool Design", "JavaScript Development", "DOM Parsing", "Data Export Logic"],
    tech: ["JavaScript (ES6+)", "Browser Extension API", "REST APIs", "DOM Parsing", "Lead Enrichment"],
    status: "Personal tool & productivity project"
  },
  {
    id: "ai-lab",
    index: "04",
    title: "AI Automation Lab",
    taxonomy: "Experimental / Learning Project",
    category: "AI Automation • AI Integrations",
    image: "/assets/project-ai-lab.jpg",
    imageAlt: "Node-based automation workflow canvas with connected steps",
    isRealScreenshot: false,
    description: "An ongoing lab of real-world automated workflows connecting modern AI models (OpenAI, Claude, Gemini) with business systems like WordPress forms, Google Sheets, email providers, and CRMs using visual automation engines (n8n, Make.com, Zapier).",
    goal: "Construct practical, bulletproof automations that handle real business tasks — qualified lead notifications, automated content summaries, customer FAQ triage — so clients receive turnkey systems with zero manual friction.",
    built: [
      "Production workflows in n8n and Make.com",
      "AI API step integration for prompt evaluation and entity extraction",
      "Webhook-driven data handling between websites and external pipelines",
      "Error handling and notification fallback triggers via Telegram and email"
    ],
    role: ["Workflow Architecture", "Prompt Engineering", "Webhook Integration", "API Plumbing"],
    tech: ["n8n", "Make.com", "Zapier", "OpenAI API", "Claude API", "Gemini API", "Webhooks", "JSON REST APIs"],
    status: "Active research lab & client-ready prototypes"
  }
];

export const servicesData: Service[] = [
  {
    id: "wordpress",
    title: "WordPress Development",
    summary: "Build professional, bespoke, and responsive WordPress websites tailored to your specific commercial goals.",
    icon: "Layout",
    items: [
      "Custom WordPress website development from scratch",
      "Business, corporate & service provider websites",
      "Mobile-first, lightning-fast responsive execution",
      "Third-party tool & WhatsApp direct lead integration",
      "Clean backend setup with easy non-technical content management",
      "SEO-friendly structure and Core Web Vitals performance tuning"
    ],
    cta: "Discuss a WordPress Website",
    estimatedDelivery: "7 - 14 Days",
    idealFor: "Service businesses, agencies, clinics, consultants, and UK/US firms needing a reliable digital headquarters."
  },
  {
    id: "woocommerce",
    title: "WooCommerce Development",
    summary: "Architect high-converting online stores built around the customer shopping journey.",
    icon: "ShoppingBag",
    items: [
      "Complete WooCommerce store setup & configuration",
      "High-converting product catalog and filtering structure",
      "Frictionless cart, one-page checkout, and payment gateways",
      "Shipping rules, tax calculations, and invoice automation",
      "Inventory tracking and automated order notification webhooks",
      "Responsive mobile shopping experience"
    ],
    cta: "Build My Online Store",
    estimatedDelivery: "10 - 21 Days",
    idealFor: "Brands, direct-to-consumer businesses, and retailers expanding their sales channels."
  },
  {
    id: "ai-automation",
    title: "AI Automation & Integrations",
    summary: "Connect modern AI models and automation engines to eliminate repetitive manual admin tasks.",
    icon: "Cpu",
    items: [
      "Visual automation setup via n8n, Make.com, and Zapier",
      "Webhook connections between WordPress forms and business apps",
      "AI-powered lead qualification & automatic email draft responses",
      "Automated summary generation using OpenAI, Claude, or Gemini",
      "CRM syncing and instant WhatsApp/Telegram alerts for incoming leads",
      "Custom API integrations to bridge siloed software"
    ],
    cta: "Explore AI Automation",
    note: "Currently providing tailored automation builds for businesses seeking to reduce overhead.",
    estimatedDelivery: "3 - 7 Days",
    idealFor: "Busy teams looking to automate repetitive data entry, lead triage, and cross-app updates."
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: "Core CMS & Web Development",
    note: "Primary stack used in client deliveries",
    level: "core",
    skills: [
      "WordPress",
      "WooCommerce",
      "Custom Themes",
      "Responsive Web Design",
      "Page Speed Optimization",
      "HTML5 / Semantic Markup",
      "Modern CSS3 & Flex/Grid",
      "JavaScript (ES6+)",
      "Cross-Browser Testing"
    ]
  },
  {
    title: "AI & Workflow Automation",
    note: "Applied AI, workflows & API connectivity",
    level: "expanding",
    skills: [
      "n8n (Self-Hosted / Cloud)",
      "Make.com (Integromat)",
      "Zapier",
      "OpenAI API",
      "Anthropic Claude API",
      "Google Gemini API",
      "AI Prompt Engineering",
      "Lead Routing Automations",
      "Automated Document Processing"
    ]
  },
  {
    title: "Technical Architecture & Tools",
    note: "Used across client projects and custom experiments",
    level: "mixed",
    skills: [
      "REST APIs",
      "Webhooks",
      "JSON Data Structures",
      "Browser Extensions",
      "Git & GitHub",
      "WhatsApp Business API Hooks",
      "Payment Gateways (Stripe/PayPal)",
      "cPanel & Domain DNS",
      "Cloudflare CDN Setup"
    ]
  }
];

export const certificatesData: Certificate[] = [
  {
    id: "cert-ai",
    title: "Artificial Intelligence Using Python",
    issuer: "DigiSkills.pk",
    focus: "Applied AI with Python, foundational ML logic, and automation programming",
    image: "/assets/cert-ai.png",
    date: "Certified 2026",
    skillsGained: [
      "Python programming fundamentals",
      "AI principles & algorithmic logic",
      "API data ingestion & processing",
      "Data handling with Python libraries"
    ]
  },
  {
    id: "cert-wp",
    title: "WordPress Development",
    issuer: "DigiSkills.pk",
    focus: "End-to-end WordPress architecture, theme development, plugins & site security",
    image: "/assets/cert-wp.png",
    date: "Certified 2026",
    skillsGained: [
      "Complete WordPress CMS administration",
      "WooCommerce integration & store architecture",
      "Responsive theme customization",
      "Security hardening & performance optimization"
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Understand",
    subtitle: "Discovery & Strategy",
    text: "I first dig deep into your business model, target clientele, commercial goals, and what the website or automation actually needs to achieve — not just how it looks."
  },
  {
    n: "02",
    title: "Structure",
    subtitle: "Architecture & Wireframing",
    text: "I map out the page hierarchy, user navigation flow, conversion paths, and technical requirements before writing code to prevent wasted revisions."
  },
  {
    n: "03",
    title: "Build",
    subtitle: "Clean Engineering",
    text: "I develop the website using clean, modular standards, configuring WooCommerce, custom styles, WhatsApp triggers, and API workflows step by step."
  },
  {
    n: "04",
    title: "Refine",
    subtitle: "Testing & Speed Tuning",
    text: "I test across iOS, Android, macOS, and Windows. I audit responsive breakpoints, form submissions, page loading speeds, and visual polish."
  },
  {
    n: "05",
    title: "Launch",
    subtitle: "Handoff & Support",
    text: "The finished website is pushed live with domain DNS routing, SSL certificates, backup protocols, and a clear recorded walk-through for your team."
  }
];

export const corePrinciples: CorePrinciple[] = [
  {
    title: "Business-Focused",
    text: "I don't build websites just to make them pretty. Every section, headline, and button exists to bring in enquiries, sell inventory, or make your business simpler to operate.",
    icon: "Target"
  },
  {
    title: "Custom Approach",
    text: "I build around your genuine commercial requirements instead of shoehorning your business into an inflexible, bloated pre-made template.",
    icon: "Sparkles"
  },
  {
    title: "Technical Mindset",
    text: "My Computer Science background gives me a deeper appreciation of database queries, APIs, webhooks, security, and software workflows than standard visual builders.",
    icon: "Code2"
  },
  {
    title: "Clear Communication",
    text: "You always know what's being built, what milestone we are on, and what I need from you — with zero ghosting or having to chase for project updates.",
    icon: "MessageSquare"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    quote: "Abdul understood what we needed and built the website around our business instead of making it feel like a generic standard template. Communication was straightforward and the final result was exactly what we were looking for.",
    client: "Business Client",
    role: "Property & Services Firm Owner",
    project: "Custom WordPress Platform"
  },
  {
    id: "test-2",
    quote: "The whole process was simple and easy to understand. Abdul was able to take our requirements, turn them into a proper website, and handle the technical side without making things complicated.",
    client: "E-Commerce Client",
    role: "Managing Director",
    project: "Store & Brand Architecture"
  },
  {
    id: "test-3",
    quote: "Working with Abdul was a smooth experience. He paid attention to the details, listened carefully to our requirements, and delivered a professional website that represents our business much better online.",
    client: "Corporate Client",
    role: "Operations Lead",
    project: "Service Website & WhatsApp Leads"
  }
];

export const faqsData: FAQItem[] = [
  {
    category: "WordPress & Scope",
    question: "How long does a standard WordPress website take to build?",
    answer: "A focused 4–7 page business website typically takes 7 to 14 days from briefing to launch. Larger e-commerce WooCommerce stores with 50+ products or complex shipping rules usually require 2 to 3 weeks. I provide an exact milestone timeline upfront before kicking off."
  },
  {
    category: "WordPress & Scope",
    question: "Will I be able to update text and images myself later?",
    answer: "Yes, 100%. I organize WordPress so editing content, publishing new articles, or updating products is simple and requires zero coding. I also supply a quick video walk-through showing you how to update your site."
  },
  {
    category: "AI & Automation",
    question: "Can you connect AI or automations to my existing website?",
    answer: "Absolutely. If you already have a live WordPress site or external forms, we can connect webhooks to n8n or Make.com to automatically qualify inbound leads, route notifications to WhatsApp/Slack, or save data to your CRM and Google Sheets."
  },
  {
    category: "Process & Communication",
    question: "How do we collaborate and communicate during the project?",
    answer: "We primarily communicate via WhatsApp or email for rapid updates. I share staging preview links as pages are ready so you can test them live on your own mobile and desktop devices before anything goes to production."
  },
  {
    category: "Hosting & Technical",
    question: "Do I need to buy domain and hosting before contacting you?",
    answer: "Not necessarily! If you don't have hosting yet, I can guide you to reliable, cost-effective WordPress hosts (like Hostinger, SiteGround, or Cloudways) and handle the DNS connection and SSL certificates for you."
  },
  {
    category: "Pricing & Invoicing",
    question: "How are project payments handled?",
    answer: "Standard projects typically work on a 50% deposit to initiate architecture and 50% upon final approval right before domain launch. For larger custom automation workflows, we can split into milestone-based payments."
  }
];
