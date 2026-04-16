import { WayForPayRequest } from '../../types/wayforpay';

interface CreatePaymentResponse extends WayForPayRequest {}

export async function createWayForPayPayment(
  amount: number,
  currency: string = 'UAH',
): Promise<CreatePaymentResponse> {
  const response = await fetch(`/api/create-payment`, {
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
