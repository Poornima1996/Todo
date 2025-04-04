import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8000'
});

export const getTasks = () => API.get('/tasks/');
export const addTask = (task) => API.post('/tasks/', task);
export const markTaskDone = (id) => API.patch(`/tasks/${id}/done`);
