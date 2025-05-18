import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { FUTURE_PLANS } from '../utils/constants';

const FutureSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate timeline items when in view
            timelineItemsRef.current.forEach((item, index) => {
              if (item) {
                setTimeout(() => {
                  item.style.opacity = '1';
                }, 300 * index);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    // Create confetti effect on mouse over
    const container = e.currentTarget;
    const confettiCount = 20;
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'absolute w-2 h-2 rounded-full';
      
      // Random colors
      const colors = ['#FF6BA9', '#A172E0', '#FFD166', '#FFFFFF'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.backgroundColor = randomColor;
      
      // Position confetti at mouse location
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      confetti.style.left = `${x}px`;
      confetti.style.top = `${y}px`;
      
      // Random direction and speed
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      
      container.appendChild(confetti);
      
      // Animate confetti
      let posX = x;
      let posY = y;
      let opacity = 1;
      let scale = 1;
      
      const animate = () => {
        posX += vx;
        posY += vy;
        opacity -= 0.02;
        scale -= 0.01;
        
        confetti.style.transform = `translate(${posX - x}px, ${posY - y}px) scale(${scale})`;
        confetti.style.opacity = opacity.toString();
        
        if (opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          container.removeChild(confetti);
        }
      };
      
      requestAnimationFrame(animate);
    }
  };

  return (
    <section id="future" className="section-container bg-romance-black-light">
      <h2 className="section-title">✨ Mais frases e lembretes pra você (aqui eu pensei em uma linha do tempo mas não consegui vida 🥵🥵😂)</h2>

      <div className="max-w-3xl mx-auto">
        <div 
          ref={timelineRef} 
          className="timeline-container pl-6 md:pl-0 relative"
        >
          {FUTURE_PLANS.map((plan, index) => (
            <div
              key={plan.id}
              ref={(el) => (timelineItemsRef.current[index] = el)}
              className={`timeline-item md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}
              style={{ animationDelay: `${0.3 * index}s` }}
              onMouseOver={handleMouseOver}
            >
              <div 
                className="glass-card p-6 md:mx-4 relative overflow-hidden"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-romance-gold-dark/20 text-romance-gold-light text-sm mb-2">
                  {plan.year}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">.....</h3>
                <p className="text-romance-pink-light">{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 text-romance-purple-light/10">
        <MapPin size={100} />
      </div>
    </section>
  );
};

export default FutureSection;