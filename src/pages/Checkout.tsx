import { useEffect, useState } from 'react';
import { toast } from '@/components/ui/sonner';

const handleClick = async () => {
  const res = await fetch('http://localhost:4242/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json();
  if (data.url) {
    window.location.href = data.url;
  } else {
    alert('Erro ao iniciar o checkout');
    console.log(data.error);
  }
};

const Checkout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          {loading ? 'Preparando seu checkout...' : 'Redirecionando para o pagamento'}
        </h1>
        <p className="text-gray-600">
          {loading ? 'Por favor, aguarde um momento.' : 'Você será redirecionado em instantes.'}
        </p>
      </div>
    </div>
  );
};

export default Checkout;
