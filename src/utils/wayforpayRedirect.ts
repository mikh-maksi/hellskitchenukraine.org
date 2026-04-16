import { WayForPayRequest } from '../../types/wayforpay';

export function redirectToWayForPay(data: WayForPayRequest): void {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://secure.wayforpay.com/pay';
  form.acceptCharset = 'utf-8';

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = `${key}[]`; // ← ПОВЕРТАЄМО []
        input.value = String(item);
        form.appendChild(input);
      });
    } else {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    }
  });

  document.body.appendChild(form);
  form.submit();
}
