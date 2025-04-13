import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Success = () => {
  useEffect(() => {
    toast.success('Pagamento confirmado!', {
      description: 'Seu pedido foi processado com sucesso.'
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#100100] text-white p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-gray-900/50 p-8 rounded-lg shadow-xl">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto animate-bounce" />
        
        <h1 className="text-3xl font-bold">Pagamento Confirmado!</h1>
        
        <p className="text-gray-300 text-lg">
          Seu desenho da alma gêmea será enviado em breve para seu email.
        </p>

        <div className="space-y-4">
          <p className="text-gray-400">
            Tempo estimado de entrega: 24-48 horas
          </p>
          
          <Link 
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Voltar para página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
