import * as yup from 'yup';

export const excelFileValidationSchema = yup.object().shape({
  file_name: yup.string().required(),
  data_analyst_id: yup.string().nullable(),
  organization_id: yup.string().nullable().required(),
});
