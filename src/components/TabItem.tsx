import { memo } from 'react';

interface TabProps {
    selected?: boolean;
    description: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

function TabItem({ selected, description, onClick }: TabProps) {
    return (
        <button
            onClick={onClick}
            className={`rounded-full px-4 py-1 cursor-pointer hover:transition-colors
            ${selected ? 'bg-c_primary hover:bg-pink-700 text-white' : 'hover:bg-c_secondary_light text-c_primary'}`}
        >
            {description}
        </button>
    );
}
export default memo(TabItem);
