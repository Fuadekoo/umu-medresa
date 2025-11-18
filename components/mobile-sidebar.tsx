"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle, useLanguage } from '@/components/language-toggle'
import { translations, TranslationKey } from '@/lib/translations'

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = (key: TranslationKey) => translations[language][key]

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Menu Button - Only visible on mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Backdrop with blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 h-screen w-1/2 bg-card border-l shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-bold text-lg">Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              <a
                href="#about"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
              >
                {t('about')}
              </a>
              <a
                href="#courses"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
              >
                {t('courses')}
              </a>
              <a
                href="#gallery"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
              >
                {t('gallery')}
              </a>
              <a
                href="#testimonials"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
              >
                {t('testimonials')}
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm font-medium hover:bg-accent rounded-lg transition-colors"
              >
                {t('contact')}
              </a>
            </div>

            {/* Theme and Language Toggles */}
            <div className="mt-6 pt-6 border-t space-y-4">
              <div className="flex items-center justify-between px-4">
                <span className="text-sm font-medium">Theme</span>
                <ThemeToggle />
              </div>
              <div className="flex items-center justify-between px-4">
                <span className="text-sm font-medium">Language</span>
                <LanguageToggle />
              </div>
            </div>
          </nav>

          {/* Enroll Button at bottom */}
          <div className="p-4 border-t">
            <Button className="w-full" size="lg" onClick={closeMenu}>
              {t('enrollNow')}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
