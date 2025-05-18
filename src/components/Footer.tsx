import React, { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typingTextRef.current) {
            typingTextRef.current.classList.add('animate-writing');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (typingTextRef.current) {
      observer.observe(typingTextRef.current);
    }

    return () => {
      if (typingTextRef.current) {
        observer.unobserve(typingTextRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="section-container py-10 relative">
      <div className="text-center">
        <div className="mb-8">
          <span 
            ref={typingTextRef}
            className="text-xl md:text-2xl font-dancing text-romance-gold-light inline-block overflow-hidden whitespace-nowrap"
          >
            Feito com ♥ pelo seu namorado mais apaixonado do mundo.
          </span>
        </div>
        
        <div>
          <button
            onClick={scrollToTop}
            className="inline-block bg-romance-pink-DEFAULT hover:bg-romance-pink-dark text-white rounded-full p-3 shadow-lg transition-all hover:shadow-romance-pink-light/30 hover:shadow-xl"
          >
            <Heart size={24} className="animate-heart-beat" fill="currentColor" />
          </button>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm text-romance-pink-light/60">
        <p>18.05.2024 - Para sempre</p>
      </div>
    </footer>
  );
};

export default Footer;