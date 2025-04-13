
import React from 'react';
import { toast } from '@/components/ui/sonner';

interface CTAButtonProps {
  text: string;
  onClick: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cta-button bg-cta-green hover:bg-[#4bc55c] text-white font-bold text-3xl md:text-4xl py-6 px-8 rounded-3xl w-full max-w-3xl mx-auto button-shadow uppercase tracking-wide"
    >
      {text}
    </button>
  );
};

export default CTAButton;
