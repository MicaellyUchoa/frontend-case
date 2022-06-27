import { EntryEnum } from '../enums/EntryEnum';
import { SourceEnum } from '../enums/SourceEnum';
import { StatusEnum } from '../enums/StatusEnum';

export interface IExtract {
    date: string;
    amountTotal: number;
    items: IExtractItem[];
}

export interface IExtractItem {
    status: StatusEnum;
    actor: string;
    amount: number;
    source: SourceEnum;
    type: string;
    entry: EntryEnum;
    scheduled: boolean;
    dateEvent: string;
}
