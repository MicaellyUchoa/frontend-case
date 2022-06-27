import { IExtract } from './IExtract';
import { ITab } from './ITab';

export interface IUseExtractFilteredProps {
    statusItems?: ITab[];
    search?: string;
    extractList: IExtract[];
    setFilteredExtractList: React.Dispatch<React.SetStateAction<IExtract[]>>;
}
