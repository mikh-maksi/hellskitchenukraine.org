import crypto from 'crypto';

export const createSignature = (
  secret: string,
  values: (string | number)[],
) => {
  const dataString = values.map((v) => String(v ?? '')).join(';');
  console.log(dataString);
  console.log(secret);
  const hash = crypto
    .createHmac('md5', secret)
    .update(dataString, 'utf8')
    .digest('hex');
  console.log(hash);
  return hash
};
