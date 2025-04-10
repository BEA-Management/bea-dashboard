export function Table({ children }) { return <table className='w-full'>{children}</table>; }
export const TableHeader = ({ children }) => <thead>{children}</thead>;
export const TableBody = ({ children }) => <tbody>{children}</tbody>;
export const TableRow = ({ children }) => <tr>{children}</tr>;
export const TableHead = ({ children }) => <th className='text-left border-b p-2'>{children}</th>;
export const TableCell = ({ children }) => <td className='border-b p-2'>{children}</td>;