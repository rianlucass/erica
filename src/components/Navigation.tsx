import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../utils/constants';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 100);
      
      // Determine which section is in view
      const sections = NAV_ITEMS.map(item => item.id);
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed bottom-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-gradient-to-t from-romance-black-dark to-romance-black-dark/90 backdrop-blur-sm py-3 px-4 border-t border-romance-pink-dark/30">
        <div className="flex justify-around items-center max-w-lg mx-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex flex-col items-center py-1 px-2 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'text-romance-pink-light scale-110'
                    : 'text-white/60 hover:text-white/90'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;