import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, ArrowRight, Check, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { useNavigation } from '../context/NavigationContext';
import { MotionSection } from '../components/MotionWrappers';

type CategoryFilter = 'all' | 'client' | 'collaborative' | 'extension' | 'ai';

export const ProjectsPage: React.FC = () => {
  const { openProjectModal } = useNavigation();
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filteredProjects = projectsData.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'client') return p.taxonomy === 'Client Work';
    if (filter === 'collaborative') return p.taxonomy === 'Collaborative Project';
    if (filter === 'extension') return p.taxonomy === 'Personal Project';
    if (filter === 'ai') return p.taxonomy === 'Experimental / Learning Project';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      {/* Header with Entrance Animation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto space-y-4"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          Portfolio Archive
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          Selected Projects & Case Studies
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          From full WordPress business sites with WhatsApp lead capture to browser extensions and AI automation workflows. Click any project to open the case study and high-resolution gallery.
        </p>

        {/* Filter Bar with Animated Active Tab */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl max-w-fit mx-auto border border-zinc-200/80 dark:border-zinc-800">
          {[
            { id: 'all', label: 'All Projects', count: 4 },
            { id: 'client', label: 'Client Work', count: 1 },
            { id: 'collaborative', label: 'Collaborative', count: 1 },
            { id: 'extension', label: 'Browser Extensions', count: 1 },
            { id: 'ai', label: 'AI & Automation', count: 1 },
          ].map(tab => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as CategoryFilter)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-zinc-900 dark:text-zinc-100 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-lg shadow-xs -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{tab.label}</span>
                <span className="ml-1.5 text-[11px] opacity-60 font-mono">({tab.count})</span>
              </button>
            );
          })}
        </div>
      </motion.section>

      {/* Projects Grid with Stagger & PopLayout Transitions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 overflow-hidden shadow-sm hover:border-amber-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Media Container with Image Zoom & Overlay */}
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
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/95 text-zinc-900 shadow-xl backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Case Study & Gallery</span>
                    </span>
                  </div>

                  {/* Taxonomy Badge */}
                  <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-[11px] font-medium border border-white/10 shadow-sm">
                    {project.taxonomy}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                      <span>{project.category}</span>
                      <span className="font-mono font-medium">{project.index}</span>
                    </div>

                    <h2
                      onClick={() => openProjectModal(project.id)}
                      className="font-display font-bold text-2xl text-zinc-900 dark:text-zinc-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  {project.built && project.built.length > 0 && (
                    <div className="pt-2">
                      <ul className="space-y-1.5">
                        {project.built.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80">
                <button
                  onClick={() => openProjectModal(project.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors group/link"
                >
                  <span>Detailed Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </button>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:bg-amber-500/20 border border-amber-500/20 transition-colors"
                  >
                    <span>Live Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
};
