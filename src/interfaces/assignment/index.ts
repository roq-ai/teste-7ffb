import { UserInterface } from 'interfaces/user';
import { ExcelFileInterface } from 'interfaces/excel-file';
import { GetQueryInterface } from 'interfaces';

export interface AssignmentInterface {
  id?: string;
  project_manager_id?: string;
  data_analyst_id?: string;
  excel_file_id: string;
  created_at?: any;
  updated_at?: any;

  user_assignment_project_manager_idTouser?: UserInterface;
  user_assignment_data_analyst_idTouser?: UserInterface;
  excel_file?: ExcelFileInterface;
  _count?: {};
}

export interface AssignmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  project_manager_id?: string;
  data_analyst_id?: string;
  excel_file_id?: string;
}
