export interface WayForPayRequest {
  merchantAccount: string;
  merchantDomainName: string;
  merchantSignature: string;
  orderReference: string;
  orderDate: number;
  amount: number;
  currency: string;
  productName: string[];
  productCount: number[];
  productPrice: number[];
  returnUrl?: string;
  serviceUrl?: string;
  returnMethod?: 'GET' | 'POST';
  returnAuto?: 'yes' | 'no';
  clientFirstName?: string;
  clientLastName?: string;
  clientEmail?: string;
  clientPhone?: string;
  [key: string]: string | number | string[] | number[] | undefined; // Для додаткових полів
}

export type PaymentStatus =
  | 'idle'
  | 'loading'
  | 'redirecting'
  | 'success'
  | 'error';
