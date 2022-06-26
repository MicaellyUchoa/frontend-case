import { memo } from 'react';
import { ITab } from '../interfaces/ITab';
import TabItem from './TabItem';

interface TabProps {
    items: ITab[];
    onChangeItems: React.Dispatch<React.SetStateAction<ITab[]>>;
}

function Tab({ items, onChangeItems }: TabProps) {
    const handleChangeStatus = (tabItem: ITab, index: number) => {
        let newItems = [...items];
        newItems[index] = { description: tabItem.description, selected: !tabItem.selected };
        onChangeItems(newItems);
    };

    return (
        <div className="flex xs:gap-1 md:gap-8 my-4 lg:mr-10">
            {items.map((item, index) => (
                <TabItem
                    key={item.description}
                    description={item.description}
                    onClick={() => handleChangeStatus(item, index)}
                    selected={item.selected}
                />
            ))}
        </div>
    );
}
export default memo(Tab);
