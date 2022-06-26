import { memo } from 'react';
import { IExtractItem } from '../interfaces/IExtract';

//date
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { formatISO } from 'date-fns';
import formatDate from '../utils/formatDate';

interface ExtractItemProps {
    item: IExtractItem;
}

function ExtractItem({ item }: ExtractItemProps) {
    return (
        <div className="text-base">
            <p>{item.actor}</p>
            <p>{item.amount}</p>
            <p>{formatDate(item.dateEvent, 'dd MMM yyyy HH:mm')}</p>
            <p>{item.entry}</p>
            <p>{item.scheduled}</p>
            <p>{item.source}</p>
            <p>{item.status}</p>
            <p>{item.type}</p>
        </div>
    );
}
export default memo(ExtractItem);
