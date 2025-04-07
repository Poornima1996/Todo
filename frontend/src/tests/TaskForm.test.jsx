import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';

test('renders form and submits', () => {
    const mockAdd = jest.fn();
    render(<TaskForm onAdd={mockAdd} />);

    fireEvent.change(screen.getByPlaceholderText('Title'), {
        target: { value: 'Test Task' },
      });
      fireEvent.change(screen.getByPlaceholderText('Description'), {
        target: { value: 'Test Desc' },
      });
      
      fireEvent.click(screen.getByText('Add'));
    expect(mockAdd).toHaveBeenCalled();
});
