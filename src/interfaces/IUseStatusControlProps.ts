import { EntryEnum } from '../enums/EntryEnum';
import { SourceEnum } from '../enums/SourceEnum';
import { StatusEnum } from '../enums/StatusEnum';

export interface IUseStatusControlProps {
    status: StatusEnum;
    source: SourceEnum;
    entry: EntryEnum;
}
