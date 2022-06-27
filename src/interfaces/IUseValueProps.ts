import { EntryEnum } from '../enums/EntryEnum';
import { StatusEnum } from '../enums/StatusEnum';

export interface IUseValueProps {
    status: StatusEnum;
    entry: EntryEnum;
    value: number;
}
