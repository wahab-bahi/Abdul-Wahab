import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle, Copy, Check, Send, ChevronDown, Clock, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { personalInfo, faqsData } from '../data/portfolioData';
import { useToast } from '../components/Toast';
import { MotionSection, AnimatedButton, HoverCard } from '../components/MotionWrappers';

export const ContactPage: React.FC = () => {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'WordPress Website',
    budget: '$500 - $1,000',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    showToast({ message: 'Email copied to clipboard!', type: 'success' });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast({ message: 'Please complete all required fields.', type: 'error' });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      showToast({ message: 'Enquiry prepared! You can also send directly via WhatsApp.', type: 'success' });
    }, 700);
  };

  const getWhatsappPrefill = () => {
    const text = `Hi Abdul Wahab, I'm reaching out through your portfolio contact form:%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Project Type:* ${formData.projectType}%0A*Budget:* ${formData.budget}%0A*Details:* ${formData.message}`;
    return `https://wa.me/923060649870?text=${text}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 lg:space-y-28">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          Start a Conversation
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          Let’s Build Something That Works.
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Need a high-performance WordPress website, WooCommerce shop, or want to explore AI automation workflows? Send your details below or message me directly.
        </p>
      </motion.section>

      {/* Main Grid: Direct Methods + Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct channels & Trust markers */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 sm:p-7 space-y-6 shadow-sm">
            <h2 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-50">
              Direct Contact
            </h2>

            {/* WhatsApp Tile with Hover */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Fastest Response (WhatsApp)
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Direct mobile chat for quick project scoping and preliminary quotes.
              </p>
              <div className="pt-2">
                <AnimatedButton
                  onClick={() => window.open(personalInfo.whatsappUrl, '_blank')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (+92 306 0649870)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </AnimatedButton>
              </div>
            </motion.div>

            {/* Email Tile */}
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Email Inbox
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                For detailed RFPs, requirements documents, and briefs.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-amber-500 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-amber-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Typical response time: Within 2–4 hours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Location: Pakistan (Remote Worldwide)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-zinc-50">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Your project enquiry has been logged. For instantaneous feedback, you can send this exact brief directly to my WhatsApp:
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <AnimatedButton
                    onClick={() => window.open(getWhatsappPrefill(), '_blank')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </AnimatedButton>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 rounded-xl text-xs font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-50">
                    Project Inquiry Brief
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                    Fill out the form below and I'll get back to you with timeline and scope recommendations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@business.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                    >
                      <option value="WordPress Website">WordPress Business Website</option>
                      <option value="WooCommerce Store">WooCommerce Online Store</option>
                      <option value="AI Automation Workflow">AI Automation & Integrations</option>
                      <option value="Custom Development & Fixes">Custom Development & Fixes</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                      Estimated Budget Tier
                    </label>
                    <select
                      value={formData.budget}
                      onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                    >
                      <option value="$300 - $600">$300 - $600 (Focused project)</option>
                      <option value="$600 - $1,200">$600 - $1,200 (Standard build)</option>
                      <option value="$1,200 - $2,500">$1,200 - $2,500 (Comprehensive store/custom)</option>
                      <option value="$2,500+">$2,500+ (Enterprise / Full Suite)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Project Overview & Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your business, current website (if any), desired pages, or specific automation needs..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <AnimatedButton
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-amber-500 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-amber-400 transition-colors shadow-sm disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Inquiry Brief</span>
                      </>
                    )}
                  </AnimatedButton>

                  <span className="text-xs text-zinc-400 font-medium">
                    No obligation · 100% confidential
                  </span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <MotionSection className="space-y-8 max-w-4xl mx-auto pt-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Common Inquiries
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Everything you need to know about working together on WordPress and AI automation projects.
          </p>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.005 }}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-500' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </MotionSection>
    </div>
  );
};
