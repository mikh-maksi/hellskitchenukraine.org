export type ReportType = 'activity' | 'financial';

export interface ReportsByYear {
  [year: string]: {
    activity?: string;
    financial?: string;
  };
}
// TODO: додати звіт у Public  за шляхом нижче та розкоментувати рядок з необхідним шляхом,шаблонні дані теж є можна розкоментити потестити
export const reportsData: ReportsByYear = {
  2025: {
    activity: 'reports/2025/activity.pdf',
    financial: 'reports/2025/financial.pdf',
  },
  2024: {
    activity: 'reports/2024/activity.pdf',
    financial: 'reports/2024/financial.pdf',
  },
};
