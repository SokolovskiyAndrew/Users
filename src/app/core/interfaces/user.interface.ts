export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: 'Riskmanager' | 'Processexpert' | 'Admin' | 'Auditor';
  email: string;
  birthDate: Date;
}
