import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Check, Layers, Image as ImageIcon } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { projectsData } from '../data/portfolioData';

export const ProjectModal: React.FC = () => {
  const { selectedProjectId, closeProjectModal } = useNavigation();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = projectsData.find(p => p.id === selectedProjectId);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedProjectId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeProjectModal();
      }
    };
    if (selectedProjectId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProjectId, closeProjectModal]);

  if (!project) return null;

  const gallery = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ src: project.image, label: 'Main View', alt: project.imageAlt }];

  const currentMedia = gallery[activeImageIndex] || gallery[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProjectModal}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 shrink-0">
            <div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <span>{project.taxonomy}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{project.index}</span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-900 dark:bg-amber-500 text-zinc-50 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-amber-400 transition-colors"
                >
                  <span>Visit Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={closeProjectModal}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto p-6 space-y-6">
            {/* Gallery Media Viewer */}
            <div className="space-y-3">
              <div className="relative aspect-16/9 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center shadow-inner">
                <img
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              {/* Gallery Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {gallery.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative px-3 py-1.5 rounded-lg text-xs font-medium border whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                        activeImageIndex === idx
                          ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold'
                          : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                      }`}
                    >
                      <ImageIcon className="w-3 h-3" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                  {project.gallerySource && (
                    <span className="text-[11px] text-zinc-400 ml-auto italic">
                      {project.gallerySource}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Description & Objective */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5">
                    Overview
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1.5">
                    Primary Goal
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/40 p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800">
                    {project.goal}
                  </p>
                </div>

                {project.built && project.built.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                      Key Deliverables & Implementation
                    </h4>
                    <ul className="space-y-2">
                      {project.built.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="space-y-5 border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 md:pl-6 pt-4 md:pt-0">
                {project.role && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                      Role & Responsibilities
                    </h4>
                    <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                      {project.role.map((r, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Technologies</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.url && (
                  <div className="pt-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shadow-sm"
                    >
                      <span>Explore Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
