import * as yup from 'yup';

export const assignmentValidationSchema = yup.object().shape({
  project_manager_id: yup.string().nullable(),
  data_analyst_id: yup.string().nullable(),
  excel_file_id: yup.string().nullable().required(),
});
