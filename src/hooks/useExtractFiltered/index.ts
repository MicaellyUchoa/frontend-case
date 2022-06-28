import { IExtract } from '../../interfaces/IExtract';
import { IUseExtractFilteredProps } from '../../interfaces/IUseExtractFilteredProps';
import { useFilterCondition } from '../useFilterCondition';

function useExtractFiltered({
    statusItems,
    search,
    extractList,
    setFilteredExtractList,
}: IUseExtractFilteredProps): IExtract[] {
    let provisionalExtract = [] as IExtract[];

    search &&
        extractList.map(extractItem => {
            let provisional: IExtract;
            provisional = {
                amountTotal: extractItem.amountTotal,
                date: extractItem.date,
                items: extractItem.items.filter(item => {
                    return item.actor.toLowerCase().includes(search.toLowerCase());
                }),
            };
            provisional.items.length > 0 && provisionalExtract.push(provisional);
        });

    statusItems &&
        statusItems.map(statusItem => {
            if (statusItem.selected) {
                extractList.map(extractItem => {
                    let provisional: IExtract;
                    provisional = {
                        amountTotal: extractItem.amountTotal,
                        date: extractItem.date,
                        items: extractItem.items.filter(item => {
                            return useFilterCondition(statusItem.description, item);
                        }),
                    };
                    provisional.items.length > 0 && provisionalExtract.push(provisional);
                });
            }
        });
    provisionalExtract && setFilteredExtractList(provisionalExtract);
    return provisionalExtract;
}

export default useExtractFiltered;
