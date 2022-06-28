import { EntryEnum } from '../../enums/EntryEnum';
import { FilterEnum } from '../../enums/FilterEnum';
import { IExtractItem } from '../../interfaces/IExtract';

export function useFilterCondition(filter: string, item: IExtractItem) {
    switch (filter) {
        case FilterEnum.FUTURE:
            return item.scheduled;
        case FilterEnum.ENTRY:
            return item.entry === EntryEnum.CREDIT;
        case FilterEnum.EXIT:
            return item.entry === EntryEnum.DEBIT;
        default:
            return item;
    }
}
