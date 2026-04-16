import { createSignature } from './crypto';

export const buildWayForPayData = (params: {
  orderReference: string;
  amount: number;
  currency: string;
}) => {
  const {
    WAYFORPAY_MERCHANT,
    WAYFORPAY_SECRET,
    WAYFORPAY_RETURN_URL,
    WAYFORPAY_SERVICE_URL,
  } = process.env;

  if (!WAYFORPAY_MERCHANT || !WAYFORPAY_SECRET) {
    throw new Error('Missing WayForPay env vars');
  }

  const orderDate = Math.floor(Date.now() / 1000);
  const domain = 'hellskitchenukraine.org';

  const productName = 'Благодійна безповоротна допомога на статутну діяльність';
  const productCount = '1';
  const productPrice = String(params.amount);

  const signatureData = [
    WAYFORPAY_MERCHANT,
    domain,
    params.orderReference,
    String(orderDate),
    productPrice,
    params.currency,
    productName,
    productCount,
    productPrice,
  ];

  const signature = createSignature(WAYFORPAY_SECRET, signatureData);

  return {
    merchantAccount: WAYFORPAY_MERCHANT,
    merchantDomainName: domain,
    merchantSignature: signature,
    orderReference: params.orderReference,
    orderDate,
    amount: params.amount,
    currency: params.currency,
    productName: [productName],
    productCount: [1],
    productPrice: [params.amount],
    returnUrl: WAYFORPAY_RETURN_URL,
    serviceUrl: WAYFORPAY_SERVICE_URL,
    returnMethod: 'GET',
    returnAuto: 'yes',
  };
};
