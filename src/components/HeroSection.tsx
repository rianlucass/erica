import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import useCountdown from '../hooks/useCountdown';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timeLeft = useCountdown();

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  const formatTime = (value: number, singular: string, plural: string) => {
    return `${value} ${value === 1 ? singular : plural}`;
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video/image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-romance-pink-dark/50 via-romance-purple-dark/50 to-romance-black-dark"></div>
        <div className="absolute inset-0 bg-[url('./img/fundoweb1.png')] bg-cover bg-center"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-dancing font-bold text-white mb-4 animate-bounce-slow">
            Feliz 1 Ano, meu amor! ❤️
          </h1>
          
          <div className="glass-card p-4 md:p-6 mb-8 inline-block animate-fade-in-up stagger-1">
            <div className="text-xl md:text-2xl text-romance-gold-light font-semibold font-montserrat">
              {timeLeft.years > 0 && <span>{formatTime(timeLeft.years, 'ano', 'anos')}, </span>}
              {timeLeft.months > 0 && <span>{formatTime(timeLeft.months, 'mês', 'meses')}, </span>}
              {timeLeft.days > 0 && <span>{formatTime(timeLeft.days, 'dia', 'dias')}, </span>}
              <span>{formatTime(timeLeft.hours, 'hora', 'horas')}, </span>
              <span>{formatTime(timeLeft.minutes, 'minuto', 'minutos')}, </span>
              <span>{formatTime(timeLeft.seconds, 'segundo', 'segundos')}</span>
            </div>
            <div className="text-sm mt-1 text-romance-pink-light">
              Desde 18 de Maio de 2024
            </div>
          </div>
          
          <a 
            href="#messages" 
            className="inline-flex items-center justify-center bg-romance-pink-DEFAULT hover:bg-romance-pink-dark text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 animate-fade-in-up stagger-3"
          >
            <span className="mr-2">Clique para descer</span>
            <Heart className="animate-heart-beat" size={18} />
          </a>
        </div>
      </div>

      {/* Animated floating hearts */}
      <div className="absolute bottom-8 left-4 md:left-12 animate-float opacity-60">
        <Heart className="text-romance-pink-light" size={24} fill="currentColor" />
      </div>
      <div className="absolute bottom-24 left-12 md:left-24 animate-float opacity-80" style={{animationDelay: '0.5s'}}>
        <Heart className="text-romance-pink-DEFAULT" size={32} fill="currentColor" />
      </div>
      <div className="absolute top-1/4 right-8 md:right-24 animate-float opacity-70" style={{animationDelay: '1s'}}>
        <Heart className="text-romance-pink-light" size={28} fill="currentColor" />
      </div>
      <div className="absolute top-1/3 left-16 md:left-1/3 animate-float opacity-50" style={{animationDelay: '1.5s'}}>
        <Heart className="text-romance-purple-light" size={22} fill="currentColor" />
      </div>
    </section>
  );
};

export default HeroSection;