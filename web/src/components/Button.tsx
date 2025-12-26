export const Button = ({ children, onClick, variant = 'primary' }: any) => {
    const baseStyle = 'px-6 py-3 rounded-lg font-semibold transition-all';
    const variants = {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
        danger: 'bg-red-600 hover:bg-red-700 text-white',
    };

    return (
        <button onClick={onClick} className={`${baseStyle} ${variants[variant as keyof typeof variants]}`}>
            {children}
        </button>
    );
};
