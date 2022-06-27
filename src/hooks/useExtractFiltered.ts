import { EntryEnum } from '../enums/EntryEnum';
import { IExtract, IExtractItem } from '../interfaces/IExtract';
import { ITab } from '../interfaces/ITab';

interface useStatusControlProps {
    statusItems: ITab[];
    extractList: IExtract[];
    setFilteredExtractList: React.Dispatch<React.SetStateAction<IExtract[]>>;
}

function useExtractFiltered({ statusItems, extractList, setFilteredExtractList }: useStatusControlProps): void {
    let provisionalExtract = [] as IExtract[];

    const useFilterCondition = (filter: string, item: IExtractItem) => {
        switch (filter) {
            case 'Futuro':
                return item.scheduled;
            case 'Entrada':
                return item.entry === EntryEnum.CREDIT;
            case 'Saída':
                return item.entry === EntryEnum.DEBIT;
        }
    };

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
    setFilteredExtractList(provisionalExtract);
}

export default useExtractFiltered;
