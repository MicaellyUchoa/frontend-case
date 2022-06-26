interface TabProps {
    selected?: boolean;
    description: string;
}

function TabItem({ selected = false, description }: TabProps) {
    return (
        <div
            className={`rounded-full px-4 py-1 cursor-pointer ${
                selected ? 'bg-c_primary hover:bg-pink-600 text-white' : 'hover:bg-c_secondary_light text-c_primary'
            }`}
        >
            {description}
        </div>
    );
}
export default TabItem;
