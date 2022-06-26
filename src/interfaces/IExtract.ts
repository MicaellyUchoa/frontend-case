import { EntryEnum } from '../enums/EntryEnum';
import { SourceEnum } from '../enums/SourceEnum';
import { StatusEnum } from '../enums/StatusEnum';

export interface IExtract {
    date: string;
    amountTotal: number;
    items: IExtractItem[];
}

export interface IExtractItem {
    status: StatusEnum; //enum
    actor: string;
    amount: number;
    source: SourceEnum; //enum
    type: string; //enum
    entry: EntryEnum; //enum
    scheduled: boolean;
    dateEvent: string;
}
