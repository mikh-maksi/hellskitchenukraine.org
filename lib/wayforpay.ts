import { createSignature } from './crypto';

/** Host only — no scheme, no trailing slash. Must match WayForPay cabinet. */
const MERCHANT_DOMAIN = 'www.hellskitchenukraine.org';

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
  const productName =
    'Благодійна безповоротна допомога на статутну діяльність.';
  const productCount = 1;
  const productPrice = params.amount;

  // Purchase HMAC: account;domain;orderRef;orderDate;amount;currency;name…;count…;price…
  const signatureData = [
    WAYFORPAY_MERCHANT,
    MERCHANT_DOMAIN,
    params.orderReference,
    String(orderDate),
    String(productPrice),
    params.currency,
    productName,
    String(productCount),
    String(productPrice),
  ];

  const merchantSignature = createSignature(WAYFORPAY_SECRET, signatureData);

  return {
    merchantAccount: WAYFORPAY_MERCHANT,
    merchantDomainName: MERCHANT_DOMAIN,
    merchantSignature,
    orderReference: params.orderReference,
    orderDate,
    amount: params.amount,
    currency: params.currency,
    productName: [productName],
    productCount: [productCount],
    productPrice: [productPrice],
    returnUrl: WAYFORPAY_RETURN_URL,
    serviceUrl: WAYFORPAY_SERVICE_URL,
    returnMethod: 'GET' as const,
    returnAuto: 'yes' as const,
  };
};
