import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { MESSAGES, SURPRISE_MESSAGE } from '../utils/constants';

const HeartwordsSection = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section id="messages" className="section-container relative">
      <h2 className="section-title">💌 Palavras do Coração</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MESSAGES.map((message, index) => (
          <div 
            key={message.id}
            className="message-card glass-card p-6 animate-fade-in-up"
            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
          >
            <div className="text-xl font-dancing mb-4 text-romance-pink-light">
              <Heart className="inline-block mr-2 mb-1" size={16} fill="currentColor" />
              Mensagem {message.id}
            </div>
            <p className="text-lg font-montserrat">
              "{message.text}"
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button 
          onClick={toggleModal}
          className="bg-romance-purple-DEFAULT hover:bg-romance-purple-dark text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 animate-pulse-slow inline-flex items-center"
        >
          <Heart className="mr-2" size={18} fill="currentColor" />
          Clique para ver uma surpresa
        </button>
      </div>

      {/* Surprise Modal */}
      <div className={`modal-overlay ${showModal ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-dancing text-romance-gold-light">Uma mensagem especial...</h3>
            <button 
              onClick={toggleModal}
              className="text-romance-pink-light hover:text-white transition-colors"
            >
              &times;
            </button>
          </div>
          
          <div className="mb-6">
            <div className="w-full rounded-lg overflow-hidden mb-4">
              <img 
                src="/project/src/img/IMG-20241216-WA0140.jpg" //consertar o caminho correto
                alt="nós dois juntos" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-lg mb-4 font-montserrat">
              {SURPRISE_MESSAGE}
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-block animate-heart-beat">
              <Heart size={32} className="text-romance-pink-light" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 opacity-10 -z-10">
        <Heart size={150} className="text-romance-pink-light" fill="currentColor" />
      </div>
      <div className="absolute -bottom-20 -right-10 opacity-10 -z-10">
        <Heart size={120} className="text-romance-pink-light" fill="currentColor" />
      </div>
    </section>
  );
};

export default HeartwordsSection;