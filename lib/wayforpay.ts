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
  // const domain = 'hellskitchenukraine.org';
  const domain = 'https://hellskitchenukraine.org/';
  // const domain = 'www.market.ua';
  

  const productName = 'Благодійна безповоротна допомога на статутну діяльність.';
  const productCount = '1';
  const productPrice = String(params.amount);

  // const signatureData = [
  //   WAYFORPAY_MERCHANT,
  //   domain,
  //   params.orderReference,
  //   String(orderDate),
  //   productPrice,
  //   params.currency,
  //   productName,
  //   productCount,
  //   productPrice
  // ];

    const signatureData = [
    WAYFORPAY_MERCHANT,
    domain,
    params.orderReference,
    String(orderDate),
    productPrice,
    params.currency,
    productName,
    productName,
    productCount,
    productCount,
    productPrice,
    0
  ];

  const signature = createSignature(WAYFORPAY_SECRET, signatureData);
  const signatureStringData = signatureData.map((v) => String(v ?? '')).join(';');
  const outData = {
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
    signatureString: signatureStringData,
    secrectKey: WAYFORPAY_SECRET,
    returnMethod: 'GET',
    returnAuto: 'yes',
  };

  //   const outData = {
  //   merchantAccount: WAYFORPAY_MERCHANT,
  //   merchantDomainName: domain,
  //   merchantSignature: signature,
  //   orderReference: params.orderReference,
  //   orderDate,
  //   amount: params.amount,
  //   currency: params.currency,
  //   productName: [productName,productName],
  //   productCount: [1,1],
  //   productPrice: [params.amount,0],
  //   returnUrl: WAYFORPAY_RETURN_URL,
  //   serviceUrl: WAYFORPAY_SERVICE_URL,
  //   signatureString: signatureStringData,
  //   secrectKey: WAYFORPAY_SECRET,
  //   returnMethod: 'GET',
  //   returnAuto: 'yes',
  // };

  Object.entries(outData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        
        console.log( `${key}[]`); // ← ПОВЕРТАЄМО []
        console.log(String(item));

      });
    } else {
      console.log(key);
      console.log(value);
    }
  });


  return outData;
};
