interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'HR Assistant', 'Applicant'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View job listings',
    'View application status',
    'View employee information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company data',
    'Manage job postings',
    'Manage applications',
    'Manage employee data',
    'Manage performance reviews',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/477796a6-9947-4142-80a0-3cf62dfb804a',
};
