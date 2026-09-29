import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { PageId } from '../types/portfolio';

interface NavigationContextType {
  currentPage: PageId;
  navigateTo: (page: PageId) => void;
  selectedProjectId: string | null;
  openProjectModal: (id: string) => void;
  closeProjectModal: () => void;
  selectedCertId: string | null;
  openCertModal: (id: string) => void;
  closeCertModal: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const VALID_PAGES: PageId[] = ['home', 'about', 'services', 'projects', 'skills', 'contact'];

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialPage = (): PageId => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_PAGES.includes(hash as PageId)) {
        return hash as PageId;
      }
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);

  const navigateTo = useCallback((page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openProjectModal = useCallback((id: string) => {
    setSelectedProjectId(id);
  }, []);

  const closeProjectModal = useCallback(() => {
    setSelectedProjectId(null);
  }, []);

  const openCertModal = useCallback((id: string) => {
    setSelectedCertId(id);
  }, []);

  const closeCertModal = useCallback(() => {
    setSelectedCertId(null);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_PAGES.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigateTo,
        selectedProjectId,
        openProjectModal,
        closeProjectModal,
        selectedCertId,
        openCertModal,
        closeCertModal
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
