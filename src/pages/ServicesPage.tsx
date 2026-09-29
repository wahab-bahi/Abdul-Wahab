import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, ShoppingBag, Cpu, Check, ArrowRight, MessageCircle, Clock, Users, Sparkles, CheckCircle2, Calculator, Send } from 'lucide-react';
import { servicesData, processSteps, personalInfo } from '../data/portfolioData';
import { useNavigation } from '../context/NavigationContext';
import { MotionSection, StaggerContainer, StaggerItem, HoverCard, AnimatedButton } from '../components/MotionWrappers';
import { ServicesFAQ } from '../components/ServicesFAQ';

export const ServicesPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  // Scope Estimator state
  const [selectedService, setSelectedService] = useState<'wordpress' | 'woocommerce' | 'automation'>('wordpress');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Responsive Mobile First',
    'WhatsApp Direct Integration',
    'SEO & Speed Optimization'
  ]);
  const [timeline, setTimeline] = useState<'standard' | 'express'>('standard');

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const getEstimatedDays = () => {
    let baseDays = selectedService === 'wordpress' ? 10 : selectedService === 'woocommerce' ? 16 : 6;
    baseDays += Math.round(selectedFeatures.length * 0.8);
    if (timeline === 'express') baseDays = Math.max(3, Math.round(baseDays * 0.65));
    return baseDays;
  };

  const generateWhatsappSpec = () => {
    const serviceName =
      selectedService === 'wordpress'
        ? 'WordPress Business Website'
        : selectedService === 'woocommerce'
        ? 'WooCommerce Store'
        : 'AI Automation Workflow';

    const text = `Hi Abdul Wahab, I used your portfolio project calculator and would like to discuss a project:%0A%0A*Service:* ${serviceName}%0A*Timeline:* ${timeline === 'express' ? 'Express priority' : 'Standard'} (~${getEstimatedDays()} days)%0A*Features Needed:*%0A${selectedFeatures.map(f => `- ${f}`).join('%0A')}%0A%0ALet's discuss availability and next steps!`;

    return `https://wa.me/923060649870?text=${text}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 lg:space-y-28">
      {/* Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          Services & Offerings
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight text-balance">
          Commercial Web Development & Intelligent Automation.
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I specialize in building high-conversion WordPress websites and connecting modern AI tools to streamline business operations.
        </p>
      </motion.section>

      {/* Services Cards with Stagger & Card Lift */}
      <MotionSection>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {servicesData.map((service, idx) => {
            const Icon =
              service.id === 'wordpress' ? Layout : service.id === 'woocommerce' ? ShoppingBag : Cpu;

            return (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-7 sm:p-8 shadow-sm flex flex-col justify-between space-y-6 hover:border-amber-500/50 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                        className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-zinc-950 transition-colors"
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>{service.estimatedDelivery}</span>
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-zinc-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {service.summary}
                      </p>
                    </div>

                    {/* Deliverables List */}
                    <div className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        What's Included
                      </span>
                      <ul className="space-y-2.5">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.idealFor && (
                      <div className="pt-2">
                        <span className="text-xs font-semibold text-zinc-400 block mb-1">
                          Ideal For
                        </span>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                          {service.idealFor}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                    <AnimatedButton
                      onClick={() => navigateTo('contact')}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-amber-500 hover:bg-zinc-800 dark:hover:bg-amber-400 text-white dark:text-zinc-950 transition-colors shadow-sm"
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </AnimatedButton>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </MotionSection>

      {/* 5-Step Process Section with Stagger Reveal */}
      <MotionSection className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Work Method
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            A Transparent 5-Step Delivery Process
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Every project follows a structured roadmap to ensure no surprises, zero delays, and guaranteed satisfaction.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-4" staggerDelay={0.08}>
          {processSteps.map(step => (
            <StaggerItem key={step.n}>
              <HoverCard className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 space-y-3 relative shadow-sm hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    {step.n}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-medium">Phase {step.n}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-50">
                    {step.title}
                  </h3>
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400 block mb-2">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </MotionSection>

      {/* Interactive Project Scope & Cost Estimator */}
      <MotionSection className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="max-w-3xl mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Project Scope & Spec Estimator
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Select your requirements below to determine estimated turnaround time and generate a pre-formatted inquiry ready to send directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Select Service */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                1. Select Core Service
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'wordpress', label: 'WordPress Website', desc: 'Custom business site' },
                  { id: 'woocommerce', label: 'WooCommerce Store', desc: 'Complete e-commerce' },
                  { id: 'automation', label: 'AI & Automation', desc: 'n8n, Make & APIs' },
                ].map(item => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(item.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedService === item.id
                        ? 'border-amber-500 bg-amber-500/10 text-zinc-900 dark:text-zinc-50 font-medium ring-1 ring-amber-500 shadow-sm'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300'
                    }`}
                  >
                    <span className="block text-sm font-semibold">{item.label}</span>
                    <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{item.desc}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Step 2: Feature Add-ons */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                2. Select Features & Modules
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Responsive Mobile First',
                  'WhatsApp Direct Integration',
                  'SEO & Speed Optimization',
                  'Custom Inquiry / Booking Form',
                  'Payment Gateway (Stripe/PayPal)',
                  'AI Chatbot / FAQ Assistant',
                  'n8n / Make Webhook Lead Sync',
                  'Multi-Language Support',
                  'Blog & Article Publishing CMS',
                  'Ongoing Maintenance & Backups'
                ].map(feat => {
                  const isChecked = selectedFeatures.includes(feat);
                  return (
                    <motion.button
                      key={feat}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleFeature(feat)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs text-left transition-colors ${
                        isChecked
                          ? 'border-amber-500/80 bg-amber-500/10 text-zinc-900 dark:text-zinc-100 font-medium shadow-xs'
                          : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-colors ${
                          isChecked
                            ? 'bg-amber-500 border-amber-500 text-zinc-950'
                            : 'border-zinc-300 dark:border-zinc-700'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-3" />}
                      </div>
                      <span>{feat}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Priority */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                3. Delivery Speed
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setTimeline('standard')}
                  className={`px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
                    timeline === 'standard'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold shadow-xs'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  Standard Delivery
                </button>
                <button
                  onClick={() => setTimeline('express')}
                  className={`px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
                    timeline === 'express'
                      ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold shadow-xs'
                      : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  Priority Express (~35% Faster)
                </button>
              </div>
            </div>
          </div>

          {/* Result Card with Animated Days Counter */}
          <div className="lg:col-span-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 space-y-6 shadow-md">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Estimated Timeline
              </span>
              <div className="font-display font-bold text-3xl text-zinc-900 dark:text-zinc-50 mt-1 tabular-nums flex items-baseline gap-1">
                <span>~</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={getEstimatedDays()}
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {getEstimatedDays()}
                  </motion.span>
                </AnimatePresence>
                <span>Business Days</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Based on {selectedFeatures.length} selected modules and {timeline} turnaround.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
                Selected Scope Summary
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-1.5 font-medium text-zinc-900 dark:text-zinc-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>
                    {selectedService === 'wordpress'
                      ? 'Custom WordPress Build'
                      : selectedService === 'woocommerce'
                      ? 'WooCommerce Online Store'
                      : 'AI Automation Architecture'}
                  </span>
                </li>
                {selectedFeatures.slice(0, 4).map((f, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{f}</span>
                  </li>
                ))}
                {selectedFeatures.length > 4 && (
                  <li className="text-[11px] text-zinc-400 italic">
                    +{selectedFeatures.length - 4} additional modules
                  </li>
                )}
              </ul>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <AnimatedButton
                onClick={() => window.open(generateWhatsappSpec(), '_blank')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire With This Spec on WhatsApp</span>
              </AnimatedButton>

              <button
                onClick={() => navigateTo('contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <span>Or Send Via Email Form</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Interactive Services & Automation FAQ Accordion */}
      <MotionSection>
        <ServicesFAQ />
      </MotionSection>
    </div>
  );
};
