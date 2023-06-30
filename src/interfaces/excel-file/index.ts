import { AssignmentInterface } from 'interfaces/assignment';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ExcelFileInterface {
  id?: string;
  file_name: string;
  data_analyst_id?: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  assignment?: AssignmentInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    assignment?: number;
  };
}

export interface ExcelFileGetQueryInterface extends GetQueryInterface {
  id?: string;
  file_name?: string;
  data_analyst_id?: string;
  organization_id?: string;
}
