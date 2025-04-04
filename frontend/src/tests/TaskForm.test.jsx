import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../TaskForm';

test('renders form and submits', () => {
    const mockAdd = jest.fn();
    render(<TaskForm onAdd={mockAdd} />);

    fireEvent.change(screen.getByPlaceholderText(/task title/i), { target: { value: 'Test Task' } });
    fireEvent.change(screen.getByPlaceholderText(/task description/i), { target: { value: 'Test Desc' } });

    fireEvent.click(screen.getByText(/add task/i));
    expect(mockAdd).toHaveBeenCalled();
});
