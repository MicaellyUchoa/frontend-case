import { memo } from 'react';
import { IExtractItem } from '../interfaces/IExtract';

import formatDate from '../utils/formatDate';
import formatMoney from '../utils/formatMoney';

interface ExtractItemProps {
    item: IExtractItem;
}

function ExtractItem({ item }: ExtractItemProps) {
    return (
        <div className="w-full grid grid-cols-4 gap-4 xs:flex xs:flex-col items-center sm:grid text-base">
            <div className="flex gap-4 items-center">
                <p>ícone</p>
                <p className="text-c_grayscale text-base">{item.actor}</p>
            </div>
            <p>tipo transação</p>
            <p>{formatDate(item.dateEvent, 'dd MMM yyyy HH:mm')}</p>
            <p className="sm:text-end">{formatMoney(item.amount)}</p>
        </div>
    );
}
export default memo(ExtractItem);
