/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { ToastProvider } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();
  const [navKey, setNavKey] = useState(0);

  useEffect(() => {
    setNavKey(prev => prev + 1);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative overflow-hidden">
      {/* Top Animated Route Progress Accent */}
      <motion.div
        key={`progress-${navKey}`}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 z-50 origin-left pointer-events-none"
      />

      {/* Subtle Floating Ambient Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-500/5 dark:bg-amber-500/8 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-emerald-500/5 dark:bg-emerald-500/6 blur-3xl"
        />
      </div>

      <Navbar />

      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Global Modals */}
      <ProjectModal />
      <CertificateModal />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </NavigationProvider>
    </ThemeProvider>
  );
}
