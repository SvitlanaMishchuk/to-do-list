interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex-none bg-equator text-oxford-blue rounded-lg py-1 px-3 mr-4 ${className}`}>
            {label}
        </button>
    );
};
