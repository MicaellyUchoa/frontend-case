import { memo } from 'react';
import { IExtractItem } from '../interfaces/IExtract';

interface ExtractItemProps {
    item: IExtractItem;
}

function ExtractItem({ item }: ExtractItemProps) {
    return (
        <div>
            <p>{item.actor}</p>
            <p>{item.amount}</p>
            <p>{item.dateEvent}</p>
            <p>{item.entry}</p>
            <p>{item.scheduled}</p>
            <p>{item.source}</p>
            <p>{item.status}</p>
            <p>{item.type}</p>
        </div>
    );
}
export default memo(ExtractItem);
