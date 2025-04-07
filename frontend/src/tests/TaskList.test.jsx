import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList';

describe('TaskList component', () => {
  const mockTasks = [
    { id: 1, title: 'Test Task 1', description: 'Desc 1', is_done: false },
    { id: 2, title: 'Test Task 2', description: 'Desc 2', is_done: false },
  ];

  it('renders all tasks with title and description', () => {
    render(<TaskList tasks={mockTasks} onMarkDone={() => {}} />);
    expect(screen.getByText('Task List')).toBeInTheDocument();
    expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    expect(screen.getByText('Desc 1')).toBeInTheDocument();
    expect(screen.getByText('Test Task 2')).toBeInTheDocument();
    expect(screen.getByText('Desc 2')).toBeInTheDocument();
  });

  it('calls onMarkDone when "Done" button is clicked', () => {
    const mockMarkDone = jest.fn();
    render(<TaskList tasks={mockTasks} onMarkDone={mockMarkDone} />);
    const doneButtons = screen.getAllByText('Done');
    fireEvent.click(doneButtons[0]);
    expect(mockMarkDone).toHaveBeenCalledWith(1);
  });
});
