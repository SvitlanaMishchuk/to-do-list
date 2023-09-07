import { Button } from './Button';

export const Header: React.FC = () => {
    return (
        <header className="h-12 bg-arsenic flex items-center">
            <h3 className="flex-1 text-isabelline text-xl ml-4">Shared To-Do</h3>
            <Button label='Login' />
        </header>
    );
};
