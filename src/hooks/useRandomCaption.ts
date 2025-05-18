import { useState, useEffect } from 'react';

const useRandomCaption = (captions: string[]): string => {
  const [caption, setCaption] = useState<string>(captions[0]);

  useEffect(() => {
    if (!captions.length) return;

    const randomizeCaption = () => {
      const randomIndex = Math.floor(Math.random() * captions.length);
      setCaption(captions[randomIndex]);
    };

    // Initial randomization
    randomizeCaption();

    // Change caption every 5 seconds
    const intervalId = setInterval(randomizeCaption, 5000);

    return () => clearInterval(intervalId);
  }, [captions]);

  return caption;
};

export default useRandomCaption;