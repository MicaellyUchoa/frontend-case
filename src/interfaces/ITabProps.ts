import { ITab } from './ITab';

export interface ITabProps {
    items: ITab[];
    onChangeItems: React.Dispatch<React.SetStateAction<ITab[]>>;
}
