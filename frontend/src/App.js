import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tasks/");
      setTasks(response.data.slice(-5)); // only latest 5 tasks
      setError('');
    } catch (err) {
      setError('Failed to load tasks.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    try {
      await axios.post("http://localhost:8000/tasks/", task);
      fetchTasks();
    } catch (err) {
      alert("Failed to add task.");
    }
  };

  const markTaskDone = async (taskId) => {
    try {
      await axios.patch(`http://localhost:8000/tasks/${taskId}/done`);
      fetchTasks();
    } catch (err) {
      alert("Failed to mark task as done.");
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', padding: '20px' }}>
      <div style={{ flex: 1, paddingRight: '20px', borderRight: '1px solid #ccc' }}>
        <TaskForm onAdd={handleAddTask} />
      </div>
      <div style={{ flex: 2, paddingLeft: '20px' }}>
        <TaskList tasks={tasks} onMarkDone={markTaskDone} error={error} />
      </div>
    </div>
  );
}

export default App;
