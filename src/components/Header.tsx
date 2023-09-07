import { Button } from './Button';

export const Header: React.FC = () => {
    return (
        <header className="h-20 bg-oxford-blue flex items-center px-32">
            <h3 className="flex-1 text-ghost text-2xl ml-4">Shared To-Do</h3>
            <Button label='Login' />
        </header>
    );
};
