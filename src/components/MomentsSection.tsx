import React, { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MOMENTS } from '../utils/constants';
import useRandomCaption from '../hooks/useRandomCaption';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-romance-black-dark/50 hover:bg-romance-black-dark text-white p-2 rounded-full transition-all duration-300"
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-romance-black-dark/50 hover:bg-romance-black-dark text-white p-2 rounded-full transition-all duration-300"
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </button>
  );
};

const MomentsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  
  const currentCaption = useRandomCaption(MOMENTS[currentSlide]?.captions || []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_: any, next: number) => setCurrentSlide(next),
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  return (
    <section id="moments" className="section-container relative bg-romance-black-light">
      <h2 className="section-title">🖼️ Nossos Momentos</h2>

      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-4 md:p-6 rounded-xl overflow-hidden">
          <Slider {...settings}>
            {MOMENTS.map((moment) => (
              <div key={moment.id} className="focus-within:outline-none">
                <div 
                  className="relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-[1.02]"
                  onClick={() => openLightbox(moment.url)}
                >
                  <div className="pb-[56.25%] relative">
                    <img 
                      src={moment.url} 
                      alt={`Momento ${moment.id}`} 
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          
          <div className="mt-4 text-center min-h-[50px] flex items-center justify-center">
            <p className="text-lg font-dancing text-romance-gold-light">
              {currentCaption}
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <div 
        className={`fixed inset-0 bg-black/90 z-50 flex items-center justify-center transition-opacity duration-300 ${showLightbox ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeLightbox}
      >
        <div className="max-w-4xl max-h-[80vh] w-full relative">
          <button
            className="absolute top-4 right-4 text-white hover:text-romance-pink-light bg-black/50 p-2 rounded-full transition-colors z-10"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <img 
            src={lightboxImage} 
            alt="Momento" 
            className="w-full h-auto max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-romance-pink-light rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-romance-purple-light rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default MomentsSection;