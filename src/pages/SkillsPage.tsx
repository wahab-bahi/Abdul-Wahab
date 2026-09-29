import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Layout, Layers, CheckCircle2, Play, RefreshCw, Zap, Server, MessageCircle, FileJson, ArrowRight, Award } from 'lucide-react';
import { skillsCategories, certificatesData } from '../data/portfolioData';
import { useNavigation } from '../context/NavigationContext';
import { MotionSection, StaggerContainer, StaggerItem, HoverCard, AnimatedButton } from '../components/MotionWrappers';

export const SkillsPage: React.FC = () => {
  const { openCertModal, navigateTo } = useNavigation();

  // Workflow Simulator State
  const [pipelineActive, setPipelineActive] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const runSimulation = () => {
    if (pipelineActive) return;
    setPipelineActive(true);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 950);
    setTimeout(() => setActiveStep(3), 2100);
    setTimeout(() => setActiveStep(4), 3300);
    setTimeout(() => {
      setPipelineActive(false);
      setActiveStep(0);
    }, 4600);
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
          Technical Stack
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          Tools, Technologies & Applied Skills
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          A disciplined synthesis of modern web engineering, CMS mastery, and next-generation AI automation engines.
        </p>
      </motion.section>

      {/* Interactive Architecture Simulator with Motion Pulse */}
      <MotionSection className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Architecture In Action
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
              How WordPress Connects to AI Workflows
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Click the simulation button below to visualize how webhooks and AI automate client inquiries end-to-end.
            </p>
          </div>

          <AnimatedButton
            onClick={runSimulation}
            disabled={pipelineActive}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              pipelineActive
                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                : 'bg-zinc-900 dark:bg-amber-500 hover:bg-zinc-800 dark:hover:bg-amber-400 text-white dark:text-zinc-950 shadow-sm'
            }`}
          >
            {pipelineActive ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Simulating Payload...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Simulate Automation Pipeline</span>
              </>
            )}
          </AnimatedButton>
        </div>

        {/* Pipeline Nodes with Interactive Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 relative">
          {[
            {
              num: 1,
              title: 'WordPress / Web Form',
              desc: 'Prospect submits project scope or inquiry on your site.',
              tech: 'WP Form / Webhook Hook',
              icon: Layout
            },
            {
              num: 2,
              title: 'Automation Engine',
              desc: 'n8n or Make.com intercepts payload and structures JSON.',
              tech: 'n8n / Make / Zapier',
              icon: Zap
            },
            {
              num: 3,
              title: 'AI Intelligence Step',
              desc: 'LLM evaluates budget, urgency & drafts customized proposal.',
              tech: 'Gemini / OpenAI / Claude',
              icon: Cpu
            },
            {
              num: 4,
              title: 'Instant Dispatch',
              desc: 'Lead alert pushed to WhatsApp + CRM record updated.',
              tech: 'WhatsApp API / Google Sheets',
              icon: MessageCircle
            }
          ].map(node => {
            const isHighlighted = activeStep === node.num;
            const Icon = node.icon;

            return (
              <motion.div
                key={node.num}
                animate={{
                  scale: isHighlighted ? 1.03 : 1,
                  y: isHighlighted ? -4 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl border p-5 transition-colors duration-300 ${
                  isHighlighted
                    ? 'border-amber-500 bg-amber-500/10 ring-2 ring-amber-500/30 dark:bg-amber-500/15 shadow-xl'
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isHighlighted
                        ? 'bg-amber-500 text-zinc-950 font-bold'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400">
                    Step 0{node.num}
                  </span>
                </div>

                <h3 className="font-display font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-1">
                  {node.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                  {node.desc}
                </p>

                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {node.tech}
                </span>

                {isHighlighted && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </MotionSection>

      {/* Detailed Skill Categories with Stagger Cards */}
      <MotionSection>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {skillsCategories.map((category, idx) => (
            <StaggerItem key={idx}>
              <HoverCard className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-7 space-y-6 shadow-sm flex flex-col justify-between hover:border-amber-500/40 transition-colors">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      {category.note}
                    </span>
                    <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-50 mt-1">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.15 }}
                        className="text-xs sm:text-sm px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 font-medium cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <span>{category.skills.length} verified competencies</span>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </MotionSection>

      {/* Certifications Showcase */}
      <MotionSection className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Verified Credentials
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mt-1">
              DigiSkills.pk Certifications
            </h2>
          </div>
          <button
            onClick={() => navigateTo('about')}
            className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1 group"
          >
            <span>Read full educational profile</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {certificatesData.map(cert => (
            <StaggerItem key={cert.id}>
              <HoverCard
                onClick={() => openCertModal(cert.id)}
                className="group cursor-pointer rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 flex items-center gap-4 hover:border-amber-500/50 hover:shadow-lg transition-all"
              >
                <div className="w-20 h-16 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-950 shrink-0 border border-zinc-200 dark:border-zinc-800">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span>{cert.issuer}</span>
                    <span>·</span>
                    <span className="font-mono">{cert.date}</span>
                  </div>
                  <h4 className="font-display font-bold text-base text-zinc-900 dark:text-zinc-100 truncate group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 truncate">
                    {cert.focus}
                  </p>
                </div>

                <Award className="w-5 h-5 text-amber-500 ml-auto shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </MotionSection>
    </div>
  );
};
