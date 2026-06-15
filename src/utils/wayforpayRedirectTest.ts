import CryptoJS from 'crypto-js';

import { WayForPayRequest } from '../../types/wayforpay';



export function redirectToWayForPay(data: WayForPayRequest): void {
  let sigStr='';
  let seccode='';
  const form = document.createElement('form');
  form.method = 'POST';
  // form.action = 'https://secure.wayforpay.com/pay';
  form.action = 'https://manec.science.kh.ua/wayforpay/';
  form.acceptCharset = 'utf-8';

  // отримаємо дані з WayForPayRequest
  Object.entries(data).forEach(([key, value]) => {
    // якщо отримуємо масив, то додаємо до назви []
    if (Array.isArray(value)) {
      value.forEach((item) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = `${key}[]`; // ← ПОВЕРТАЄМО []
        input.value = String(item);
        form.appendChild(input);
        
        const input1 = document.createElement('input');
        input.type = 'hidden';
        input1.name = `${key}[]`; // ← ПОВЕРТАЄМО []
        if (["productName", "productCount"].includes(key)){input1.value = String(item);}
        if (["productPrice"].includes(key)){input1.value = "0";}        
        form.appendChild(input1);

      });
    } else {
       // якщо не масив, то додаємо до залишаємо вихідну назву

      const input = document.createElement('input');
      if (["signatureString", "secrectKey"].includes(key)){sigStr = String(value);}
      if ([ "secrectKey"].includes(key)){seccode = String(value);}
      input.type = 'hidden';
      input.name = key;
      input.value = String(value);
      form.appendChild(input);
    }
  });
  // const hash = crypto
  //     .createHmac('md5', seccode)
  //     .update(sigStr, 'utf8')
  //     .digest('hex');
const hash = CryptoJS.HmacMD5(
    sigStr,
    seccode
).toString();
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'sig';
  input.value = String(hash);
  document.body.appendChild(form);
  // console.log(form);
  form.submit();
}
