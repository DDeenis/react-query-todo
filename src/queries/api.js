import axios from "axios";

const axiosTodos = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/todos'
});

export const getAllTodos = async () => (await axiosTodos.get('/')).data;
export const getTodos = async (page = 1, pageSize = 10) => (await axiosTodos.get(`?_start=${page}&_limit=${pageSize}`)).data;
export const addTodo = async ({ title, content, done = false }) => (await axiosTodos.post('/', { title, content, done })).data;
export const updateTodo = async (id, { title, content, done = false }) => (await axiosTodos.put(`/${id}`, { title, content, done })).data;
