import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, X, MessageCircle, HelpCircle, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { AnimatedButton } from './MotionWrappers';

export interface ServiceFAQItem {
  id: string;
  category: 'wordpress' | 'ai' | 'process';
  categoryLabel: string;
  tag: string;
  question: string;
  answer: string;
  highlights?: string[];
}

export const SERVICES_FAQS: ServiceFAQItem[] = [
  {
    id: 'wp-custom-vs-builder',
    category: 'wordpress',
    categoryLabel: 'WordPress & WooCommerce',
    tag: 'Architecture',
    question: 'Do you build custom WordPress sites or use drag-and-drop templates?',
    answer: 'I focus on building custom, lightweight WordPress themes and tailored layouts that match your exact business requirements. Unlike bulky pre-made templates bundled with 40+ unneeded plugins, a clean custom build loads faster, achieves 90+ Google PageSpeed scores, and doesn’t break when WordPress updates.',
    highlights: ['Lightweight custom structure', 'No template bloat', 'Clean block / theme setup', 'Future-proof updates']
  },
  {
    id: 'wp-ecommerce-payments',
    category: 'wordpress',
    categoryLabel: 'WordPress & WooCommerce',
    tag: 'WooCommerce',
    question: 'Can my WooCommerce store accept international payments like Stripe and PayPal?',
    answer: 'Yes, absolutely. I configure complete payment gateway integrations including Stripe, PayPal, local bank transfers, Apple Pay / Google Pay, and Cash on Delivery (COD) based on where your customers are located. I also handle webhook configurations to ensure orders and transaction statuses sync reliably.',
    highlights: ['Stripe & PayPal setup', 'Currency switching & tax rules', 'One-page checkout optimization', 'Automated receipt emails']
  },
  {
    id: 'wp-client-management',
    category: 'wordpress',
    categoryLabel: 'WordPress & WooCommerce',
    tag: 'CMS Ease',
    question: 'How easy is it for my non-technical team to update products, blogs, and text?',
    answer: 'Very easy. I structure WordPress using native Gutenberg blocks or custom fields so anyone on your team can edit headlines, publish blog articles, swap images, or add new products without touching a single line of code. I also provide a personalized 10-minute video walk-through showing you exactly how to manage your website.',
    highlights: ['Intuitive backend UI', 'No coding required', 'Custom walk-through video', 'Role-based editor access']
  },
  {
    id: 'wp-speed-seo',
    category: 'wordpress',
    categoryLabel: 'WordPress & WooCommerce',
    tag: 'Performance & SEO',
    question: 'Is search engine optimization (SEO) and speed tuning included with the build?',
    answer: 'Yes. Every website I build includes semantic HTML5 markup, structured heading hierarchies (H1-H6), meta tags, XML sitemaps, image compression (WebP), browser caching, and Google Search Console readiness. You launch with a fast, search-ready foundation.',
    highlights: ['Core Web Vitals tuning', 'Semantic HTML5 structure', 'WebP image compression', 'Mobile-first optimization']
  },
  {
    id: 'ai-how-it-connects',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    tag: 'AI Integration',
    question: 'How exactly does an AI workflow connect to my WordPress website?',
    answer: 'When a visitor completes a form, requests a quote, or places an order on your site, WordPress dispatches a secure Webhook payload. An automation engine like n8n or Make.com catches this payload in real time, routes the data to an LLM API (such as Google Gemini, OpenAI, or Claude) to classify the lead, summarize details, or draft a response, and then immediately pushes an alert to your WhatsApp, Slack, or CRM.',
    highlights: ['Instant webhook triggers', 'Gemini / Claude / OpenAI API', 'Zero manual copy-pasting', 'Fully automated background task']
  },
  {
    id: 'ai-tools-comparison',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    tag: 'n8n vs Make vs Zapier',
    question: 'Which automation tool do you recommend: n8n, Make.com, or Zapier?',
    answer: 'For businesses wanting maximum privacy and lowest running costs, self-hosted n8n is unbeatable because there are no per-task fees. For teams wanting quick cloud setups with minimal server maintenance, Make.com offers great pricing and visual debugging. I evaluate your expected monthly volume and recommend the most cost-effective tool.',
    highlights: ['n8n for unlimited executions', 'Make.com for rapid visual logic', 'Cost-optimized recommendations', 'Self-hosted or cloud options']
  },
  {
    id: 'ai-whatsapp-lead-alerts',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    tag: 'Lead Triage',
    question: 'Can you notify me directly on WhatsApp when a hot lead submits an enquiry?',
    answer: 'Yes! That is one of the highest ROI automations I set up. When a potential client submits an inquiry form, an AI step can instantly analyze the budget, urgency, and requirement, score the lead, and dispatch a formatted alert straight to your WhatsApp with a 1-click reply link.',
    highlights: ['Sub-second WhatsApp dispatch', 'AI priority scoring', 'Direct click-to-chat response', 'CRM / Google Sheet logging']
  },
  {
    id: 'ai-api-costs',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    tag: 'Running Costs',
    question: 'Are there heavy recurring API costs for using OpenAI, Claude, or Gemini?',
    answer: 'No. Modern AI APIs (especially models like Gemini 1.5 Flash or Claude 3.5 Haiku) are exceptionally inexpensive for business text tasks. Processing 1,000 incoming leads typically costs less than $0.50 to $2.00 in API tokens. You pay only for what you consume directly to the API provider.',
    highlights: ['Pennies per thousands of leads', 'Transparent direct billing', 'Token optimization prompts', 'No hidden markups']
  },
  {
    id: 'process-onboarding-needs',
    category: 'process',
    categoryLabel: 'Process & Maintenance',
    tag: 'Getting Started',
    question: 'What do you need from me before we can start building?',
    answer: 'To kick off, I need a brief outline of your goals, any branding assets you have (logo, brand colors, fonts), reference websites you like, and your content (text/images, or I can help structure placeholders). If you don’t have hosting or a domain yet, I can guide you on what to purchase.',
    highlights: ['Goal brief & target audience', 'Brand colors & logo', 'Domain & hosting access', 'Smooth onboarding guidance']
  },
  {
    id: 'process-post-launch-support',
    category: 'process',
    categoryLabel: 'Process & Maintenance',
    tag: 'Warranty & Support',
    question: 'Do you offer support and maintenance after the website is launched?',
    answer: 'Yes. Every project includes a 14-day post-launch warranty period where I monitor the site, fix any unforeseen bugs, and ensure forms and integrations are executing smoothly. Beyond that, I offer ongoing maintenance retainers covering security updates, plugin patches, daily cloud backups, and workflow monitoring.',
    highlights: ['14-day warranty included', 'Automated cloud backups', 'Ongoing security patches', 'Priority workflow support']
  }
];

export const ServicesFAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'wordpress' | 'ai' | 'process'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['wp-custom-vs-builder', 'ai-how-it-connects']);

  const toggleItem = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map(f => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const filteredFaqs = useMemo(() => {
    return SERVICES_FAQS.filter(item => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.highlights?.some(h => h.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          Got Questions?
        </span>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Services & Automation FAQ
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Clear, straightforward answers about custom WordPress builds, WooCommerce stores, and AI automation integrations.
        </p>
      </div>

      {/* Interactive Controls Bar: Category Tabs & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200/80 dark:border-zinc-800">
          {[
            { id: 'all', label: 'All FAQs' },
            { id: 'wordpress', label: 'WordPress & WooCommerce' },
            { id: 'ai', label: 'AI & Automation' },
            { id: 'process', label: 'Process & Support' },
          ].map(tab => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-zinc-950 dark:text-white font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="faqCategoryPill"
                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-lg shadow-xs -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search input & Expand/Collapse toggle */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-7 py-2 rounded-xl text-xs bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <button
            onClick={openIds.length > 0 ? collapseAll : expandAll}
            className="px-3 py-2 rounded-xl text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors whitespace-nowrap"
          >
            {openIds.length > 0 ? 'Collapse All' : 'Expand All'}
          </button>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 p-6 space-y-2">
            <HelpCircle className="w-8 h-8 text-zinc-400 mx-auto" />
            <p className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
              No matching questions found
            </p>
            <p className="text-xs text-zinc-500">
              Try searching for something else like "WhatsApp", "WooCommerce", or "n8n".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-amber-600 dark:text-amber-400 underline font-medium pt-2"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredFaqs.map(item => {
            const isOpen = openIds.includes(item.id);

            return (
              <motion.div
                key={item.id}
                layout="position"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-amber-500/40 bg-white dark:bg-zinc-900/90 shadow-sm'
                    : 'border-zinc-200 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl"
                >
                  <div className="space-y-1.5 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400">
                        {item.tag}
                      </span>
                      <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">·</span>
                      <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-base sm:text-lg text-zinc-900 dark:text-zinc-50 leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 rotate-180'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/80 space-y-4">
                        <p>{item.answer}</p>

                        {/* Bullet Highlights */}
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="pt-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-2">
                              Key Takeaways:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {item.highlights.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Custom Inquiry Callout */}
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-display font-bold text-base text-zinc-900 dark:text-zinc-100">
            Have a project requirement not covered here?
          </h4>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Every business is unique. Send your custom questions directly and get a quick reply.
          </p>
        </div>

        <AnimatedButton
          onClick={() =>
            window.open(
              'https://wa.me/923060649870?text=Hi%20Abdul%20Wahab%2C%20I%20have%20a%20question%20about%20your%20services...',
              '_blank'
            )
          }
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Ask Abdul Wahab on WhatsApp</span>
        </AnimatedButton>
      </div>
    </div>
  );
};
