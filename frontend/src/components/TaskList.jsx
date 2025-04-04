import React from 'react';

const TaskList = ({ tasks, onMarkDone }) => {
    return (
        <div>
            <h2 style={{ marginBottom: '10px', fontSize: '18px' }}>Task List</h2>
            {tasks.length === 0 && <p>No tasks yet.</p>}
            {tasks.map(task => (
                <div key={task.id}
                    style={{
                        backgroundColor: '#e5e5e5',
                        borderRadius: '6px',
                        padding: '10px',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <div>
                        <strong style={{ fontSize: '14px' }}>{task.title}</strong>
                        <p style={{ fontSize: '12px', margin: 0 }}>{task.description}</p>
                    </div>
                    {!task.is_done && (
                        <button
                            onClick={() => onMarkDone(task.id)}
                            style={{
                                backgroundColor: '#d1d5db',
                                border: '1px solid #999',
                                borderRadius: '4px',
                                padding: '4px 8px',
                                cursor: 'pointer'
                            }}
                        >
                            Done
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TaskList;
