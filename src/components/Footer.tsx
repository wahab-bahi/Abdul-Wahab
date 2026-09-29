import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageCircle, Twitter, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useNavigation } from '../context/NavigationContext';
import { useToast } from './Toast';
import { PageId } from '../types/portfolio';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { showToast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    showToast({ message: 'Email copied to clipboard!', type: 'success' });
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills & Tech' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-zinc-200 dark:border-zinc-800/60">
          {/* Col 1: Wordmark & Bio summary */}
          <div className="md:col-span-2 space-y-4">
            <span className="font-display font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
              {personalInfo.name}
            </span>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              WordPress & WooCommerce Developer building business-first digital headquarters, with applied AI automation and custom API integrations.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>+92 306 0649870</span>
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span>{personalInfo.email}</span>
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 opacity-60" />}
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              {pages.map(p => (
                <li key={p.id}>
                  <button
                    onClick={() => navigateTo(p.id)}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-left"
                  >
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Connect */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Connect
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Github className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-sky-500" />
                  <span>X (Twitter)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Abdul Wahab. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Pakistan · Serving Global Clients</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
