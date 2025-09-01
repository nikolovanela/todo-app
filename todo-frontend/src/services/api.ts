import axios, { type AxiosResponse } from 'axios';
import type { Todo } from '../types/todo';

const API_BASE = import.meta.env.VITE_API_BASE + '/tasks';

export const getTodos = async (): Promise<Todo[]> => {
  const res: AxiosResponse<Todo[]> = await axios.get(API_BASE);
  return res.data;
};

export const addTodo = async (todo: Omit<Todo, '_id'>): Promise<Todo> => {
  const res: AxiosResponse<Todo> = await axios.post(API_BASE, todo);
  return res.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE}/${id}`);
};

export const toggleTodo = async (id: string, completed: boolean): Promise<void> => {
  await axios.put(`${API_BASE}/${id}`, { completed });
};
