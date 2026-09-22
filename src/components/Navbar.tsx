import React, { useState, useEffect, useRef, useCallback } from 'react';
import { OverdoseLogo, CuratedExcessStamp, OverdoseMonogram } from './OverdoseLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './animations/MagneticButton';

type NavKey = 'HOME' | 'PROJECTS' | 'MATERIALS' | 'STUDIO' | 'CONTACT';

interface NavRoute {
  key: NavKey;
  label: string;
  targetId: string;
  number: string;
  subtitle: string;
}

interface NavbarProps {
  onSelectSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectSection }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<NavKey>('HOME');

  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // The 4 Primary Desktop Navigation routes (plus OVERDOSE logo for HOME)
  const desktopRoutes: NavRoute[] = [
    {
      key: 'PROJECTS',
      label: 'PROJECTS',
      targetId: 'projects',
      number: '02',
      subtitle: 'Verified Commission Archive',
    },
    {
      key: 'MATERIALS',
      label: 'MATERIALS',
      targetId: 'materials',
      number: '03',
      subtitle: '8 Tactile Directions & Palette',
    },
    {
      key: 'STUDIO',
      label: 'STUDIO',
      targetId: 'founders',
      number: '04',
      subtitle: 'Curated Excess & Directors',
    },
    {
      key: 'CONTACT',
      label: 'CONTACT',
      targetId: 'inquire',
      number: '05',
      subtitle: 'Private Commission Inquiries',
    },
  ];

  // The 5 Mobile Navigation routes
  const mobileRoutes: NavRoute[] = [
    {
      key: 'HOME',
      label: 'HOME',
      targetId: 'hero',
      number: '01',
      subtitle: 'The Sanctuary · Curated Excess',
    },
    ...desktopRoutes,
  ];

  // Scroll detection and active section scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      // Scroll spy logic
      if (scrollY < 240) {
        setActiveSection('HOME');
        return;
      }

      const spyPoints: { key: NavKey; id: string }[] = [
        { key: 'HOME', id: 'hero' },
        { key: 'STUDIO', id: 'philosophy' },
        { key: 'PROJECTS', id: 'projects' },
        { key: 'STUDIO', id: 'framework' },
        { key: 'MATERIALS', id: 'materials' },
        { key: 'STUDIO', id: 'plates' },
        { key: 'STUDIO', id: 'founders' },
        { key: 'CONTACT', id: 'dose' },
        { key: 'CONTACT', id: 'clients' },
        { key: 'CONTACT', id: 'inquire' },
      ];

      const offset = scrollY + 220;
      for (let i = spyPoints.length - 1; i >= 0; i--) {
        const el = document.getElementById(spyPoints[i].id);
        if (el && el.offsetTop <= offset) {
          setActiveSection(spyPoints[i].key);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth navigation handler
  const handleNavClick = useCallback(
    (targetId: string, key: NavKey) => {
      setActiveSection(key);
      setMobileMenuOpen(false);

      if (onSelectSection) {
        onSelectSection(targetId);
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    [onSelectSection]
  );

  // Lock body scroll and handle keyboard accessibility (Escape & Focus trapping)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus on close button when opened
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
          menuTriggerRef.current?.focus();
        }

        // Trap focus inside overlay
        if (e.key === 'Tab' && overlayRef.current) {
          const focusableElements = overlayRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* GLOBAL HEADER BAR */}
      <header
        id="overdose-global-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out select-none ${
          isScrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md py-4 border-b border-[#EDE6D8]/10 shadow-2xl'
            : 'bg-gradient-to-b from-[#0D0D0D]/80 via-[#0D0D0D]/40 to-transparent py-6 lg:py-7 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* PRIMARY: OVERDOSE LOGO (Always provides a route back to HOME) */}
          <div className="flex items-center">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero', 'HOME');
              }}
              className="focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B08C4A] rounded-sm transition-opacity hover:opacity-90 group"
              aria-label="OVERDOSE — Return to Home"
            >
              <OverdoseLogo
                size={isScrolled ? 'sm' : 'md'}
                withTagline={!isScrolled}
                className="transition-all duration-300"
              />
            </a>
          </div>

          {/* DESKTOP NAVIGATION: PROJECTS · MATERIALS · STUDIO · CONTACT */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 font-sans-editorial text-xs tracking-[0.24em]"
          >
            {desktopRoutes.map((route) => {
              const isActive = activeSection === route.key;
              return (
                <MagneticButton
                  key={route.key}
                  onClick={() => handleNavClick(route.targetId, route.key)}
                  dataCursor="NAV"
                  strength={5}
                >
                  <div
                    className={`relative py-1.5 px-2 transition-colors duration-300 group cursor-pointer ${
                      isActive ? 'text-[#EDE6D8] font-bold' : 'text-[#887961] hover:text-[#EDE6D8]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{route.label}</span>

                    {/* Active Page Subtle Indicator */}
                    {isActive ? (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B08C4A] transition-all duration-300 shadow-[0_0_8px_rgba(176,140,74,0.6)]" />
                    ) : (
                      <span className="absolute -bottom-1 left-2 right-2 w-0 h-[1.5px] bg-[#B08C4A]/60 transition-all duration-300 group-hover:w-[calc(100%-16px)]" />
                    )}
                  </div>
                </MagneticButton>
              );
            })}
          </nav>

          {/* MOBILE MENU TOGGLE (OVERDOSE logo on left + menu icon on right) */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              ref={menuTriggerRef}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-overlay"
              aria-label="Open Navigation Menu"
              className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-[#1E1E1E]/80 border border-[#EDE6D8]/20 text-[#EDE6D8] hover:border-[#B08C4A] hover:text-[#B08C4A] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B08C4A]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] font-medium">
                MENU
              </span>
              <Menu className="w-4 h-4 text-[#B08C4A]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN NAVIGATION OVERLAY */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation"
          className="fixed inset-0 z-50 bg-[#0D0D0D] flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto select-none"
        >
          {/* Ambient Chiaroscuro Radial Lighting */}
          <div className="absolute top-1/4 right-1/4 w-[360px] h-[360px] rounded-full bg-[#2B161A]/30 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-[280px] h-[280px] rounded-full bg-[#B08C4A]/15 blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 architectural-grid opacity-[0.05] pointer-events-none" />

          {/* Top Bar inside Overlay: OVERDOSE Logo + Close Button */}
          <div className="relative z-10 flex items-center justify-between border-b border-[#EDE6D8]/15 pb-6">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero', 'HOME');
              }}
              aria-label="OVERDOSE — Return to Home"
              className="focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B08C4A]"
            >
              <OverdoseLogo size="sm" withTagline={true} />
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                menuTriggerRef.current?.focus();
              }}
              aria-label="Close navigation menu"
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#1E1E1E] border border-[#EDE6D8]/20 text-[#EDE6D8] hover:border-[#B08C4A] hover:text-[#B08C4A] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B08C4A]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.22em]">CLOSE</span>
              <X className="w-4 h-4 text-[#B08C4A]" aria-hidden="true" />
            </button>
          </div>

          {/* Center: Oversized Editorial Menu Items */}
          <div className="relative z-10 py-10 my-auto">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#B08C4A] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B08C4A]" />
              <span>OVERDOSE ARCHITECTURAL INDEX</span>
            </div>

            <nav aria-label="Mobile Navigation Menu" className="space-y-4 sm:space-y-6">
              {mobileRoutes.map((route, idx) => {
                const isActive = activeSection === route.key;
                return (
                  <div
                    key={route.key}
                    style={{ animationDelay: `${idx * 60}ms` }}
                    className="animate-menu-item"
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(route.targetId, route.key)}
                      className={`w-full text-left flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-[#EDE6D8]/10 group transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B08C4A] ${
                        isActive ? 'text-[#EDE6D8]' : 'text-[#EDE6D8]/80'
                      }`}
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="font-mono text-xs sm:text-sm text-[#B08C4A] tracking-[0.25em]">
                          {route.number}
                        </span>
                        <span
                          className={`font-serif-luxury text-4xl sm:text-6xl tracking-tight transition-all duration-300 ${
                            isActive
                              ? 'text-[#EDE6D8] translate-x-2'
                              : 'text-[#EDE6D8] group-hover:text-[#B08C4A] group-hover:translate-x-2'
                          }`}
                        >
                          {route.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 pt-1 sm:pt-0 pl-8 sm:pl-0">
                        <span className="text-xs font-flourish italic text-[#887961] group-hover:text-[#D8D0C5] transition-colors">
                          {route.subtitle}
                        </span>
                        <div
                          className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                            isActive
                              ? 'bg-[#2B161A] border-[#B08C4A] text-[#EDE6D8]'
                              : 'border-[#EDE6D8]/20 group-hover:border-[#B08C4A] text-[#887961] group-hover:text-[#EDE6D8]'
                          }`}
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Bottom Bar: Brand Provenance & Creative Directors */}
          <div className="relative z-10 pt-6 border-t border-[#EDE6D8]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#887961]">
            <div>
              <p className="text-[#EDE6D8] uppercase tracking-[0.2em] font-sans-editorial text-[11px]">
                OVERDOSE · CONTEMPORARY LUXURY MAXIMALISM
              </p>
              <p className="text-[10px] text-[#887961] mt-1">
                Aarushi Panda & Tejaswi MK · Founders / Creative Directors
              </p>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-[#B08C4A] uppercase tracking-widest self-end sm:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B08C4A]" />
              <span>Bangalore · Mumbai · Dubai · London</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
