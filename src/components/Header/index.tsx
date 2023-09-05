import './styles.scss';

export const Header: React.FC = () => {
    return (
        <header className="Header-container flex space-between align-center">
            <h3 className="Header-logo">Shared To-Do</h3>
            <button className="Header-login">Login</button>
        </header>
    );
};
