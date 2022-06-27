import { memo } from 'react';
import { ITabItemProps } from '../../interfaces/ITabItemProps';

function TabItem({ selected, description, onClick }: ITabItemProps) {
    return (
        <button
            data-testid="tab-item"
            role="button"
            onClick={onClick}
            className={`rounded-full px-4 py-1 cursor-pointer hover:transition-colors
            ${selected ? 'bg-c_primary hover:bg-pink-700 text-white' : 'hover:bg-c_secondary_light text-c_primary'}`}
        >
            {description}
        </button>
    );
}
export default memo(TabItem);
