import crypto from 'crypto';

export const createSignature = (
  secret: string,
  values: (string | number)[],
) => {
  const dataString = values.map((v) => String(v ?? '')).join(';');

  return crypto
    .createHmac('md5', secret)
    .update(dataString, 'utf8')
    .digest('hex');
};
