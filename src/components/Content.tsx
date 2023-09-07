import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Button } from './Button';

export const Content: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value;
        setInputValue(value);
    };

    const handleAddTask = (): void => {
        setTasks([...tasks, inputValue]);
        setInputValue('');
    };

    return (
        <div className="px-60 py-12">
            <div className="flex">
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    className='border-0 border-b-2 border-gray-600 w-9/12 my-2 mr-5'
                    placeholder='Buy groceries' />
                <Button label='Add Task' onClick={handleAddTask} />
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task}>{task}</li>
                ))}
            </ul>
        </div>
    );
};
