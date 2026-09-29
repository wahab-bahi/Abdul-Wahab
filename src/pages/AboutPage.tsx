import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, CheckCircle2, ArrowRight, ExternalLink, Code2, Server, MessageSquare, ShieldCheck, Terminal } from 'lucide-react';
import { personalInfo, certificatesData, corePrinciples } from '../data/portfolioData';
import { useNavigation } from '../context/NavigationContext';
import { MotionSection, StaggerContainer, StaggerItem, HoverCard, AnimatedButton } from '../components/MotionWrappers';

export const AboutPage: React.FC = () => {
  const { navigateTo, openCertModal } = useNavigation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 lg:space-y-24">
      {/* Intro Editorial Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Portrait & Key Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950">
              <img
                src={personalInfo.avatar}
                alt="Abdul Wahab portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-50">
                {personalInfo.name}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                WordPress & WooCommerce Developer · AI Automation Specialist
              </p>
              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Education</span>
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">Computer Science Student</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Core Focus</span>
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">WordPress & WooCommerce</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Also Building</span>
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">AI Automations, n8n, APIs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Location</span>
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">Pakistan · Remote Worldwide</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick contact CTA */}
          <motion.div
            whileHover={{ y: -2 }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-5 space-y-3"
          >
            <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-zinc-100">
              Need a Website or Automation?
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              I collaborate directly with founders and businesses. Let's discuss your requirements.
            </p>
            <AnimatedButton
              onClick={() => navigateTo('contact')}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-amber-500 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-amber-400 transition-colors shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </AnimatedButton>
          </motion.div>
        </motion.div>

        {/* Right Column: Bio Narrative & Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Personal Story & Mindset
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mt-1 leading-tight">
              A Developer Who Builds for Real Business Results.
            </h1>
          </div>

          <div className="space-y-5 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              I’m <strong>Abdul Wahab</strong>, a WordPress Developer focused on building websites that are meant to do something tangible — bring in enquiries, sell products, simplify a process, or make a business easier to run.
            </p>
            <p>
              I work primarily with WordPress and WooCommerce, creating websites around the actual commercial needs of the business instead of simply forcing a client into an inflexible, bloated template that breaks down after launch.
            </p>
            <p>
              Alongside WordPress development, I work with AI automation, APIs, and AI integrations — using tools such as <strong>n8n, Make.com, Zapier, OpenAI, Claude, Gemini, webhooks</strong>, and custom third-party APIs to connect websites directly to real automated business workflows.
            </p>
            <p>
              I'm also a <strong>Computer Science student</strong>. That technical grounding keeps me constantly curious, analytical, and disciplined about how software, data structures, and integrations actually function under the hood.
            </p>
          </div>

          {/* Computer Science Advantage callout */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 space-y-3"
          >
            <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400 font-semibold text-sm">
              <Code2 className="w-4 h-4" />
              <span>The Computer Science Mindset</span>
            </div>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              My Computer Science background helps me think beyond visual design. I understand database indexing, clean API request cycles, webhooks, asynchronous workflows, and script optimization. That means your website is fast, secure, and ready to scale.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Verified DigiSkills Certificates with Stagger Entrance */}
      <MotionSection className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Formal Credentials
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
            Certifications & Training
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Verified training completed through DigiSkills.pk (Government of Pakistan / Ignite ICT initiative). Click any certificate to inspect full credentials.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
          {certificatesData.map(cert => (
            <StaggerItem key={cert.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                onClick={() => openCertModal(cert.id)}
                className="group cursor-pointer rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-5 sm:p-6 shadow-sm hover:border-amber-500/50 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative aspect-16/10 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/90 text-zinc-900 backdrop-blur-sm shadow-md">
                        Inspect Certificate
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                      <span>{cert.issuer}</span>
                      <span className="font-mono">{cert.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {cert.focus}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      Key Topics
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsGained.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
                  <span>View Full-Size Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </MotionSection>

      {/* Operating Principles */}
      <MotionSection className="space-y-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Work Philosophy
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
            How I Approach Every Engagement
          </h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {corePrinciples.map((principle, idx) => (
            <StaggerItem key={idx}>
              <HoverCard className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 space-y-3 shadow-sm hover:border-amber-500/40 transition-colors">
                <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
                  0{idx + 1}
                </span>
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
      </MotionSection>
    </div>
  );
};
