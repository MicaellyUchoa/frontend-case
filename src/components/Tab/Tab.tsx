import { memo } from 'react';
import { FilterEnum } from '../../enums/FilterEnum';

import { ITab } from '../../interfaces/ITab';
import { ITabProps } from '../../interfaces/ITabProps';

import TabItem from '../TabItem/TabItem';

function Tab({ items, onChangeItems }: ITabProps) {
    const getIndexSelectedByEnum = (items: ITab[], descriptionSearch: string) => {
        return items.findIndex(item => {
            return item.description === descriptionSearch && item.selected;
        });
    };
    const handleChangeStatus = async (tabItem: ITab, index: number) => {
        let newItems = [...items];

        if (getIndexSelectedByEnum(newItems, FilterEnum.ALL) !== undefined) {
            newItems[getIndexSelectedByEnum(newItems, FilterEnum.ALL)] = {
                description: FilterEnum.ALL,
                selected: false,
            };
        }

        if (tabItem.description === FilterEnum.ALL && !tabItem.selected) {
            newItems = newItems.map(item => {
                let provisionalItem = { ...item, selected: false };
                return provisionalItem;
            });
        }

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
