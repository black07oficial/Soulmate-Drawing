import React, { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';
import { createCheckoutSession } from '@/services/stripe';
import { toast } from '@/components/ui/sonner';

const Index = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const res = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Erro ao criar sessão');
        console.log(data.error);
      }
    } catch (err) {
      console.error('Erro ao conectar com o backend:', err);
    }
  };
  

  // Adicionar o script do vídeo dinamicamente
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/ce0486d8-9ed4-4223-8fb8-7b9e529f9201/players/67cf8359e6f09f99375d81ec/player.js";
    script.async = true;
    script.id = "scr_67cf8359e6f09f99375d81ec";
    document.head.appendChild(script);

    // Quando o componente é desmontado, remover o script
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4 bg-[#100100] text-white">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
          Click on the video below to see your result right now
        </h2>

        {/* Contêiner do vídeo */}
        <div className="video-container mb-12 md:mb-16 w-full max-w-3xl">
          <div id="vid_67cf8359e6f09f99375d81ec" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
            <img 
              id="thumb_67cf8359e6f09f99375d81ec" 
              src="https://images.converteai.net/ce0486d8-9ed4-4223-8fb8-7b9e529f9201/players/67cf8359e6f09f99375d81ec/thumbnail.jpg" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
              alt="thumbnail" 
            />
            <div 
              id="backdrop_67cf8359e6f09f99375d81ec" 
              style={{ 
                WebkitBackdropFilter: 'blur(5px)', 
                backdropFilter: 'blur(5px)', 
                position: 'absolute', 
                top: 0, 
                height: '100%', 
                width: '100%' 
              }} 
            />
          </div>
        </div>

        {/* Texto e seta "CLICK BELOW" */}
        <div className="text-center mb-8 md:mb-12 arrow-container animate-bounce-arrow">
          <h3 className="text-5xl md:text-6xl font-bold mb-4 text-cta-blue">CLICK BELOW</h3>
          <ArrowDown className="mx-auto h-20 w-20 text-cta-blue" />
        </div>

        {/* Botão CTA - Centralizado */}
        <div className="w-full flex justify-center">
          <CTAButton 
            text="YES! I WANT TO RECEIVE MY SOULMATE DRAWING" 
            onClick={handleClick} 
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
