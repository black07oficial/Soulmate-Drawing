// AVISO: Nunca exponha chaves secretas do Stripe no código do cliente em produção.
// Esta implementação é apenas para fins de demonstração.
// Em um ambiente real, você deveria usar uma API backend ou Edge Functions.

import { toast } from '@/components/ui/sonner';

const STRIPE_PUBLIC_KEY = 'pk_live_51R7hjAEt83JylibldArmg1wvJ8NbDw08azXgCAvZCeJOSBT79TVkyyRRJTt0ZlOXrrLInDtPng1F805qjkiBwXX1002Jc1uFmO';

export const createCheckoutSession = async (priceId: string) => {
  try {
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${STRIPE_PUBLIC_KEY}`
      },
      body: JSON.stringify({
        payment_method_types: ['card'],
        line_items: [{
          price: priceId,
          quantity: 1
        }],
        mode: 'payment',
        success_url: `${window.location.origin}/success`,
        cancel_url: `${window.location.origin}/cancel`,
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Erro ao criar sessão');
    }

    return {
      success: true,
      sessionId: data.id,
      url: data.url
    };

  } catch (error) {
    console.error('Erro no createCheckoutSession:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro ao criar sessão'
    };
  }
};
