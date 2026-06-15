import crypto from 'crypto';

export const createSignatureTest = (
  secret: string,
  values: (string | number)[],
) => {
  const dataString = values.map((v) => String(v ?? '')).join(';');
  console.log("datastring = ", dataString);
  console.log("Secret= ",secret);
  const hash = crypto
    .createHmac('md5', secret)
    .update(dataString, 'utf8')
    .digest('hex');
  console.log(hash);
  return hash
};
