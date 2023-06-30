import axios from 'axios';
import queryString from 'query-string';
import { ExcelFileInterface, ExcelFileGetQueryInterface } from 'interfaces/excel-file';
import { GetQueryInterface } from '../../interfaces';

export const getExcelFiles = async (query?: ExcelFileGetQueryInterface) => {
  const response = await axios.get(`/api/excel-files${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createExcelFile = async (excelFile: ExcelFileInterface) => {
  const response = await axios.post('/api/excel-files', excelFile);
  return response.data;
};

export const updateExcelFileById = async (id: string, excelFile: ExcelFileInterface) => {
  const response = await axios.put(`/api/excel-files/${id}`, excelFile);
  return response.data;
};

export const getExcelFileById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/excel-files/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteExcelFileById = async (id: string) => {
  const response = await axios.delete(`/api/excel-files/${id}`);
  return response.data;
};
