import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { PageId } from '../types/portfolio';

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const { currentPage, navigateTo } = useNavigation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-50/85 dark:bg-zinc-950/85 border-b border-zinc-200 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <span className="font-display font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {personalInfo.name}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden sm:inline">Available</span>
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map(link => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors whitespace-nowrap rounded-lg ${
                  isActive
                    ? 'text-zinc-950 dark:text-white font-semibold bg-zinc-200/70 dark:bg-zinc-800/70'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/40'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-2 focus-visible:outline-amber-500"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>

          {/* Quick WhatsApp / Talk CTA */}
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-zinc-900 dark:bg-amber-500 text-zinc-50 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-amber-400 transition-colors shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/98 dark:bg-zinc-950/98 px-4 pt-2 pb-6 space-y-2 backdrop-blur-lg">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {NAV_LINKS.map(link => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-zinc-900 dark:bg-amber-500 text-zinc-50 dark:text-zinc-950"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={toggleTheme}
              className="px-3.5 py-2.5 text-xs font-medium border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-700 dark:text-zinc-300 flex items-center gap-2"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
