export const WAYFORPAY_REASON_CODES: Record<string, string> = {
  '1100': 'payment.reasons.approved',
  '1101': 'payment.reasons.onVerification',
  '1105': 'payment.reasons.invalidCard',
  '1106': 'payment.reasons.unknown',
  '1122': 'payment.reasons.bankDeclined',
  '1124': 'payment.reasons.unknown',
  '1128': 'payment.reasons.insufficientFunds',
  '1131': 'payment.reasons.unknown',
  '1133': 'payment.reasons.expiredCard',
  '1140': 'payment.reasons.unknown',
  unknown: 'payment.reasons.unknown',
};
