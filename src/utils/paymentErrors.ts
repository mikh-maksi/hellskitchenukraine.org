export const PAYMENT_ERROR_MESSAGES: Record<number, string> = {
  1105: 'Невірний номер картки',
  1122: 'Платіж відхилено банком',
};

type WayForPayError = {
  reasonCode?: number | string;
};

export const getPaymentErrorMessage = (error: unknown): string => {
  if (typeof error === 'object' && error !== null) {
    const maybeError = error as WayForPayError;

    if (maybeError.reasonCode !== undefined) {
      const code = Number(maybeError.reasonCode);

      return (
        PAYMENT_ERROR_MESSAGES[code] ??
        'Платіж не було завершено. Спробуйте іншу картку.'
      );
    }
  }

  if (error instanceof Error) {
    return 'Не вдалося ініціалізувати платіж. Спробуйте ще раз.';
  }

  return 'Сталася помилка оплати.';
};
