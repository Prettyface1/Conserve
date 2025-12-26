export const Card = ({ children, title }: any) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
            {children}
        </div>
    );
};
