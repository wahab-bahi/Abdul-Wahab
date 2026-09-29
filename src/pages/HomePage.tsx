import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, ExternalLink, Sparkles, CheckCircle2, ChevronRight, Layers, Layout, ShoppingBag, Cpu, ArrowUpRight, Code, Shield } from 'lucide-react';
import { personalInfo, projectsData, servicesData, corePrinciples, testimonialsData } from '../data/portfolioData';
import { useNavigation } from '../context/NavigationContext';
import { MotionSection, StaggerContainer, StaggerItem, HoverCard, AnimatedButton, MarqueeRibbon } from '../components/MotionWrappers';

const MARQUEE_ITEMS = [
  'WordPress CMS',
  'WooCommerce Architecture',
  'n8n Workflows',
  'Make.com Pipelines',
  'Zapier Integrations',
  'OpenAI & Claude API',
  'REST APIs & Webhooks',
  'Custom PHP & Themes',
  'WhatsApp Direct Lead Sync',
  'Core Web Vitals Optimization',
];

export const HomePage: React.FC = () => {
  const { navigateTo, openProjectModal } = useNavigation();

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-14 lg:pt-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 backdrop-blur-xs"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span>WordPress Developer · AI Automation · AI Integrations</span>
              </motion.div>

              {/* Primary Headline */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.08] text-balance">
                I Build WordPress Sites That{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 dark:from-amber-400 dark:via-amber-300 dark:to-amber-500">
                  Actually Bring In Business.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full origin-left opacity-70"
                  />
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                {personalInfo.subtext}
              </p>

              {/* Action Buttons with Micro-interactions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <AnimatedButton
                  onClick={() => navigateTo('projects')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-zinc-900 dark:bg-amber-500 text-zinc-50 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-amber-400 transition-colors shadow-md group"
                >
                  <span>Explore Selected Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </AnimatedButton>

                <motion.a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.025, transition: { duration: 0.18 } }}
                  whileTap={{ scale: 0.975 }}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>Chat on WhatsApp</span>
                </motion.a>

                <motion.button
                  onClick={() => navigateTo('contact')}
                  whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <span>Book a Discussion</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Quick Tabular Stats Grid */}
              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {personalInfo.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 + idx * 0.08 }}
                    className="space-y-1 group"
                  >
                    <span className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tabular-nums group-hover:text-amber-500 transition-colors">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Photo & Visual Anchor with Interactive Tilt */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-sm lg:max-w-none group">
                {/* Ambient glow with subtle breath */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-emerald-500/15 to-transparent rounded-3xl blur-2xl -z-10"
                />

                {/* Profile Card */}
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-3"
                >
                  <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                    <img
                      src={personalInfo.avatar}
                      alt="Abdul Wahab - WordPress & AI Automation Developer"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter contrast-105 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-display font-bold text-lg leading-tight">
                            {personalInfo.name}
                          </p>
                          <p className="text-xs text-zinc-300">
                            Computer Science Student & Developer
                          </p>
                        </div>
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 backdrop-blur-sm shadow-sm flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Available</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Trust markers under card */}
                  <div className="pt-3 px-2 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Pakistan · Remote Worldwide
                    </span>
                    <button
                      onClick={() => navigateTo('about')}
                      className="text-amber-600 dark:text-amber-400 hover:underline font-medium inline-flex items-center gap-0.5 group/btn"
                    >
                      <span>Read bio</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Animated Marquee Ribbon */}
      <MarqueeRibbon items={MARQUEE_ITEMS} speed={28} />

      {/* Services Overview Section with Stagger Reveal */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Services & Capabilities
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
              What I Build For Businesses
            </h2>
          </div>
          <button
            onClick={() => navigateTo('services')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors group"
          >
            <span>Explore all services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {servicesData.map(service => {
            const IconComponent =
              service.id === 'wordpress' ? Layout : service.id === 'woocommerce' ? ShoppingBag : Cpu;

            return (
              <StaggerItem key={service.id}>
                <HoverCard className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-7 shadow-sm hover:border-amber-500/50 hover:shadow-xl transition-colors flex flex-col justify-between group">
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.4 }}
                      className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors"
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.div>
                    <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {service.summary}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                      {service.items.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <AnimatedButton
                      onClick={() => navigateTo('services')}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-zinc-800 dark:text-zinc-200 transition-all"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </AnimatedButton>
                  </div>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </MotionSection>

      {/* Featured Works Section with Enhanced Card Hover & Media Zoom */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Portfolio
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
              Selected Projects & Case Studies
            </h2>
          </div>
          <button
            onClick={() => navigateTo('projects')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors group"
          >
            <span>View all 4 projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.12}>
          {projectsData.slice(0, 2).map(project => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden shadow-sm hover:shadow-2xl hover:border-amber-500/50 transition-all duration-300 flex flex-col"
              >
                {/* Media Container with Zoom */}
                <div
                  onClick={() => openProjectModal(project.id)}
                  className="cursor-pointer relative aspect-16/10 overflow-hidden bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800"
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient & Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-zinc-950 shadow-lg">
                      <span>View Gallery & Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Taxonomy Badge */}
                  <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-[11px] font-medium border border-white/10">
                    {project.taxonomy}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                      <span>{project.category}</span>
                      <span className="font-mono font-medium">{project.index}</span>
                    </div>

                    <h3
                      onClick={() => openProjectModal(project.id)}
                      className="font-display font-bold text-xl sm:text-2xl text-zinc-900 dark:text-zinc-50 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs px-2 py-0.5 text-zinc-500 font-mono">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                      <button
                        onClick={() => openProjectModal(project.id)}
                        className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 inline-flex items-center gap-1 group/link"
                      >
                        <span>Read Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </button>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
                        >
                          <span>Visit Live</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </MotionSection>

      {/* Why Choose Me / Core Principles */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/40 p-8 sm:p-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Why Work With Me
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
              Building Websites With Commercial Purpose
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
              Most websites fail because they are treated as static digital brochures. I build web systems designed to convert visitors and streamline daily operations.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {corePrinciples.map((principle, idx) => (
              <StaggerItem key={idx}>
                <HoverCard className="h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 space-y-3 shadow-sm hover:border-amber-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <span className="font-mono text-sm font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-zinc-900 dark:text-zinc-50">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {principle.text}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </MotionSection>

      {/* Testimonials */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Client Feedback
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
            Trusted by Businesses & Founders
          </h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.09}>
          {testimonialsData.map(test => (
            <StaggerItem key={test.id}>
              <HoverCard className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6 hover:border-amber-500/30 transition-colors">
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  "{test.quote}"
                </p>
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                    {test.client}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {test.role} · {test.project}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </MotionSection>

      {/* Project Discussion Banner with Micro-interaction */}
      <MotionSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-zinc-900 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-800 text-white p-8 sm:p-12 lg:p-16 border border-zinc-800 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Orb */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Have a Project in Mind?
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold leading-tight">
              Let's Build a Website That Grows Your Business.
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Whether you need a full WordPress website, WooCommerce shop, or want to connect AI automation workflows to eliminate manual work, let's talk.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <AnimatedButton
                onClick={() => window.open(personalInfo.whatsappUrl, '_blank')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </AnimatedButton>
              <AnimatedButton
                onClick={() => navigateTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-zinc-700 hover:bg-zinc-800 text-zinc-200 transition-colors"
              >
                <span>Send Detailed Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </AnimatedButton>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
};
