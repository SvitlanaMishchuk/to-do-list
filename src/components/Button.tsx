interface ButtonProps {
    label: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex-none bg-dark-vanilla rounded-lg py-1 px-3 mr-4">
            {label}
        </button>
    );
};
