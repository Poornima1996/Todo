import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import * as api from './api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const res = await api.getTasks();
            setTasks(res.data.slice(-5).reverse());
        } catch (error) {
            toast.error("Failed to load tasks");
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleAddTask = async (task) => {
        try {
            await api.addTask(task);
            toast.success("Task added");
            fetchTasks();
        } catch (error) {
            toast.error("Failed to add task");
        }
    };

    const markTaskDone = async (id) => {
        try {
            await api.markTaskDone(id);
            toast.success("Task marked as done");
            fetchTasks();
        } catch (error) {
            toast.error("Failed to mark task as done");
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            padding: '40px',
            boxSizing: 'border-box',
            background: '#ffffff'
        }}>
            <div style={{
                display: 'flex',
                flex: 1,
                border: '1px solid #e5e5e5',
                borderRadius: '8px',
                overflow: 'hidden'
            }}>
                <div style={{
                    flex: 1,
                    padding: '20px',
                    borderRight: '1px solid #ddd'
                }}>
                    <TaskForm onAdd={handleAddTask} />
                </div>
                <div style={{
                    flex: 2,
                    padding: '20px',
                }}>
                    <TaskList tasks={tasks} onMarkDone={markTaskDone} />
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
        </div>
    );
}

export default App;
