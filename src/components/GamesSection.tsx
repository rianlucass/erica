import React, { useEffect, useRef } from 'react';
import { Gamepad2 } from 'lucide-react';
import { GAMES } from '../utils/constants';

const GamesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gameCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class to progress bars when in view
            gameCardsRef.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.classList.add('animate-fade-in-up');
                  const progressBar = card.querySelector('.progress-bar-fill');
                  if (progressBar instanceof HTMLElement) {
                    const game = GAMES[index];
                    progressBar.style.width = `${game.progress}%`;
                  }
                }, 100 * index);
              }
            });
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="games" ref={sectionRef} className="section-container relative">
      <h2 className="section-title">🎮 Jogos que Jogamos Juntos</h2>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GAMES.map((game, index) => (
            <div
              key={game.id}
              ref={(el) => (gameCardsRef.current[index] = el)}
              className="glass-card p-6 opacity-0 transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,107,169,0.3)]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">{game.icon}</span>
                <span className="text-xs px-2 py-1 bg-romance-gold-dark/20 text-romance-gold-light rounded-md">
                  Achievement
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-1">{game.title}</h3>
              <p className="text-romance-pink-light mb-4">{game.description}</p>
              
              <div className="progress-bar mb-2">
                <div className="progress-bar-fill" style={{ width: '0%' }}></div>
              </div>
              
              <div className="flex justify-between text-xs">
                <span>Progress</span>
                <span>{game.progress}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-dancing text-romance-gold-light animate-pulse-slow">
            Nosso co-op nunca desiste! 💖
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-6 right-10 text-romance-purple-light/10">
        <Gamepad2 size={120} />
      </div>
    </section>
  );
};

export default GamesSection;