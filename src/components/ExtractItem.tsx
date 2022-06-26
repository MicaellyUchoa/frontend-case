import { memo } from 'react';
import useStatusControl from '../hooks/useStatusControl';
import useStatusIcon from '../hooks/useStatusIcon';
import useValue from '../hooks/useValue';
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
                <div className="w-8 h-8 bg-c_secondary_light rounded-full flex justify-center items-center">
                    <img className="h-4 w-4" src={useStatusIcon({ status: item.status })} alt={item.status} />
                </div>
                <p className="text-c_grayscale text-base">{item.actor}</p>
            </div>
            <p className="text-c_grayscale_medium text-base">
                {useStatusControl({ status: item.status, source: item.source, entry: item.entry })}
            </p>
            <p className="text-c_grayscale_medium text-base">{formatDate(item.dateEvent, "dd MMM yyyy '-' HH:mm")}</p>
            <p className="sm:text-end">{useValue({ value: item.amount, status: item.status, entry: item.entry })}</p>
        </div>
    );
}
export default memo(ExtractItem);
