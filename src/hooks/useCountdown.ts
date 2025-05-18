import { useState, useEffect } from 'react';
import { ANNIVERSARY_DATE } from '../utils/constants';

interface TimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountdown = (): TimeLeft => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // Calculate time difference
      const diff = now.getTime() - ANNIVERSARY_DATE.getTime();
      
      if (diff > 0) {
        // Convert time difference to years, months, days, hours, minutes, seconds
        const seconds = Math.floor((diff / 1000) % 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
        
        // Calculate total days first
        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        // Convert to years, months, days
        const years = Math.floor(totalDays / 365);
        const months = Math.floor((totalDays % 365) / 30);
        const days = Math.floor((totalDays % 365) % 30);
        
        setTimeLeft({ years, months, days, hours, minutes, seconds });
      }
    };

    // Initial calculation
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};

export default useCountdown;