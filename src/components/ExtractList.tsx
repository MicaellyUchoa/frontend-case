import ExtractItem from './ExtractItem';
import { IExtract } from '../interfaces/IExtract';

interface ExtractListProps {
    list: IExtract[];
}

function ExtractList({ list }: ExtractListProps) {
    return (
        <div className="mt-10 w-full">
            {list.map((extract, indexExtract) => (
                <div key={indexExtract} className="border-blue-500 border">
                    <div>{extract.amountTotal}</div>
                    <div>{extract.date}</div>
                    {extract.items.map((item, indexItem) => (
                        <ExtractItem item={item} key={indexItem} />
                    ))}
                </div>
            ))}
        </div>
    );
}
export default ExtractList;
