import { PerformanceReviewInterface } from 'interfaces/performance-review';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  position: string;
  salary: number;
  hired_at?: any;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  performance_review?: PerformanceReviewInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    performance_review?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  position?: string;
  user_id?: string;
  company_id?: string;
}
