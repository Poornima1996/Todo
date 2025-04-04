export default function TaskItem({ task, onDone }) {
    return (
        <div className={`border p-3 rounded shadow ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
            <h4 className="font-semibold">{task.title}</h4>
            <p className="text-sm text-gray-600">{task.description}</p>
            <button
                onClick={() => onDone(task.id)}
                disabled={task.completed}
                className={`mt-2 px-3 py-1 rounded ${task.completed ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white`}
            >
                {task.completed ? 'Completed' : 'Mark as Done'}
            </button>
        </div>
    );
}
