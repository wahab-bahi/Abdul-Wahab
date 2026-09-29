import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, CheckCircle2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { certificatesData } from '../data/portfolioData';

export const CertificateModal: React.FC = () => {
  const { selectedCertId, closeCertModal } = useNavigation();
  const cert = certificatesData.find(c => c.id === selectedCertId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCertModal();
      }
    };
    if (selectedCertId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCertId, closeCertModal]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCertModal}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 shrink-0">
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-amber-500" />
              <div>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {cert.issuer} · {cert.date}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-50">
                  {cert.title}
                </h3>
              </div>
            </div>
            <button
              onClick={closeCertModal}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Image & Details */}
          <div className="overflow-y-auto p-6 space-y-5">
            <div className="relative rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 shadow-inner">
              <img
                src={cert.image}
                alt={`${cert.title} certificate from ${cert.issuer}`}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain max-h-[60vh] mx-auto"
              />
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 space-y-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Curriculum & Specialization
                </span>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1">
                  {cert.focus}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-2">
                  Skills Validated
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cert.skillsGained.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
