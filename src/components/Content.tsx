import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Button } from './Button';

export const Content: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>(['Buy groceries', 'Visit dentist', 'Update calendat meetings', 'Order present for brother']);
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
        <div className="max-w-5xl mx-auto py-12">
            <div className="flex mb-12">
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    className='border-0 border-b-2 border-gray-600 bg-spring-wood h-8 w-10/12 my-1 mr-5 px-3 focus:outline-0'
                    placeholder='Buy groceries' />
                <Button label='Add Task' className='w-2/12' onClick={handleAddTask} />
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task} className='max-w-4xl my-6 mx-auto py-3 px-6 bg-ghost rounded-2xl shadow shadow-ghost text-primary'>{task}</li>
                ))}
            </ul>
        </div>
    );
};
