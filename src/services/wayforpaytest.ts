import { WayForPayRequest } from '../../types/wayforpay';

interface CreatePaymentResponse extends WayForPayRequest {}

// Відправляємо суму та валюту на /api/create-payment
export async function createWayForPayPayment(
  amount: number,
  currency: string = 'UAH',
): Promise<CreatePaymentResponse> {
  const response = await fetch(`/api/create-payment-test`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount, currency }),
  });

  if (!response.ok) {
    throw new Error('Failed to create WayForPay payment');
  }

  return response.json();
}
