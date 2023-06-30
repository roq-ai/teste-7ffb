import axios from 'axios';
import queryString from 'query-string';
import { AssignmentInterface, AssignmentGetQueryInterface } from 'interfaces/assignment';
import { GetQueryInterface } from '../../interfaces';

export const getAssignments = async (query?: AssignmentGetQueryInterface) => {
  const response = await axios.get(`/api/assignments${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createAssignment = async (assignment: AssignmentInterface) => {
  const response = await axios.post('/api/assignments', assignment);
  return response.data;
};

export const updateAssignmentById = async (id: string, assignment: AssignmentInterface) => {
  const response = await axios.put(`/api/assignments/${id}`, assignment);
  return response.data;
};

export const getAssignmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/assignments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAssignmentById = async (id: string) => {
  const response = await axios.delete(`/api/assignments/${id}`);
  return response.data;
};
