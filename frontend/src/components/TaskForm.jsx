import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert('Please fill out both fields');
            return;
        }
        onAdd({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <h2 style={{ marginBottom: '10px', fontSize: '18px' }}>Add a Task</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }}
            />
            <button
                onClick={handleSubmit}
                style={{
                    width: '100%',
                    backgroundColor: '#1E40AF',
                    color: '#fff',
                    padding: '8px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Add
            </button>
        </div>
    );
};

export default TaskForm;
