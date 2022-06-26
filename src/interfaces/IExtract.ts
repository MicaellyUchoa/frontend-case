export interface IExtract {
    date: string;
    amountTotal: number;
    items: IExtractItem[];
}

export interface IExtractItem {
    status: string; //enum
    actor: string;
    amount: number;
    source: string; //enum
    type: string; //enum
    entry: string; //enum
    scheduled: boolean;
    dateEvent: string;
}
